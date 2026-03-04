import { Check, Zap } from 'lucide-react';
import React from 'react';
const plans = [
  { name: 'Basic', price: 'Free', features: ['1 Active Listing', 'Basic Analytics', 'Standard Support'], current: true },
  { name: 'Pro Agent', price: '$49/mo', features: ['10 Active Listings', 'AI Description Generator', 'Priority Search Ranking', '24/7 Support'], current: false },
];

export default function Subscription() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900">Upgrade your Plan</h1>
        <p className="text-slate-500 mt-2">Get access to AI valuation tools and list more properties.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
        {plans.map((plan) => (
          <div key={plan.name} className={`bg-white rounded-3xl p-8 border-2 ${plan.name === 'Pro Agent' ? 'border-blue-600 shadow-xl shadow-blue-100 relative' : 'border-slate-100 shadow-sm'}`}>
            {plan.name === 'Pro Agent' && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                <Zap size={14} /> Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
            <div className="mt-4 mb-8">
              <span className="text-4xl font-black text-slate-900">{plan.price}</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-slate-600">
                  <div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={14} /></div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold transition ${
              plan.current 
                ? 'bg-slate-100 text-slate-500 cursor-default' 
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}>
              {plan.current ? 'Current Plan' : 'Upgrade to Pro'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}