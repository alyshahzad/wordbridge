import { t as cn } from "./utils-C95xt6KI.mjs";
import { T as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-DDBe_RZu.mjs";
import { d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as WordBridgeLogo } from "./logo-CRYcKCGV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/marketing-shell-Crv9hg-E.js
var import_jsx_runtime = require_jsx_runtime();
function MarketingShell({ children }) {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-surface focus:px-3 focus:py-2",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-border/80 bg-background/85 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordBridgeLogo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-8 text-sm md:flex",
							"aria-label": "Marketing",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/articles",
									className: cn("font-medium text-muted-foreground no-underline transition-colors duration-quick hover:text-foreground", pathname === "/articles" && "text-foreground"),
									children: "Explore"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/practice",
									className: "font-medium text-muted-foreground no-underline transition-colors duration-quick hover:text-foreground",
									children: "Practice"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/progress",
									className: "font-medium text-muted-foreground no-underline transition-colors duration-quick hover:text-foreground",
									children: "Progress"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								className: "hidden sm:inline-flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/articles",
									children: "Explore Articles"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/articles",
									children: "Start Reading"
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border bg-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordBridgeLogo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xs text-sm leading-6 text-muted-foreground",
						children: "Learn English vocabulary in context — a calmer way to read, understand, and remember."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "grid grid-cols-2 gap-x-12 gap-y-2 text-sm",
						"aria-label": "Footer",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/articles",
								className: "text-muted-foreground no-underline hover:text-foreground",
								children: "Explore"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/vocabulary",
								className: "text-muted-foreground no-underline hover:text-foreground",
								children: "Vocabulary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/practice",
								className: "text-muted-foreground no-underline hover:text-foreground",
								children: "Practice"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/progress",
								className: "text-muted-foreground no-underline hover:text-foreground",
								children: "Progress"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/profile",
								className: "text-muted-foreground no-underline hover:text-foreground",
								children: "Profile"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto max-w-6xl px-4 py-5 text-xs text-subtle sm:px-6",
						children: "WordBridge. Built as a reading-first English learning product."
					})
				})]
			})
		]
	});
}
//#endregion
export { MarketingShell as t };
