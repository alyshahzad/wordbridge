import { createFileRoute, Link } from "@tanstack/react-router";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/$")({
  component: NotFoundPage,
  head: () => ({ meta: [{ title: "Page not found — WordBridge" }] }),
});

function NotFoundPage() {
  return (
    <MarketingShell>
      <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
        <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">This page is not in the library</h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          The link may be outdated. You can return home or open the article collection.
        </p>
        <div className="mt-8 flex gap-3">
          <Button asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/articles">Explore Articles</Link>
          </Button>
        </div>
      </div>
    </MarketingShell>
  );
}
