
import React from 'react';
import Card from '../ui/Card';

const Profile: React.FC = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-brand-dark">Profile & Settings</h1>

      <Card>
        <div className="flex items-center space-x-6">
            <img className="h-24 w-24 rounded-full object-cover" src="https://picsum.photos/100/100" alt="User" />
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Maria Garcia</h2>
                <p className="text-md text-gray-500">Enrollment Specialist</p>
                <button className="mt-2 text-sm text-brand-primary hover:underline">Change Photo</button>
            </div>
        </div>
      </Card>
      
      <Card>
        <h3 className="text-xl font-semibold text-brand-dark mb-4">Your Information</h3>
        <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" defaultValue="Maria" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"/>
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" defaultValue="Garcia" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"/>
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" defaultValue="maria.garcia@university.edu" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"/>
            </div>
             <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" defaultValue="555-0199" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"/>
            </div>
            <div className="pt-4 flex justify-end">
                <button type="submit" className="px-6 py-2 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-dark transition-colors">
                    Save Changes
                </button>
            </div>
        </form>
      </Card>
    </div>
  );
};

export default Profile;
