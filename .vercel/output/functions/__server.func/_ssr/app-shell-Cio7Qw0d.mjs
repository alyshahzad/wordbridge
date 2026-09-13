import { t as cn } from "./utils-C95xt6KI.mjs";
import { T as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as WordBridgeLogo } from "./logo-CRYcKCGV.mjs";
import { c as Library, d as GraduationCap, h as ChartNoAxesColumn, r as UserRound, v as BookOpenText } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-shell-Cio7Qw0d.js
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		to: "/articles",
		label: "Explore",
		icon: Library
	},
	{
		to: "/vocabulary",
		label: "Vocabulary",
		icon: BookOpenText
	},
	{
		to: "/practice",
		label: "Practice",
		icon: GraduationCap
	},
	{
		to: "/progress",
		label: "Progress",
		icon: ChartNoAxesColumn
	}
];
function isActivePath(pathname, to) {
	if (to === "/articles") return pathname === "/articles" || pathname.startsWith("/article/");
	return pathname === to || pathname.startsWith(`${to}/`);
}
function AppShell({ children, mainClassName }) {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-surface focus:px-3 focus:py-2",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "fixed inset-y-0 left-0 z-30 hidden w-60 border-r border-border bg-surface lg:flex lg:flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordBridgeLogo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs tracking-wide text-muted-foreground",
							children: "Read. Understand. Remember."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-1 flex-col gap-1 px-3",
						"aria-label": "Primary",
						children: nav.map((item) => {
							const active = isActivePath(pathname, item.to);
							const Icon = item.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								"aria-current": active ? "page" : void 0,
								className: cn("flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium no-underline transition-colors duration-quick ease-out-smooth", active ? "bg-accent text-navy" : "text-muted-foreground hover:bg-background hover:text-foreground"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-4",
									"aria-hidden": "true"
								}), item.label]
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-border p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/profile",
							"aria-current": pathname === "/profile" ? "page" : void 0,
							className: cn("flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium no-underline transition-colors duration-quick ease-out-smooth", pathname === "/profile" ? "bg-accent text-navy" : "text-muted-foreground hover:bg-background hover:text-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Profile"]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pl-60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-20 flex h-14 items-center justify-between border-b border-border bg-surface/90 px-4 backdrop-blur-md lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordBridgeLogo, { compact: false }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/profile",
						"aria-label": "Profile and settings",
						className: cn("flex size-10 items-center justify-center rounded-sm text-muted-foreground no-underline transition-colors duration-quick", pathname === "/profile" ? "bg-accent text-navy" : "hover:bg-background hover:text-foreground"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					id: "main",
					className: cn("px-4 pt-6 pb-28 lg:px-10 lg:pt-10 lg:pb-16", mainClassName),
					children
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Mobile",
				className: "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 backdrop-blur-md lg:hidden",
				style: { paddingBottom: "env(safe-area-inset-bottom)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-4",
					children: nav.map((item) => {
						const active = isActivePath(pathname, item.to);
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							"aria-current": active ? "page" : void 0,
							className: cn("flex min-h-14 flex-col items-center justify-center gap-1 text-[11px] font-medium no-underline transition-colors duration-quick", active ? "text-navy" : "text-muted-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								"aria-hidden": "true"
							}), item.label]
						}) }, item.to);
					})
				})
			})
		]
	});
}
//#endregion
export { AppShell as t };
