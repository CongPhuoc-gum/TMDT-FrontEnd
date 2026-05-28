import CheckoutShell, { CheckoutField } from '@/pages/customer/checkout-shell'

const methods = ['Card', 'Bank Transfer', 'Cash on Delivery']

export default function CustomerCheckoutReview() {
  return (
    <CheckoutShell
      activeStep="payment"
      heading="Payment"
      backTo="/c/checkout/payment"
      nextLabel="Place Order"
    >
      <div>
        <span className="luxe-label">Payment Method</span>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {methods.map((method, index) => (
            <button
              key={method}
              type="button"
              className={`h-16 border px-5 text-left text-sm transition-colors ${
                index === 0 ? 'border-black bg-black text-white' : 'border-black/25 hover:border-black'
              }`}
            >
              {method}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
        <CheckoutField id="card-name" label="Name on Card" placeholder="Jane Doe" />
        <CheckoutField id="card-number" label="Card Number" placeholder="0000 0000 0000 0000" />
        <CheckoutField id="expiry" label="Expiry" placeholder="MM / YY" />
        <CheckoutField id="cvv" label="CVV" placeholder="123" />
      </div>
    </CheckoutShell>
  )
}
