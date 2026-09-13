import { i as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C95xt6KI.mjs";
import { C as Slot, E as require_react, T as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-DDBe_RZu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-[color,background-color,border-color,box-shadow,transform,opacity] duration-quick ease-out-smooth focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-indigo text-white hover:bg-indigo-hover",
			outline: "border border-border bg-surface text-foreground hover:bg-accent hover:text-accent-foreground",
			ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
			muted: "bg-accent text-accent-foreground hover:bg-highlight",
			destructive: "bg-destructive text-destructive-foreground hover:opacity-90",
			link: "text-indigo underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10 px-4",
			sm: "h-9 px-3 text-sm",
			lg: "h-11 px-5",
			icon: "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { buttonVariants as n, Button as t };
