import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--bg-base)] px-4 py-10">
      <section
        aria-labelledby="register-heading"
        className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 sm:p-8"
      >
        <div className="mb-8">
          <Link
            href="/"
            className="mb-6 flex w-fit items-center gap-3 rounded-lg"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent)] font-semibold text-white">
              T
            </span>

            <span className="text-lg font-semibold text-white">Taskflow</span>
          </Link>

          <h1
            id="register-heading"
            className="text-2xl font-semibold text-white"
          >
            Create an account
          </h1>

          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Sign up to get started
          </p>
        </div>

        <form>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-white"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Your name"
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] px-3 py-2.5 text-sm text-white placeholder:text-[var(--text-dim)] outline-none transition focus:border-[var(--accent)]"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-white"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] px-3 py-2.5 text-sm text-white placeholder:text-[var(--text-dim)] outline-none transition focus:border-[var(--accent)]"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-white"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              placeholder="At least 8 characters"
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] px-3 py-2.5 text-sm text-white placeholder:text-[var(--text-dim)] outline-none transition focus:border-[var(--accent)]"
            />

            <p className="mt-2 text-xs text-[var(--text-muted)]">
              Use at least 8 characters
            </p>
          </div>

          <button
            type="submit"
            className="mb-5 w-full rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]"
          >
            Create account
          </button>
        </form>

        <div className="mb-5 flex items-center gap-3" aria-hidden="true">
          <div className="h-px flex-1 bg-[var(--border)]" />
          <span className="text-xs text-[var(--text-muted)]">or</span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface)]"
        >
          <GoogleIcon />
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[var(--accent-light)] hover:underline"
          >
            Sign in
          </Link>
        </p>
      </section>
    </main>
  );
}

function GoogleIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}
