import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, Check, ShieldCheck, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { EditorialFooter } from '@/components/luxe/editorial-footer'
import { EditorialHeader } from '@/components/luxe/editorial-header'
import { LuxePage } from '@/components/luxe/luxe-page'
import { luxeImages } from '@/data/luxe-data'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function CustomerAuth() {
  const [params] = useSearchParams()
  const mode = params.get('mode') === 'register' ? 'register' : 'login'
  const isRegister = mode === 'register'

  const title = isRegister ? 'Create your flower account' : 'Welcome back'
  const subtitle = isRegister
    ? 'Start a profile to save bouquets, addresses, and your favorite floral styles.'
    : 'Sign in to continue checkout, track orders, and revisit your saved collections.'

  return (
    <LuxePage bg="#f7f4ef">
      <EditorialHeader variant="editorial" />

      <main className="px-5 pb-20 pt-12 sm:px-10 lg:px-16">
        <section className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] border border-black/10 bg-white/72 p-4 shadow-[0_24px_80px_rgba(19,38,30,0.12)] backdrop-blur-sm md:p-6 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="relative hidden min-h-[620px] overflow-hidden rounded-[1.5rem] lg:block">
            <img src={luxeImages.hero} alt="Floral mood" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/45 to-black/15" />

            <div className="absolute inset-x-8 top-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Floral member space
            </div>

            <div className="absolute inset-x-8 bottom-8 space-y-6 text-white">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
                  Personal bouquet concierge
                </p>
                <h2 className="font-display text-5xl leading-[0.96]">
                  {isRegister ? 'Join the Atelier' : 'Sign Into Your Studio'}
                </h2>
              </div>

              <ul className="space-y-3 text-sm text-white/90">
                {[
                  'Save curated collections and notes',
                  'Track each delivery in real time',
                  'Checkout faster with saved addresses',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/30 bg-white/12">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center rounded-[1.5rem] border border-black/10 bg-[#faf7f1] p-6 sm:p-9">
            <div className="w-full space-y-7">
              <div className="inline-flex rounded-full border border-black/10 bg-white p-1 text-sm">
                <Link
                  to="/c/auth?mode=login"
                  className={`rounded-full px-4 py-1.5 transition ${mode === 'login' ? 'bg-black text-white' : 'text-black/65 hover:text-black'}`}
                >
                  Sign in
                </Link>
                <Link
                  to="/c/auth?mode=register"
                  className={`rounded-full px-4 py-1.5 transition ${isRegister ? 'bg-black text-white' : 'text-black/65 hover:text-black'}`}
                >
                  Sign up
                </Link>
              </div>

              <div className="space-y-2">
                <h1 className="font-display text-4xl leading-tight text-black">{title}</h1>
                <p className="max-w-lg text-sm leading-6 text-black/62">{subtitle}</p>
              </div>

              <div className="grid gap-4">
                {isRegister && (
                  <div className="space-y-2">
                    <Label htmlFor="fullname">Full name</Label>
                    <Input
                      id="fullname"
                      placeholder="John Doe"
                      className="h-11 rounded-xl border-black/15 bg-white/90"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@email.com"
                    className="h-11 rounded-xl border-black/15 bg-white/90"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    {!isRegister && (
                      <Link to="/c/custom" className="text-xs font-medium text-black/60 underline underline-offset-4 hover:text-black">
                        Forgot password?
                      </Link>
                    )}
                  </div>
                  <Input id="password" type="password" className="h-11 rounded-xl border-black/15 bg-white/90" />
                </div>
                {isRegister && (
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm password</Label>
                    <Input id="confirm-password" type="password" className="h-11 rounded-xl border-black/15 bg-white/90" />
                  </div>
                )}
              </div>

              <Button className="h-11 w-full rounded-xl bg-black text-white hover:bg-black/85">
                {isRegister ? 'Create account' : 'Sign in'}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>

              <p className="flex items-start gap-2 text-xs leading-5 text-black/55">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                By continuing, you agree to our privacy policy and communication terms for order updates.
              </p>
            </div>
          </div>
        </section>
      </main>

      <EditorialFooter variant="compact" />
    </LuxePage>
  )
}
