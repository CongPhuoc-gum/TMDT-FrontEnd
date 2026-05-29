import CheckoutShell, { CheckoutField } from '@/components/customer/checkout/checkout-shell'
import { routes } from '@/config/routes'

const deliveryWindows = ['09:00 - 12:00', '12:00 - 16:00', '16:00 - 20:00']

export default function CustomerCheckoutPayment() {
  return (
    <CheckoutShell
      activeStep="shipping"
      heading="Delivery Method"
      backTo={routes.checkout.shipping}
      nextTo={routes.checkout.review}
      nextLabel="Continue to Payment"
    >
      <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
        <CheckoutField id="recipient" label="Recipient Name" placeholder="Recipient full name" />
        <CheckoutField id="recipient-phone" label="Recipient Phone" placeholder="+380 00 000 00 00" />
        <CheckoutField id="delivery-note" label="Delivery Note" placeholder="Gate code, surprise note, concierge details" className="md:col-span-2" />
      </div>

      <div className="mt-14">
        <span className="luxe-label">Delivery Window</span>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {deliveryWindows.map((window, index) => (
            <button
              key={window}
              type="button"
              className={`h-16 border px-5 text-left text-sm transition-colors ${
                index === 1 ? 'border-black bg-black text-white' : 'border-black/25 hover:border-black'
              }`}
            >
              {window}
            </button>
          ))}
        </div>
      </div>
    </CheckoutShell>
  )
}
