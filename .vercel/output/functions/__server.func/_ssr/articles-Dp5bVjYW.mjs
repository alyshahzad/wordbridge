import { t as cn } from "./utils-C95xt6KI.mjs";
import { T as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Search } from "../_libs/lucide-react.mjs";
import { a as useAppStore, c as filterArticles, d as topicOptions, o as useHydrated, r as Route$5, s as articles } from "./router-BlwYcoG0.mjs";
import { t as ArticleCard } from "./article-card-BFgJQ_68.mjs";
import { t as AppShell } from "./app-shell-Cio7Qw0d.mjs";
import { t as EmptyState } from "./empty-state-DsOlbFQ-.mjs";
import { t as Input } from "./input-BTJJ1Fgj.mjs";
import { t as DIFFICULTIES } from "./types-BU80LOet.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articles-Dp5bVjYW.js
var import_jsx_runtime = require_jsx_runtime();
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		"aria-pressed": active,
		className: cn("h-9 rounded-full border px-3.5 text-sm font-medium transition-colors duration-quick ease-out-smooth", active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-surface text-muted-foreground hover:border-border-strong hover:text-foreground"),
		children
	});
}
function ArticlesPage() {
	const search = Route$5.useSearch();
	const navigate = useNavigate({ from: "/articles" });
	const hydrated = useHydrated();
	const completed = useAppStore((state) => state.completedArticleIds);
	const lastArticleId = useAppStore((state) => state.lastArticleId);
	const preferredTopics = useAppStore((state) => state.profile.topics);
	const query = search.q ?? "";
	const topic = search.topic ?? "all";
	const level = search.level ?? "all";
	const filtered = filterArticles({
		query,
		category: topic === "all" ? "all" : topic,
		difficulty: level === "all" ? "all" : level
	}).sort((a, b) => {
		if (!preferredTopics.length) return 0;
		return Number(preferredTopics.includes(b.category)) - Number(preferredTopics.includes(a.category));
	});
	const lastArticle = articles.find((article) => article.id === lastArticleId);
	const setSearch = (patch) => {
		navigate({ search: {
			q: patch.q !== void 0 ? patch.q || void 0 : search.q,
			topic: patch.topic !== void 0 ? patch.topic || void 0 : search.topic,
			level: patch.level !== void 0 ? patch.level || void 0 : search.level
		} });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "wb-enter",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase",
						children: "Library"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-3xl font-semibold tracking-tight",
						children: "Explore articles"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm leading-6 text-muted-foreground",
						children: "Short original essays written for learners. Filter by topic or level, then tap any word you want to keep."
					})
				]
			}),
			hydrated && lastArticle ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted-foreground",
				children: [
					"Continue",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/article/$id",
						params: { id: lastArticle.id },
						className: "font-medium text-indigo no-underline hover:underline",
						children: lastArticle.title
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-8 max-w-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: query,
					onChange: (event) => setSearch({ q: event.target.value }),
					placeholder: "Search titles, topics, or words",
					"aria-label": "Search articles",
					className: "pl-9"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					"aria-label": "Topics",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: topic === "all",
						onClick: () => setSearch({ topic: "" }),
						children: "All topics"
					}), topicOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: topic === item,
						onClick: () => setSearch({ topic: topic === item ? "" : item }),
						children: item
					}, item))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					"aria-label": "Difficulty",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: level === "all",
						onClick: () => setSearch({ level: "" }),
						children: "All levels"
					}), DIFFICULTIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
						active: level === item,
						onClick: () => setSearch({ level: level === item ? "" : item }),
						children: [item[0]?.toUpperCase(), item.slice(1)]
					}, item))]
				})]
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				className: "mt-10",
				title: "No articles found",
				description: "Try another topic or search term.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-sm font-medium text-indigo",
					onClick: () => void navigate({ search: {} }),
					children: "Clear filters"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2",
				children: filtered.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, {
					article,
					completed: hydrated && completed.includes(article.id)
				}, article.id))
			})
		]
	}) });
}
//#endregion
export { ArticlesPage as component };
