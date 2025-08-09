
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AnalyticsIcon, DashboardIcon, EmailIcon, FormsIcon, ProfileIcon, ReportsIcon, TextMessageIcon, TrackingIcon, UniversityIcon } from './ui/icons';

const navItems = [
    { to: '/dashboard', icon: DashboardIcon, label: 'Dashboard' },
    { to: '/reports', icon: ReportsIcon, label: 'Reports' },
    { to: '/analytics', icon: AnalyticsIcon, label: 'Insights & Analytics' },
    { to: '/forms', icon: FormsIcon, label: 'Forms' },
    { to: '/text-messaging', icon: TextMessageIcon, label: 'Text Messaging' },
    { to: '/emails', icon: EmailIcon, label: 'Emails' },
    { to: '/profile', icon: ProfileIcon, label: 'Profile' },
    { to: '/tracking', icon: TrackingIcon, label: 'Tracking' },
];

const Sidebar: React.FC = () => {
    const linkClasses = "flex items-center px-4 py-3 text-gray-600 hover:bg-brand-light hover:text-brand-primary transition-colors duration-200 rounded-lg";
    const activeLinkClasses = "bg-brand-light text-brand-primary font-semibold";

    return (
        <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col">
            <div className="h-20 flex items-center justify-center px-4 border-b border-gray-200">
                <UniversityIcon className="h-8 w-8 text-brand-primary" />
                <h1 className="ml-3 text-2xl font-bold text-brand-dark">EduLeads</h1>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
                    >
                        <item.icon className="h-5 w-5 mr-4" />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>
            <div className="px-4 py-4 border-t border-gray-200">
                <div className="flex items-center">
                    <img className="h-10 w-10 rounded-full object-cover" src="https://picsum.photos/100/100" alt="User" />
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-800">Maria Garcia</p>
                        <p className="text-xs text-gray-500">Enrollment Specialist</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
