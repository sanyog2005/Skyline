import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import React from 'react';
export default function EditProperty() {
  const { id } = useParams(); // Gets the property ID from the URL

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/dashboard/properties" className="p-2 bg-white rounded-full shadow-sm hover:bg-slate-50">
          <ArrowLeft size={20} className="text-slate-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Edit Listing #{id || '1024'}</h1>
          <p className="text-slate-500">Update your property details.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-slate-700">Description</label>
            <textarea 
              rows={4} 
              defaultValue="Beautiful modern apartment in the heart of downtown..." 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Status</label>
            <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none bg-white">
              <option>Available</option>
              <option>Pending</option>
              <option>Sold/Rented</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Update Price</label>
            <input type="number" defaultValue="2500" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none" />
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t">
          <button className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition flex items-center gap-2">
            <Save size={18} /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}