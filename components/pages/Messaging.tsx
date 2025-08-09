
import React from 'react';
import Card from '../ui/Card';

interface MessagingProps {
  type: 'SMS' | 'Email';
}

const Messaging: React.FC<MessagingProps> = ({ type }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-brand-dark">{type === 'SMS' ? 'Text Messaging' : 'Emails'}</h1>
      
      <Card className="h-[75vh]">
        <div className="flex h-full">
            {/* Conversations List */}
            <div className="w-1/3 border-r border-gray-200">
                <div className="p-4 border-b border-gray-200">
                    <input type="text" placeholder={`Search ${type}s...`} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary" />
                </div>
                <ul className="overflow-y-auto h-full">
                    <li className="p-4 border-b border-gray-200 cursor-pointer bg-brand-light">
                        <p className="font-semibold text-brand-dark">John Doe</p>
                        <p className="text-sm text-gray-600 truncate">Great, I'll get my application in by Friday!</p>
                    </li>
                     <li className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50">
                        <p className="font-semibold text-gray-800">Jane Smith</p>
                        <p className="text-sm text-gray-500 truncate">Can you send me more info on scholarships?</p>
                    </li>
                    <li className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50">
                        <p className="font-semibold text-gray-800">Michael Johnson</p>
                        <p className="text-sm text-gray-500 truncate">Thanks for the reminder!</p>
                    </li>
                </ul>
            </div>
            
            {/* Chat Window */}
            <div className="w-2/3 flex flex-col">
                <div className="p-4 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-brand-dark">John Doe</h2>
                    <p className="text-sm text-gray-500">Computer Science - Hot Lead</p>
                </div>
                <div className="flex-1 p-6 overflow-y-auto space-y-4">
                     <div className="flex justify-end">
                        <p className="bg-brand-primary text-white p-3 rounded-lg max-w-xs">Hi John, just checking in on your application for the CompSci program. Let me know if you have any questions!</p>
                    </div>
                     <div className="flex justify-start">
                        <p className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs">Hey! Thanks for reaching out. I'm working on it now. Great, I'll get my application in by Friday!</p>
                    </div>
                </div>
                <div className="p-4 border-t border-gray-200">
                    <textarea placeholder={`Type your ${type.toLowerCase()}...`} className="w-full p-2 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary" rows={3}></textarea>
                    <button className="mt-2 px-4 py-2 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-dark transition-colors float-right">
                        Send {type}
                    </button>
                </div>
            </div>
        </div>
      </Card>
    </div>
  );
};

export default Messaging;
