
import React, { useState, useMemo } from 'react';
import { Lead, EnrollmentStage, LeadTemperature } from '../../types';
import Card from '../ui/Card';

interface ReportsProps {
  leads: Lead[];
}

type SortConfig = {
  key: keyof Lead;
  direction: 'ascending' | 'descending';
} | null;

const TemperatureBadge: React.FC<{ temp: LeadTemperature }> = ({ temp }) => {
  const baseClasses = 'px-2 py-1 text-xs font-medium rounded-full';
  const colorClasses = {
    [LeadTemperature.Hot]: 'bg-status-hot/20 text-status-hot',
    [LeadTemperature.Warm]: 'bg-status-warm/20 text-status-warm',
    [LeadTemperature.Cold]: 'bg-status-cold/20 text-status-cold',
    [LeadTemperature.NonResponsive]: 'bg-status-nonresponsive/20 text-status-nonresponsive',
  };
  return <span className={`${baseClasses} ${colorClasses[temp]}`}>{temp}</span>;
};


const Reports: React.FC<ReportsProps> = ({ leads }) => {
  const [filterProgram, setFilterProgram] = useState('');
  const [filterStage, setFilterStage] = useState('');
  const [filterTemp, setFilterTemp] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig>(null);

  const programsOfInterest = useMemo(() => [...new Set(leads.map(l => l.programOfInterest))], [leads]);

  const filteredLeads = useMemo(() => {
    let sortedLeads = [...leads];

    if (sortConfig !== null) {
      sortedLeads.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return sortedLeads.filter(lead => {
      const programMatch = filterProgram ? lead.programOfInterest === filterProgram : true;
      const stageMatch = filterStage ? lead.stage === filterStage : true;
      const tempMatch = filterTemp ? lead.temperature === filterTemp : true;
      return programMatch && stageMatch && tempMatch;
    });
  }, [leads, filterProgram, filterStage, filterTemp, sortConfig]);

  const requestSort = (key: keyof Lead) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  const getSortIndicator = (key: keyof Lead) => {
    if (!sortConfig || sortConfig.key !== key) return null;
    return sortConfig.direction === 'ascending' ? '▲' : '▼';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-brand-dark">Lead Reports</h1>
        <button className="px-4 py-2 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-dark transition-colors">
            Create Custom Report
        </button>
      </div>
      
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="md:col-span-4 text-lg font-semibold text-gray-700">Filters</h3>
          <div>
            <label htmlFor="program" className="block text-sm font-medium text-gray-700">Program of Interest</label>
            <select id="program" onChange={e => setFilterProgram(e.target.value)} value={filterProgram} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm rounded-md">
              <option value="">All Programs</option>
              {programsOfInterest.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="stage" className="block text-sm font-medium text-gray-700">Enrollment Stage</label>
            <select id="stage" onChange={e => setFilterStage(e.target.value)} value={filterStage} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm rounded-md">
              <option value="">All Stages</option>
              {Object.values(EnrollmentStage).map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="temp" className="block text-sm font-medium text-gray-700">Lead Temperature</label>
            <select id="temp" onChange={e => setFilterTemp(e.target.value)} value={filterTemp} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm rounded-md">
              <option value="">All Temperatures</option>
              {Object.values(LeadTemperature).map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
           <div className="flex items-end">
            <button onClick={() => {setFilterProgram(''); setFilterStage(''); setFilterTemp('')}} className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
              Clear Filters
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {/* Add more headers as needed */}
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('lastName')}>Name {getSortIndicator('lastName')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('programOfInterest')}>Program {getSortIndicator('programOfInterest')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('stage')}>Stage {getSortIndicator('stage')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('temperature')}>Temperature {getSortIndicator('temperature')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('lastContacted')}>Last Contacted {getSortIndicator('lastContacted')}</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{lead.firstName} {lead.lastName}</div>
                    <div className="text-sm text-gray-500">{lead.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.programOfInterest}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.stage}</td>
                  <td className="px-6 py-4 whitespace-nowrap"><TemperatureBadge temp={lead.temperature} /></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(lead.lastContacted).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Reports;
