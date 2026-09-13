import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { WordBridgeLogo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MarketingShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-dvh bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-30 border-b border-border/80 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <WordBridgeLogo />
          <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Marketing">
            <Link
              to="/articles"
              className={cn(
                "font-medium text-muted-foreground no-underline transition-colors duration-quick hover:text-foreground",
                pathname === "/articles" && "text-foreground",
              )}
            >
              Explore
            </Link>
            <Link
              to="/practice"
              className="font-medium text-muted-foreground no-underline transition-colors duration-quick hover:text-foreground"
            >
              Practice
            </Link>
            <Link
              to="/progress"
              className="font-medium text-muted-foreground no-underline transition-colors duration-quick hover:text-foreground"
            >
              Progress
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild>
              <Link to="/articles">Start Reading</Link>
            </Button>
          </div>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
          <div>
            <WordBridgeLogo />
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
              Learn English vocabulary in context — a calmer way to read, understand, and remember.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm" aria-label="Footer">
            <Link to="/articles" className="text-muted-foreground no-underline hover:text-foreground">
              Explore
            </Link>
            <Link to="/vocabulary" className="text-muted-foreground no-underline hover:text-foreground">
              Vocabulary
            </Link>
            <Link to="/practice" className="text-muted-foreground no-underline hover:text-foreground">
              Practice
            </Link>
            <Link to="/progress" className="text-muted-foreground no-underline hover:text-foreground">
              Progress
            </Link>
            <Link to="/profile" className="text-muted-foreground no-underline hover:text-foreground">
              Profile
            </Link>
          </nav>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-subtle sm:px-6">
            WordBridge. Built as a reading-first English learning product.
          </p>
        </div>
      </footer>
    </div>
  );
}
