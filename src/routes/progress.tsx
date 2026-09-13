import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpenText, Flame, GraduationCap, Languages } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { articles } from "@/lib/data/articles";
import { selectProgress, useAppStore, useHydrated } from "@/lib/store";
import { formatDayLabel, lastNDays } from "@/lib/utils";

export const Route = createFileRoute("/progress")({
  component: ProgressPage,
  head: () => ({ meta: [{ title: "Progress — WordBridge" }] }),
});

function ProgressPage() {
  const hydrated = useHydrated();
  const snapshot = useAppStore((state) => state);
  const stats = selectProgress(snapshot);
  const week = lastNDays(7).map((key) => {
    const day = snapshot.activity[key];
    return {
      key,
      label: formatDayLabel(key),
      activity: (day?.articles ?? 0) + (day?.words ?? 0) + (day?.quizzes ?? 0),
    };
  });

  const recentArticles = articles.filter((article) =>
    snapshot.completedArticleIds.includes(article.id),
  ).slice(-3).reverse();

  if (!hydrated) {
    return (
      <AppShell>
        <div className="mx-auto max-w-5xl space-y-4">
          <div className="h-8 w-48 animate-pulse rounded-md bg-border" />
          <div className="grid gap-3 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-28 animate-pulse rounded-xl bg-border" />
            ))}
          </div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl">
        <header>
          <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Dashboard
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Your progress</h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            A quiet record of reading, saved language, and practice — stored on this device.
          </p>
        </header>

        <section className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <Stat icon={BookOpenText} label="Articles read" value={stats.articlesRead} />
          <Stat icon={Languages} label="Words saved" value={stats.wordsSaved} hint={`${stats.wordsLearned} learned`} />
          <Stat icon={GraduationCap} label="Quiz accuracy" value={`${stats.quizAccuracy}%`} hint={`${stats.quizzesTaken} sessions`} />
          <Stat icon={Flame} label="Day streak" value={stats.streak} />
        </section>

        <section className="mt-6 rounded-xl border border-border bg-surface p-5 sm:p-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-semibold tracking-tight">Weekly activity</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Articles completed, words saved, and practice sessions.
              </p>
            </div>
          </div>
          <div className="mt-6 h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={week} barSize={28}>
                <XAxis
                  dataKey="label"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "currentColor", fontSize: 12 }}
                />
                <Tooltip
                  cursor={{ fill: "var(--wb-highlight)" }}
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid var(--wb-border)",
                    background: "var(--wb-surface)",
                    fontSize: 12,
                  }}
                  formatter={(value) => [value ?? 0, "Activity"]}
                />
                <Bar dataKey="activity" fill="var(--wb-indigo)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="mt-6 grid gap-3 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5">
            <h2 className="font-semibold tracking-tight">Recently completed</h2>
            {recentArticles.length === 0 ? (
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Finish an article to see it here.{" "}
                <Link to="/articles" className="font-medium text-indigo no-underline hover:underline">
                  Start reading
                </Link>
              </p>
            ) : (
              <ul className="mt-4 space-y-3">
                {recentArticles.map((article) => (
                  <li key={article.id}>
                    <Link
                      to="/article/$id"
                      params={{ id: article.id }}
                      className="text-sm font-medium text-foreground no-underline hover:text-indigo"
                    >
                      {article.title}
                    </Link>
                    <p className="text-xs text-muted-foreground">{article.category}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <h2 className="font-semibold tracking-tight">Keep going</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {stats.wordsSaved === 0
                ? "Save words as you read, then turn them into a short practice session."
                : "You have words waiting in your notebook. A mixed quiz takes a few minutes."}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button asChild size="sm">
                <Link to="/practice">Practice</Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link to="/vocabulary">Open notebook</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  hint,
}: {
  icon: typeof Flame;
  label: string;
  value: number | string;
  hint?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon className="size-4" aria-hidden="true" />
        <p className="text-xs font-medium tracking-wide uppercase">{label}</p>
      </div>
      <p className="mt-3 text-3xl font-semibold tracking-tight tabular-nums">{value}</p>
      {hint ? <p className="mt-1 text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
