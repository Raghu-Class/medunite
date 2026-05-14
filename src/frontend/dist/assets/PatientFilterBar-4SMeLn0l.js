import { j as jsxRuntimeExports, X } from "./index-4utdZC3E.js";
function PatientFilterBar({
  patientName,
  onClear
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-center gap-2 px-4 py-2 text-sm border-b bg-primary/5 border-primary/20",
      "data-ocid": "patient_filter.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          "Showing records for",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: patientName })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: onClear,
            className: "ml-1 inline-flex items-center gap-1 text-xs text-primary hover:text-primary/70 transition-colors underline underline-offset-2",
            "data-ocid": "patient_filter.close_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }),
              "clear filter"
            ]
          }
        )
      ]
    }
  );
}
export {
  PatientFilterBar as P
};
