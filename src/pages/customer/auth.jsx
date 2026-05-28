import { Link, useSearchParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { luxeImages } from '@/data/luxe-data'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function CustomerAuth() {
  const [params] = useSearchParams()
  const mode = params.get('mode') === 'register' ? 'register' : 'login'

  return (
    <div className="overflow-hidden rounded-xl border">
      <div className="grid min-h-[560px] grid-cols-1 lg:grid-cols-2">
        <div className="relative hidden lg:block">
          <img src={luxeImages.hero} alt="Floral mood" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="flex items-center p-6 sm:p-10">
          <div className="w-full space-y-6">
            <div className="inline-flex rounded-md border p-1 text-sm">
              <Link
                to="/c/auth?mode=login"
                className={`rounded px-3 py-1 ${mode === 'login' ? 'bg-accent text-accent-foreground' : ''}`}
              >
                Login
              </Link>
              <Link
                to="/c/auth?mode=register"
                className={`rounded px-3 py-1 ${mode === 'register' ? 'bg-accent text-accent-foreground' : ''}`}
              >
                Register
              </Link>
            </div>

            <div className="grid gap-4">
              {mode === 'register' && (
                <div className="space-y-2">
                  <Label htmlFor="fullname">Full name</Label>
                  <Input id="fullname" placeholder="Nguyen Van A" />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </div>

            <Button className="w-full">{mode === 'login' ? 'Sign in' : 'Create account'}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
