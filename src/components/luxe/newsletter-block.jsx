import { LuxeLabel } from '@/components/luxe/luxe-label'

export function NewsletterBlock({
  eyebrow = 'Join the Circle',
  title = 'Private Collections & Floral Tales.',
  placeholder = 'Email Address',
  buttonLabel = 'Subscribe',
  className = 'border-y border-black/15 bg-[#f3f3f3] px-5 py-24 text-center sm:px-10 lg:px-16 lg:py-32',
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-4xl">
        <LuxeLabel>{eyebrow}</LuxeLabel>
        <h2 className="luxe-serif mt-6 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">{title}</h2>
        <form
          className="mx-auto mt-12 flex max-w-2xl flex-col items-end gap-6 sm:flex-row"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            {placeholder}
          </label>
          <input
            id="newsletter-email"
            className="h-12 w-full border-0 border-b border-black bg-transparent px-0 text-sm outline-none ring-0 placeholder:text-[#747878] focus:border-b-2 focus:ring-0"
            placeholder={placeholder}
            type="email"
          />
          <button
            type="submit"
            className="luxe-label h-12 w-full bg-black px-10 text-white transition-colors hover:bg-[#5d5f5f] sm:w-auto"
          >
            {buttonLabel}
          </button>
        </form>
      </div>
    </section>
  )
}
