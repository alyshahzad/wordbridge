import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C95xt6KI.mjs";
import { E as require_react, T as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-DDBe_RZu.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Trash2, o as Search, v as BookOpenText } from "../_libs/lucide-react.mjs";
import { a as useAppStore, o as useHydrated } from "./router-BlwYcoG0.mjs";
import { t as AppShell } from "./app-shell-Cio7Qw0d.mjs";
import { t as EmptyState } from "./empty-state-DsOlbFQ-.mjs";
import { t as Input } from "./input-BTJJ1Fgj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vocabulary-C0MBRaLX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VocabularyPage() {
	const hydrated = useHydrated();
	const savedWords = useAppStore((state) => state.savedWords);
	const setWordStatus = useAppStore((state) => state.setWordStatus);
	const removeWord = useAppStore((state) => state.removeWord);
	const [query, setQuery] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("all");
	const visible = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return savedWords.filter((word) => {
			if (filter !== "all" && word.status !== filter) return false;
			if (!q) return true;
			return `${word.word} ${word.definition} ${word.articleTitle}`.toLowerCase().includes(q);
		});
	}, [
		savedWords,
		query,
		filter
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase",
				children: "Notebook"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-3xl font-semibold tracking-tight",
				children: "Vocabulary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-sm leading-6 text-muted-foreground",
				children: "Words you save while reading live here. Mark them learned when they feel familiar."
			})
		] }), !hydrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 animate-pulse rounded-xl bg-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 animate-pulse rounded-xl bg-border" })]
		}) : savedWords.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			className: "mt-10",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpenText, { className: "size-5" }),
			title: "Your vocabulary notebook is empty",
			description: "Words you save while reading will appear here.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/articles",
					children: "Explore Articles"
				})
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: query,
					onChange: (event) => setQuery(event.target.value),
					placeholder: "Search saved words",
					"aria-label": "Search saved words",
					className: "pl-9"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				"aria-label": "Status filter",
				children: [
					"all",
					"learning",
					"learned"
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFilter(item),
					className: cn("h-9 rounded-full border px-3.5 text-sm font-medium capitalize transition-colors duration-quick", filter === item ? "border-primary bg-primary text-primary-foreground" : "border-border bg-surface text-muted-foreground hover:text-foreground"),
					children: item
				}, item))
			})]
		}), visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			className: "mt-8",
			title: "No matching words",
			description: "Try another search or status filter."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 space-y-3",
			children: visible.map((word) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VocabCard, {
				word,
				onToggle: () => setWordStatus(word.id, word.status === "learned" ? "learning" : "learned"),
				onRemove: () => removeWord(word.id)
			}, word.id))
		})] })]
	}) });
}
function VocabCard({ word, onToggle, onRemove }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: "rounded-xl border border-border bg-surface p-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-semibold tracking-tight",
								children: word.word
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground capitalize",
								children: word.partOfSpeech
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("rounded-sm px-2 py-0.5 text-[11px] font-medium", word.status === "learned" ? "bg-success-bg text-success" : "bg-highlight text-highlight-text"),
								children: word.status === "learned" ? "Learned" : "Learning"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-serif text-sm italic text-muted-foreground",
						children: word.pronunciation
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-6",
						children: word.definition
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 font-serif text-[15px] leading-7 text-foreground",
						children: [
							"“",
							word.example,
							"”"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: [
							"From",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/article/$id",
								params: { id: word.articleId },
								className: "font-medium text-indigo no-underline hover:underline",
								children: word.articleTitle
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: word.status === "learned" ? "outline" : "muted",
					onClick: onToggle,
					children: word.status === "learned" ? "Keep learning" : "Mark as learned"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "icon",
					variant: "ghost",
					"aria-label": `Remove ${word.word}`,
					onClick: onRemove,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
				})]
			})]
		})
	});
}
//#endregion
export { VocabularyPage as component };
