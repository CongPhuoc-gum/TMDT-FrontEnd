import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'

import AdminLayout from '@/layouts/admin-layout'
import CustomerLayout from '@/layouts/customer-layout'
import StaffLayout from '@/layouts/staff-layout'

import AdminCoupons from '@/pages/admin/coupons'
import AdminCustomers from '@/pages/admin/customers'
import AdminDashboard from '@/pages/admin/dashboard'
import AdminInventory from '@/pages/admin/inventory'
import AdminStaff from '@/pages/admin/staff'

import CustomerAuth from '@/pages/customer/auth'
import CustomerCategory from '@/pages/customer/category'
import CustomerCheckoutPayment from '@/pages/customer/checkout-payment'
import CustomerCheckoutReview from '@/pages/customer/checkout-review'
import CustomerCheckoutShipping from '@/pages/customer/checkout-shipping'
import CustomerCustomRequest, { CustomerBespokeStudio } from '@/pages/customer/custom-request'
import CustomerHome from '@/pages/customer/home'
import CustomerInfoPage from '@/pages/customer/info'
import CustomerProduct from '@/pages/customer/product'
import CustomerSubscription from '@/pages/customer/subscription'
import CustomerVisualMenu from '@/pages/customer/visual-menu'

import StaffChat from '@/pages/staff/chat'
import StaffDashboard from '@/pages/staff/dashboard'
import StaffLogistics from '@/pages/staff/logistics'
import StaffNotifications from '@/pages/staff/notifications'
import StaffOrders from '@/pages/staff/orders'
import StaffRequests from '@/pages/staff/requests'

function LegacyCustomerProductRedirect() {
  const { productId } = useParams()
  return <Navigate to={`/c/product/${productId ?? ''}`} replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/c" replace />} />

        <Route path="/c" element={<CustomerLayout />}>
          <Route index element={<CustomerHome />} />
          <Route path="category/:categoryId" element={<CustomerCategory />} />
          <Route path="product/:productId" element={<CustomerProduct />} />
          <Route path="p/:productId" element={<LegacyCustomerProductRedirect />} />
          <Route path="menu" element={<CustomerVisualMenu />} />
          <Route path="subscription" element={<CustomerSubscription />} />
          <Route path=":slug" element={<CustomerInfoPage />} />
          <Route path="auth" element={<CustomerAuth />} />
          <Route path="custom" element={<CustomerCustomRequest />} />
          <Route path="custom/studio" element={<CustomerBespokeStudio />} />
          <Route
            path="checkout"
            element={<Navigate to="/c/checkout/shipping" replace />}
          />
          <Route path="checkout/shipping" element={<CustomerCheckoutShipping />} />
          <Route path="checkout/payment" element={<CustomerCheckoutPayment />} />
          <Route path="checkout/review" element={<CustomerCheckoutReview />} />
        </Route>

        <Route path="/staff" element={<StaffLayout />}>
          <Route index element={<Navigate to="/staff/dashboard" replace />} />
          <Route path="dashboard" element={<StaffDashboard />} />
          <Route path="chat" element={<Navigate to="/chat" replace />} />
          <Route path="notifications" element={<Navigate to="/notifications" replace />} />
          <Route path="orders" element={<StaffOrders />} />
          <Route path="requests" element={<StaffRequests />} />
          <Route path="logistics" element={<StaffLogistics />} />
        </Route>

        <Route path="/chat" element={<StaffChat />} />
        <Route path="/notifications" element={<StaffNotifications />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="notifications" element={<Navigate to="/notifications" replace />} />
          <Route path="staff" element={<AdminStaff />} />
          <Route path="inventory" element={<AdminInventory />} />
          <Route path="coupons" element={<AdminCoupons />} />
          <Route path="customers" element={<AdminCustomers />} />
        </Route>

        <Route path="*" element={<Navigate to="/c" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
