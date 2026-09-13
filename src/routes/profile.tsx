import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { topicOptions } from "@/lib/data/articles";
import { useAppStore, useHydrated } from "@/lib/store";
import type { Appearance, Category, LearningLevel } from "@/lib/types";
import { DIFFICULTIES } from "@/lib/types";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
  head: () => ({ meta: [{ title: "Profile — WordBridge" }] }),
});

const goals = [
  "Build a stronger academic vocabulary",
  "Improve reading fluency",
  "Prepare for seminars and lectures",
  "Read news and essays with more ease",
];

const minuteOptions = [10, 15, 20, 30] as const;

function ProfilePage() {
  const hydrated = useHydrated();
  const profile = useAppStore((state) => state.profile);
  const updateProfile = useAppStore((state) => state.updateProfile);
  const resetProgress = useAppStore((state) => state.resetProgress);

  if (!hydrated) {
    return (
      <AppShell>
        <div className="mx-auto max-w-2xl space-y-3">
          <div className="h-8 w-40 animate-pulse rounded-md bg-border" />
          <div className="h-64 animate-pulse rounded-xl bg-border" />
        </div>
      </AppShell>
    );
  }

  const toggleTopic = (topic: Category) => {
    const next = profile.topics.includes(topic)
      ? profile.topics.filter((item) => item !== topic)
      : [...profile.topics, topic];
    updateProfile({ topics: next });
  };

  return (
    <AppShell>
      <div className="mx-auto max-w-2xl">
        <header>
          <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Settings
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Profile</h1>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Preferences stay on this device. They shape filters and the look of the reading room.
          </p>
        </header>

        <section className="mt-8 space-y-8">
          <Field label="Name" htmlFor="name">
            <Input
              id="name"
              value={profile.name}
              placeholder="Your name"
              onChange={(event) => updateProfile({ name: event.target.value })}
            />
          </Field>

          <div>
            <p className="text-sm font-medium">Learning level</p>
            <p className="mt-1 text-sm text-muted-foreground">Used as a suggestion when you browse.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {DIFFICULTIES.map((level) => (
                <Choice
                  key={level}
                  active={profile.level === level}
                  onClick={() => updateProfile({ level: level as LearningLevel })}
                >
                  {level[0]?.toUpperCase()}
                  {level.slice(1)}
                </Choice>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">Preferred topics</p>
            <p className="mt-1 text-sm text-muted-foreground">Leave empty to keep the full library in view.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {topicOptions.map((topic) => (
                <Choice
                  key={topic}
                  active={profile.topics.includes(topic)}
                  onClick={() => toggleTopic(topic)}
                >
                  {topic}
                </Choice>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">Learning goal</p>
            <div className="mt-3 grid gap-2">
              {goals.map((goal) => (
                <Choice
                  key={goal}
                  active={profile.goal === goal}
                  onClick={() => updateProfile({ goal })}
                  className="h-auto rounded-md px-4 py-2.5 text-left"
                >
                  {goal}
                </Choice>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">Daily reading goal</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {minuteOptions.map((minutes) => (
                <Choice
                  key={minutes}
                  active={profile.dailyMinutes === minutes}
                  onClick={() => updateProfile({ dailyMinutes: minutes })}
                >
                  {minutes} min
                </Choice>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-border bg-surface p-5">
            <p className="text-sm font-medium">Notifications</p>
            <ToggleRow
              label="Reading reminders"
              description="A preference only — WordBridge does not send push messages yet."
              checked={profile.reminders}
              onCheckedChange={(checked) => updateProfile({ reminders: checked })}
            />
            <ToggleRow
              label="Weekly summary"
              description="Remember to look back at words you saved this week."
              checked={profile.weeklySummary}
              onCheckedChange={(checked) => updateProfile({ weeklySummary: checked })}
            />
          </div>

          <div>
            <p className="text-sm font-medium">Appearance</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(["light", "dark", "system"] as Appearance[]).map((item) => (
                <Choice
                  key={item}
                  active={profile.appearance === item}
                  onClick={() => updateProfile({ appearance: item })}
                >
                  {item[0]?.toUpperCase()}
                  {item.slice(1)}
                </Choice>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="font-medium">Reset progress</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Removes saved words, completed articles, quiz history, and your streak. Profile preferences are kept.
            </p>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="mt-4">
                  Reset progress
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Reset all learning progress?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This cannot be undone. Your name, level, and appearance settings will remain.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      resetProgress();
                      toast.success("Progress has been reset");
                    }}
                  >
                    Reset
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}

function Choice({
  active,
  onClick,
  children,
  className,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "h-9 rounded-full border px-3.5 text-sm font-medium transition-colors duration-quick",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-surface text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      {children}
    </button>
  );
}

function ToggleRow({
  label,
  description,
  checked,
  onCheckedChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="mt-1 text-sm leading-5 text-muted-foreground">{description}</p>
      </div>
      <Switch checked={checked} onCheckedChange={onCheckedChange} aria-label={label} />
    </div>
  );
}
