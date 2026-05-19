import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";

function NotFoundComponent() {
  return (
    <div className="relative min-h-screen bg-cream text-ink">
      {/* Dot-grid texture overlay */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid" />

      {/* Four corner marks */}
      <div className="pointer-events-none absolute inset-8 text-ink/30">
        <span className="absolute left-0 top-0 block h-4 w-4 border-l border-t border-current" />
        <span className="absolute right-0 top-0 block h-4 w-4 border-r border-t border-current" />
        <span className="absolute bottom-0 left-0 block h-4 w-4 border-b border-l border-current" />
        <span className="absolute bottom-0 right-0 block h-4 w-4 border-b border-r border-current" />
      </div>

      {/* Page layout */}
      <div className="relative flex min-h-screen flex-col">
        {/* Top bar */}
        <header className="border-b border-ink/10 px-6 py-5">
          <Logo />
        </header>

        {/* Centered content */}
        <main className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-electric">
            Error · 404
          </p>
          <h1 className="mt-4 font-display text-[10rem] leading-none text-navy-deep sm:text-[14rem]">
            404
          </h1>
          <h2 className="mt-2 font-display text-3xl text-ink">
            Page not found.
          </h2>
          <p className="mt-4 max-w-xs text-sm text-ink/60">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-navy-deep px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-electric"
          >
            Go home <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </main>

        {/* Footer */}
        <footer className="border-t border-ink/10 px-6 py-8">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-ink/40">
            The Metaweb · The Next Level of the Internet
          </p>
        </footer>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
