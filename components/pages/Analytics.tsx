
import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Lead, EnrollmentStage, LeadTemperature } from '../../types';
import { ENROLLMENT_STAGES_ORDERED } from '../../constants';
import Card from '../ui/Card';

interface AnalyticsProps {
  leads: Lead[];
}

const STAGE_COLORS = [ '#003f5c', '#444e86', '#955196', '#dd5182', '#ff6e54', '#ffa600' ];
const TEMP_COLORS = {
    [LeadTemperature.Hot]: '#FF4500',
    [LeadTemperature.Warm]: '#FFA500',
    [LeadTemperature.Cold]: '#00BFFF',
    [LeadTemperature.NonResponsive]: '#A9A9A9',
};


const Analytics: React.FC<AnalyticsProps> = ({ leads }) => {

  const stageData = useMemo(() => {
    return ENROLLMENT_STAGES_ORDERED.map(stage => ({
      name: stage,
      count: leads.filter(lead => lead.stage === stage).length,
    }));
  }, [leads]);
  
  const temperatureData = useMemo(() => {
    const temps = { Hot: 0, Warm: 0, Cold: 0, 'Non-Responsive': 0 };
    leads.forEach(lead => {
        temps[lead.temperature]++;
    });
    return Object.entries(temps).map(([name, value]) => ({ name, value }));
  }, [leads]);

  const dropOffData = useMemo(() => {
    const data: { name: string, dropped: number, continued: number }[] = [];
    for (let i = 0; i < ENROLLMENT_STAGES_ORDERED.length - 1; i++) {
        const currentStage = ENROLLMENT_STAGES_ORDERED[i];
        const nextStage = ENROLLMENT_STAGES_ORDERED[i+1];
        
        const startedAtCurrent = leads.filter(l => ENROLLMENT_STAGES_ORDERED.indexOf(l.stage) >= i || l.stage === EnrollmentStage.Dropped).length;
        const reachedNext = leads.filter(l => ENROLLMENT_STAGES_ORDERED.indexOf(l.stage) >= i+1).length;
        
        data.push({
            name: `${currentStage} to ${nextStage}`,
            dropped: startedAtCurrent - reachedNext,
            continued: reachedNext
        });
    }
    return data;
  }, [leads]);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-brand-dark">Insights & Analytics</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <h2 className="text-xl font-semibold text-brand-dark mb-4">Leads by Enrollment Stage</h2>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stageData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} angle={-25} textAnchor="end" height={60} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" name="Leads">
                   {stageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={STAGE_COLORS[index % STAGE_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        
        <Card>
          <h2 className="text-xl font-semibold text-brand-dark mb-4">Lead Temperature Distribution</h2>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie data={temperatureData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                       {temperatureData.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={TEMP_COLORS[entry.name as LeadTemperature]} />
                       ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      
      <Card>
        <h2 className="text-xl font-semibold text-brand-dark mb-4">Enrollment Stage Drop-off Rates</h2>
        <div style={{ height: '350px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dropOffData} layout="vertical" stackOffset="expand">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tickFormatter={(tick) => `${tick * 100}%`} />
              <YAxis type="category" dataKey="name" width={150} tick={{ fontSize: 12 }} />
              <Tooltip formatter={(value: number) => `${(value * 100).toFixed(1)}%`} />
              <Legend />
              <Bar dataKey="continued" stackId="a" fill="#2A9D8F" name="Continued" />
              <Bar dataKey="dropped" stackId="a" fill="#E76F51" name="Dropped Off" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default Analytics;
