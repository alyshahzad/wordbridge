import { createFileRoute, Link } from "@tanstack/react-router";
import { BookMarked, ChartNoAxesColumn, Highlighter, NotebookPen } from "lucide-react";
import { ReaderPreview } from "@/components/landing/reader-preview";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "WordBridge — Read. Understand. Remember." }],
  }),
});

const steps = [
  {
    number: "01",
    title: "Read",
    text: "Choose a short article at your level. The layout is built for attention, not for rushing.",
  },
  {
    number: "02",
    title: "Discover",
    text: "Tap a highlighted word. See a simple definition, the meaning in this passage, and an example.",
  },
  {
    number: "03",
    title: "Practice",
    text: "Saved words become quizzes and fill-in-the-blank review, so the language stays with you.",
  },
];

const features = [
  {
    icon: Highlighter,
    title: "Contextual vocabulary",
    text: "Every highlighted word is explained in the sentence you are reading — not as a disconnected list.",
  },
  {
    icon: NotebookPen,
    title: "Reading practice",
    text: "Short original essays across science, culture, technology, and society, written for learners.",
  },
  {
    icon: BookMarked,
    title: "Personal notebook",
    text: "Save a word as you read. Filter it, mark it learned, or return to the article it came from.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Progress tracking",
    text: "Articles completed, words saved, quiz accuracy, and a reading streak — without noise.",
  },
];

function Home() {
  return (
    <MarketingShell>
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="wb-enter">
            <p className="text-xs font-medium tracking-[0.18em] text-indigo uppercase">
              WordBridge
            </p>
            <h1 className="mt-4 max-w-xl font-sans text-4xl leading-[1.12] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              Build better English through reading.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              Learn vocabulary in context, improve your reading comprehension, and build a personal word bank as you read.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/articles">Start Reading</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/articles">Explore Articles</Link>
              </Button>
            </div>
          </div>
          <div className="wb-enter wb-enter-delay-2 lg:pb-0">
            <ReaderPreview />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            How it works
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight">
            Three steps. No gimmicks.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.number} className="max-w-sm">
                <p className="font-sans text-sm font-semibold tracking-[0.16em] text-indigo">
                  {step.number}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Features
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight">
            A reading room, not a game.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-xl border border-border bg-surface p-6">
                  <div className="flex size-10 items-center justify-center rounded-md bg-accent text-indigo">
                    <Icon className="size-4" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-band text-band-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Start building your vocabulary
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-band-foreground/75 sm:text-base">
            Open an article, tap a word you do not know, and save it. Practice later from the same notebook.
          </p>
          <Button asChild size="lg" className="mt-8 bg-band-foreground text-band hover:bg-band-foreground/90">
            <Link to="/articles">Start Reading</Link>
          </Button>
        </div>
      </section>
    </MarketingShell>
  );
}
