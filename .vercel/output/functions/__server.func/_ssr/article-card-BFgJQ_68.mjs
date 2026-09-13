import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C95xt6KI.mjs";
import { T as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Languages, p as Clock3 } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/article-card-BFgJQ_68.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-sm border px-2 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "border-transparent bg-accent text-accent-foreground",
		outline: "border-border text-muted-foreground",
		navy: "border-transparent bg-navy text-white",
		beginner: "border-transparent bg-success-bg text-success",
		intermediate: "border-transparent bg-warning-bg text-warning",
		advanced: "border-transparent bg-highlight text-highlight-text"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var labels = {
	beginner: "Beginner",
	intermediate: "Intermediate",
	advanced: "Advanced"
};
function DifficultyBadge({ difficulty }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: difficulty,
		children: labels[difficulty]
	});
}
function ArticleCard({ article, completed = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/article/$id",
		params: { id: article.id },
		className: cn("group flex h-full flex-col rounded-xl border border-border bg-surface p-5 no-underline transition-[border-color,transform,box-shadow] duration-fast ease-out-smooth hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[var(--wb-shadow-md)]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase",
					children: article.category
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DifficultyBadge, { difficulty: article.difficulty })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-sans text-lg leading-snug font-semibold tracking-tight text-foreground group-hover:text-navy",
				children: article.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 flex-1 text-sm leading-6 text-muted-foreground",
				children: article.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex items-center gap-4 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
								className: "size-3.5",
								"aria-hidden": "true"
							}),
							article.readingTime,
							" min"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, {
								className: "size-3.5",
								"aria-hidden": "true"
							}),
							article.vocabulary.length,
							" words"
						]
					}),
					completed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-auto text-success",
						children: "Read"
					}) : null
				]
			})
		]
	});
}
//#endregion
export { DifficultyBadge as n, ArticleCard as t };
