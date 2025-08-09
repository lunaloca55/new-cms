
import React, { useEffect, useMemo, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Lead, EnrollmentStage } from '../../types';
import { ENROLLMENT_STAGES_ORDERED } from '../../constants';
import { generateWeeklyInsights } from '../../services/geminiService';
import Card from '../ui/Card';

interface DashboardProps {
  leads: Lead[];
}

const STAGE_COLORS = {
  [EnrollmentStage.Lead]: '#A8DADC',
  [EnrollmentStage.Interested]: '#457B9D',
  [EnrollmentStage.Applied]: '#1D3557',
  [EnrollmentStage.Accepted]: '#FDB913',
  [EnrollmentStage.Deposited]: '#005A9C',
  [EnrollmentStage.Matriculated]: '#2A9D8F',
};


const Dashboard: React.FC<DashboardProps> = ({ leads }) => {
  const [insights, setInsights] = useState<string>('');
  const [loadingInsights, setLoadingInsights] = useState<boolean>(true);

  useEffect(() => {
    const fetchInsights = async () => {
      setLoadingInsights(true);
      const result = await generateWeeklyInsights(leads);
      setInsights(result);
      setLoadingInsights(false);
    };

    fetchInsights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leads]);

  const summaryData = useMemo(() => {
    const totalLeads = leads.length;
    const newLeads = leads.filter(l => new Date(l.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length;
    const hotLeads = leads.filter(l => l.temperature === 'Hot').length;
    const matriculated = leads.filter(l => l.stage === EnrollmentStage.Matriculated).length;
    return { totalLeads, newLeads, hotLeads, matriculated };
  }, [leads]);
  
  const funnelData = useMemo(() => {
    return ENROLLMENT_STAGES_ORDERED.map(stage => ({
      name: stage,
      count: leads.filter(lead => lead.stage === stage || ENROLLMENT_STAGES_ORDERED.indexOf(lead.stage) >= ENROLLMENT_STAGES_ORDERED.indexOf(stage)).length,
    }));
  }, [leads]);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-brand-dark">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <h3 className="text-gray-500 font-medium">Total Leads</h3>
          <p className="text-3xl font-bold text-brand-dark">{summaryData.totalLeads}</p>
        </Card>
        <Card>
          <h3 className="text-gray-500 font-medium">New Leads (7 days)</h3>
          <p className="text-3xl font-bold text-brand-dark">{summaryData.newLeads}</p>
        </Card>
        <Card>
          <h3 className="text-gray-500 font-medium">Hot Leads</h3>
          <p className="text-3xl font-bold text-status-hot">{summaryData.hotLeads}</p>
        </Card>
        <Card>
          <h3 className="text-gray-500 font-medium">Matriculated</h3>
          <p className="text-3xl font-bold text-green-600">{summaryData.matriculated}</p>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-brand-dark mb-4">Enrollment Funnel</h2>
            <div style={{ height: '350px' }}>
              <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={funnelData} layout="vertical" margin={{ top: 5, right: 30, left: 50, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="name" width={100} tick={{ fontSize: 12 }} />
                      <Tooltip cursor={{ fill: 'rgba(225, 240, 255, 0.5)' }} />
                      <Bar dataKey="count" name="Leads" barSize={30}>
                        {funnelData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={STAGE_COLORS[entry.name as EnrollmentStage] || '#cccccc'} />
                        ))}
                      </Bar>
                  </BarChart>
              </ResponsiveContainer>
            </div>
        </Card>
        <Card>
            <h2 className="text-xl font-semibold text-brand-dark mb-4">AI-Powered Weekly Insights</h2>
            {loadingInsights ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
              </div>
            ) : (
              <div 
                className="prose prose-sm prose-ul:list-disc prose-ul:pl-5 prose-li:mb-2 text-gray-700"
                dangerouslySetInnerHTML={{ __html: insights }}
              />
            )}
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
