import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function todayKey(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function parseDay(key: string): Date {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y ?? 1970, (m ?? 1) - 1, d ?? 1);
}

export function formatDayLabel(key: string): string {
  return parseDay(key).toLocaleDateString("en-US", { weekday: "short" });
}

export function yesterdayKey(from = todayKey()): string {
  const date = parseDay(from);
  date.setDate(date.getDate() - 1);
  return todayKey(date);
}

export function lastNDays(n: number, end = todayKey()): string[] {
  const endDate = parseDay(end);
  const days: string[] = [];
  for (let i = n - 1; i >= 0; i -= 1) {
    const d = new Date(endDate);
    d.setDate(endDate.getDate() - i);
    days.push(todayKey(d));
  }
  return days;
}

export function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = next[i];
    const b = next[j];
    if (a === undefined || b === undefined) continue;
    next[i] = b;
    next[j] = a;
  }
  return next;
}

export function sample<T>(items: T[], count: number): T[] {
  return shuffle(items).slice(0, count);
}
