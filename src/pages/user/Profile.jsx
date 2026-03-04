import { User, Mail, Phone, MapPin, Camera } from 'lucide-react';
import React from 'react';
export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-8">Account Settings</h1>
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 bg-slate-900 h-32 relative">
          <div className="absolute -bottom-12 left-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-blue-100 border-4 border-white overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Alex+Doe&background=0D8ABC&color=fff" alt="Avatar" />
              </div>
              <button className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md border border-slate-100">
                <Camera size={16} className="text-slate-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-8 pt-16 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Full Name</label>
              <input type="text" defaultValue="Alex Doe" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Email Address</label>
              <input type="email" defaultValue="alex@example.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none" />
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}