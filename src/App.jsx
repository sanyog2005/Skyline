import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// --- LAYOUTS ---
import PublicLayout from './components/layout/PublicLayout';
import UserLayout from './components/layout/UserLayout';
import AdminLayout from './components/layout/AdminLayout';

// --- GUARDS ---
import ProtectedRoute from './routes/ProtectedRoute';

// --- PUBLIC & AUTH PAGES ---
import Home from './pages/landing/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

// --- USER PANEL PAGES ---
import UserDashboard from './pages/user/Dashboard';
import Profile from './pages/user/Profile';
import MyProperties from './pages/user/MyProperties';
import SavedProperties from './pages/user/SavedProperties';
import AddProperty from './pages/user/AddProperty';
import EditProperty from './pages/user/EditProperty';
import Messages from './pages/user/Messages';
import Subscription from './pages/user/Subscription';

// --- ADMIN PANEL PAGES ---
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/Users';
import AdminProperties from './pages/admin/Properties';
import Categories from './pages/admin/Categories';
import Inquiries from './pages/admin/Inquiries';
import Payments from './pages/admin/Payments';
import CMS from './pages/admin/CMS';
import Settings from './pages/admin/Settings';
import React from 'react';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* ==========================================
            1. PUBLIC ROUTES (Landing Page)
            ========================================== */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          {/* Add /about or /contact here if you expand the landing page */}
        </Route>

        {/* ==========================================
            2. AUTHENTICATION ROUTES (No Navbar/Footer)
            ========================================== */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />

        {/* ==========================================
            3. USER DASHBOARD (Protected: "user" role)
            ========================================== */}
        <Route element={<ProtectedRoute allowedRole="user" />}>
          <Route path="/dashboard" element={<UserLayout />}>
            <Route index element={<UserDashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="properties" element={<MyProperties />} />
            <Route path="saved" element={<SavedProperties />} />
            <Route path="properties/add" element={<AddProperty />} />
            <Route path="properties/edit/:id" element={<EditProperty />} />
            <Route path="messages" element={<Messages />} />
            <Route path="subscription" element={<Subscription />} />
          </Route>
        </Route>

        {/* ==========================================
            4. ADMIN DASHBOARD (Protected: "admin" role)
            ========================================== */}
        <Route element={<ProtectedRoute allowedRole="admin" />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="properties" element={<AdminProperties />} />
            <Route path="categories" element={<Categories />} />
            <Route path="inquiries" element={<Inquiries />} />
            <Route path="payments" element={<Payments />} />
            <Route path="cms" element={<CMS />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        {/* ==========================================
            5. CATCH-ALL (404 Fallback)
            ========================================== */}
        <Route path="*" element={<Navigate to="/" replace />} />
        
      </Routes>
    </BrowserRouter>
  );
}