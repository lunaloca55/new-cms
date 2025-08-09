
import React, { useState } from 'react';
import Card from '../ui/Card';

const Tracking: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const trackingPixelCode = `<script async src="https://cdn.eduleads.app/tracker.js" data-site-id="UA-12345-EDU"></script>`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(trackingPixelCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-brand-dark">Tracking Pixel</h1>

      <Card>
        <h2 className="text-xl font-semibold text-brand-dark mb-2">Your Tracking Code</h2>
        <p className="text-gray-600 mb-4">
            Copy and paste this code into the `<head>` section of your university website HTML. This will enable lead tracking from your web forms.
        </p>
        
        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300 relative">
            <pre>
                <code>
                    {trackingPixelCode}
                </code>
            </pre>
            <button 
                onClick={copyToClipboard}
                className="absolute top-2 right-2 px-3 py-1 bg-gray-700 text-white rounded text-xs hover:bg-gray-600"
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold text-brand-dark mb-4">Test Your Installation</h2>
        <p className="text-gray-600 mb-4">
            Enter a URL from your website to verify the tracking pixel is installed correctly.
        </p>
        <div className="flex space-x-2">
            <input 
                type="url" 
                placeholder="https://www.youruniversity.edu/apply"
                className="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"
            />
            <button className="px-6 py-2 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-dark transition-colors">
                Test
            </button>
        </div>
      </Card>

    </div>
  );
};

export default Tracking;
