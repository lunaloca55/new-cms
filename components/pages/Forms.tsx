
import React from 'react';
import Card from '../ui/Card';
import { FormsIcon } from '../ui/icons';

const Forms: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-brand-dark">Forms</h1>
        <button className="px-4 py-2 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-dark transition-colors flex items-center">
            <FormsIcon className="w-5 h-5 mr-2" />
            Create New Form
        </button>
      </div>

      <Card>
        <h2 className="text-xl font-semibold text-brand-dark mb-4">Your Forms</h2>
        <p className="text-gray-600 mb-6">Manage and create lead capture forms to embed on your university's website.</p>
        
        <div className="border border-dashed border-gray-300 rounded-lg p-12 text-center">
            <div className="mx-auto h-12 w-12 text-gray-400">
                <FormsIcon className="w-full h-full" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No forms created yet</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by creating a new form.</p>
            <div className="mt-6">
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
                >
                    Create New Form
                </button>
            </div>
        </div>
      </Card>
    </div>
  );
};

export default Forms;
