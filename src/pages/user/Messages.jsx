import { Search, Send } from 'lucide-react';
import React from 'react';
const threads = [
  { id: 1, name: 'Sarah Jenkins', property: 'Downtown Studio', date: '2h ago', preview: 'Is this still available for viewing this weekend?' },
  { id: 2, name: 'Michael Chen', property: 'Modern Villa', date: '1d ago', preview: 'Would you be open to negotiating the deposit?' },
];

export default function Messages() {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Inquiries</h1>
      
      <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex">
        {/* Inbox List */}
        <div className="w-1/3 border-r border-slate-100 flex flex-col bg-slate-50/50">
          <div className="p-4 border-b border-slate-100">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
              <input type="text" placeholder="Search messages..." className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {threads.map((t) => (
              <div key={t.id} className="p-4 border-b border-slate-100 hover:bg-blue-50 cursor-pointer transition">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <span className="text-xs text-slate-500">{t.date}</span>
                </div>
                <p className="text-xs font-semibold text-blue-600 mb-1">{t.property}</p>
                <p className="text-sm text-slate-600 truncate">{t.preview}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Active Chat */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-slate-100 bg-white">
            <h3 className="font-bold text-slate-900">Sarah Jenkins</h3>
            <p className="text-xs text-slate-500">Inquiring about: <span className="text-blue-600">Downtown Studio</span></p>
          </div>
          <div className="flex-1 p-6 bg-slate-50 overflow-y-auto">
             <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tl-sm max-w-[80%] mb-4">
               Is this still available for viewing this weekend?
             </div>
          </div>
          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input type="text" placeholder="Type your reply..." className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-600" />
            <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}