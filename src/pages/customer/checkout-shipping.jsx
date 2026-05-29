import CheckoutShell, { CheckoutField } from '@/components/customer/checkout/checkout-shell'
import { routes } from '@/config/routes'

export default function CustomerCheckoutShipping() {
  return (
    <CheckoutShell
      activeStep="information"
      heading="Shipping Details"
      nextTo={routes.checkout.payment}
      nextLabel="Continue to Shipping"
      framedSummary
    >
      <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
        <CheckoutField id="fullname" label="Full Name" placeholder="Jane Doe" />
        <CheckoutField id="email" label="Email Address" placeholder="jane@editorial.com" type="email" />
        <CheckoutField id="address" label="Shipping Address" placeholder="123 Minimalist Way, Suite 400" className="md:col-span-2" />
        <CheckoutField id="city" label="City" placeholder="Kyiv" />
        <CheckoutField id="postal" label="Postal Code" placeholder="01001" />
        <CheckoutField id="phone" label="Phone" placeholder="+380 00 000 00 00" className="md:col-span-2 lg:col-span-1" />
      </div>

      <button className="luxe-label mt-14 border-b border-black pb-1" type="button">
        Have a coupon code?
      </button>
    </CheckoutShell>
  )
}
