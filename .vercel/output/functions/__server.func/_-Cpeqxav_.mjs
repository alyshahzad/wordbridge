import { T as require_jsx_runtime } from "./_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./_ssr/button-DDBe_RZu.mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as MarketingShell } from "./_ssr/marketing-shell-Crv9hg-E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_-Cpeqxav_.js
var import_jsx_runtime = require_jsx_runtime();
function NotFoundPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketingShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-3xl font-semibold tracking-tight",
				children: "This page is not in the library"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-6 text-muted-foreground",
				children: "The link may be outdated. You can return home or open the article collection."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Home"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/articles",
						children: "Explore Articles"
					})
				})]
			})
		]
	}) });
}
//#endregion
export { NotFoundPage as component };
