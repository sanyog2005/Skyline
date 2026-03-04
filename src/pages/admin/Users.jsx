import { Search, MoreVertical, Shield } from 'lucide-react';
import React from 'react';
const mockUsers = [
  { id: 1, name: 'Alice Cooper', email: 'alice@example.com', role: 'User', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Agent', status: 'Active' },
  { id: 3, name: 'Charlie Davis', email: 'charlie@example.com', role: 'User', status: 'Banned' },
];

export default function Users() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">User Management</h1>
          <p className="text-slate-500">Manage accounts and permissions.</p>
        </div>
        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-800">
          Export CSV
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input type="text" placeholder="Search by name or email..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <select className="border border-slate-200 rounded-lg px-4 py-2 outline-none">
            <option>All Roles</option>
            <option>User</option>
            <option>Agent</option>
          </select>
        </div>

        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 font-semibold text-slate-700">Name</th>
              <th className="px-6 py-4 font-semibold text-slate-700">Role</th>
              <th className="px-6 py-4 font-semibold text-slate-700">Status</th>
              <th className="px-6 py-4 font-semibold text-slate-700 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockUsers.map((u) => (
              <tr key={u.id} className="hover:bg-slate-50">
                <td className="px-6 py-4">
                  <p className="font-medium text-slate-900">{u.name}</p>
                  <p className="text-sm text-slate-500">{u.email}</p>
                </td>
                <td className="px-6 py-4">
                  <span className={`flex items-center gap-1 text-sm font-medium ${u.role === 'Agent' ? 'text-purple-600' : 'text-slate-600'}`}>
                    {u.role === 'Agent' && <Shield size={14} />} {u.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-md text-xs font-bold ${u.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {u.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-slate-900"><MoreVertical size={20} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}