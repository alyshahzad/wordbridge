export function ReaderPreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="rounded-xl border border-border bg-surface p-6 shadow-[var(--wb-shadow-md)] sm:p-8">
        <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
          Environment · Beginner
        </p>
        <h3 className="mt-3 font-sans text-xl font-semibold tracking-tight sm:text-2xl">
          The Quiet Return of City Parks
        </h3>
        <p className="mt-5 font-serif text-[1.05rem] leading-8 text-foreground">
          The city became more{" "}
          <span className="rounded-[4px] bg-highlight px-1 font-medium text-highlight-text underline decoration-indigo decoration-[1.5px] underline-offset-[5px]">
            resilient
          </span>{" "}
          after years of environmental challenges, not by building one grand park, but by repairing many small ones.
        </p>
        <p className="mt-4 hidden font-serif text-[1.05rem] leading-8 text-muted-foreground sm:block">
          Crews planted a mixed canopy instead of a single decorative species. Up close, the parks started to feel like rooms again.
        </p>
      </div>

      <aside className="absolute right-3 bottom-4 w-[min(calc(100%-1.5rem),18.5rem)] rounded-lg border border-border bg-surface p-4 shadow-[var(--wb-shadow-md)] sm:right-6 sm:bottom-6">
        <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
          In context
        </p>
        <p className="mt-1 text-lg font-semibold tracking-tight">resilient</p>
        <p className="mt-0.5 text-xs text-muted-foreground">/rɪˈzɪliənt/ · Adjective</p>
        <p className="mt-3 text-sm leading-6 text-foreground">
          Able to recover or adapt after difficulty.
        </p>
        <div className="mt-3 rounded-sm bg-background px-3 py-2">
          <p className="text-[11px] font-medium text-muted-foreground">In this article</p>
          <p className="mt-1 text-xs leading-5">The city recovered from environmental challenges.</p>
        </div>
        <div className="mt-3 h-8 rounded-sm bg-primary text-center text-xs leading-8 font-medium text-primary-foreground">
          Save word
        </div>
      </aside>
    </div>
  );
}
