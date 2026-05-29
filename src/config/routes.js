import { appConfig } from '@/config/env'

const c = appConfig.customerHomePath.replace(/\/$/, '')

export const routes = {
  home: c,
  auth: `${c}/auth`,
  custom: `${c}/custom`,
  menu: `${c}/menu`,
  category: (categoryId) => `${c}/category/${categoryId}`,
  product: (productId) => `${c}/product/${productId}`,
  checkout: {
    shipping: `${c}/checkout/shipping`,
    payment: `${c}/checkout/payment`,
    review: `${c}/checkout/review`,
  },
  staff: {
    dashboard: '/staff/dashboard',
    orders: '/staff/orders',
    requests: '/staff/requests',
    logistics: '/staff/logistics',
  },
  admin: {
    dashboard: '/admin/dashboard',
    staff: '/admin/staff',
    inventory: '/admin/inventory',
    coupons: '/admin/coupons',
    customers: '/admin/customers',
  },
  chat: appConfig.staffChatPath,
  notifications: '/notifications',
}
