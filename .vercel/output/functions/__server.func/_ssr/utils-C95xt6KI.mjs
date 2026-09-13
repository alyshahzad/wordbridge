import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C95xt6KI.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function todayKey(date = /* @__PURE__ */ new Date()) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function parseDay(key) {
	const [y, m, d] = key.split("-").map(Number);
	return new Date(y ?? 1970, (m ?? 1) - 1, d ?? 1);
}
function formatDayLabel(key) {
	return parseDay(key).toLocaleDateString("en-US", { weekday: "short" });
}
function yesterdayKey(from = todayKey()) {
	const date = parseDay(from);
	date.setDate(date.getDate() - 1);
	return todayKey(date);
}
function lastNDays(n, end = todayKey()) {
	const endDate = parseDay(end);
	const days = [];
	for (let i = n - 1; i >= 0; i -= 1) {
		const d = new Date(endDate);
		d.setDate(endDate.getDate() - i);
		days.push(todayKey(d));
	}
	return days;
}
function shuffle(items) {
	const next = [...items];
	for (let i = next.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		const a = next[i];
		const b = next[j];
		if (a === void 0 || b === void 0) continue;
		next[i] = b;
		next[j] = a;
	}
	return next;
}
function sample(items, count) {
	return shuffle(items).slice(0, count);
}
//#endregion
export { shuffle as a, sample as i, formatDayLabel as n, todayKey as o, lastNDays as r, yesterdayKey as s, cn as t };
