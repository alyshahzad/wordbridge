import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpenText, ChartNoAxesColumn, GraduationCap, Library, UserRound } from "lucide-react";
import type { ReactNode } from "react";
import { WordBridgeLogo } from "@/components/brand/logo";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/articles", label: "Explore", icon: Library },
  { to: "/vocabulary", label: "Vocabulary", icon: BookOpenText },
  { to: "/practice", label: "Practice", icon: GraduationCap },
  { to: "/progress", label: "Progress", icon: ChartNoAxesColumn },
] as const;

function isActivePath(pathname: string, to: string) {
  if (to === "/articles") return pathname === "/articles" || pathname.startsWith("/article/");
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function AppShell({
  children,
  mainClassName,
}: {
  children: ReactNode;
  mainClassName?: string;
}) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-dvh bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 border-r border-border bg-surface lg:flex lg:flex-col">
        <div className="px-5 py-5">
          <WordBridgeLogo />
          <p className="mt-2 text-xs tracking-wide text-muted-foreground">Read. Understand. Remember.</p>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-3" aria-label="Primary">
          {nav.map((item) => {
            const active = isActivePath(pathname, item.to);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium no-underline transition-colors duration-quick ease-out-smooth",
                  active
                    ? "bg-accent text-navy"
                    : "text-muted-foreground hover:bg-background hover:text-foreground",
                )}
              >
                <Icon className="size-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-border p-3">
          <Link
            to="/profile"
            aria-current={pathname === "/profile" ? "page" : undefined}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium no-underline transition-colors duration-quick ease-out-smooth",
              pathname === "/profile"
                ? "bg-accent text-navy"
                : "text-muted-foreground hover:bg-background hover:text-foreground",
            )}
          >
            <UserRound className="size-4" aria-hidden="true" />
            Profile
          </Link>
        </div>
      </aside>

      <div className="lg:pl-60">
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-border bg-surface/90 px-4 backdrop-blur-md lg:hidden">
          <WordBridgeLogo compact={false} />
          <Link
            to="/profile"
            aria-label="Profile and settings"
            className={cn(
              "flex size-10 items-center justify-center rounded-sm text-muted-foreground no-underline transition-colors duration-quick",
              pathname === "/profile" ? "bg-accent text-navy" : "hover:bg-background hover:text-foreground",
            )}
          >
            <UserRound className="size-5" />
          </Link>
        </header>

        <main id="main" className={cn("px-4 pt-6 pb-28 lg:px-10 lg:pt-10 lg:pb-16", mainClassName)}>
          {children}
        </main>
      </div>

      <nav
        aria-label="Mobile"
        className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 backdrop-blur-md lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ul className="grid grid-cols-4">
          {nav.map((item) => {
            const active = isActivePath(pathname, item.to);
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-14 flex-col items-center justify-center gap-1 text-[11px] font-medium no-underline transition-colors duration-quick",
                    active ? "text-navy" : "text-muted-foreground",
                  )}
                >
                  <Icon className="size-5" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
