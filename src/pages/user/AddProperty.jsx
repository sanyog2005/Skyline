import { useState } from 'react';
import { Upload, MapPin, DollarSign, Home } from 'lucide-react';
import React from 'react';
export default function AddProperty() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">List a Property</h1>
        <p className="text-slate-500">Fill out the details below to publish your property.</p>
      </div>

      <form className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 space-y-8">
        {/* Basic Info */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 border-b pb-2">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Property Title</label>
              <div className="relative">
                <Home className="absolute left-3 top-3.5 text-slate-400" size={18} />
                <input type="text" placeholder="e.g. Modern Downtown Apartment" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Price (USD)</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3.5 text-slate-400" size={18} />
                <input type="number" placeholder="2500" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-slate-700">Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 text-slate-400" size={18} />
                <input type="text" placeholder="123 Main St, City, ZIP" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Photo Upload */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 border-b pb-2">Photos</h2>
          <div className="border-2 border-dashed border-slate-200 rounded-2xl p-10 text-center hover:bg-slate-50 transition cursor-pointer">
            <Upload className="mx-auto text-slate-400 mb-3" size={32} />
            <p className="font-semibold text-slate-700">Click to upload or drag and drop</p>
            <p className="text-sm text-slate-500 mt-1">PNG, JPG up to 10MB</p>
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t">
          <button type="button" className="px-6 py-3 font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition">Cancel</button>
          <button type="submit" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200">
            Publish Listing
          </button>
        </div>
      </form>
    </div>
  );
}