import { j as jsxRuntimeExports } from "./index-4utdZC3E.js";
import { C as ConsentsTab } from "./ConsentsTab-BoPwNeOD.js";
import { P as PatientFilterBar } from "./PatientFilterBar-4SMeLn0l.js";
import "./checkbox-B8IMGtpd.js";
import "./index-BSY8sZ87.js";
import "./select-D0xeunuB.js";
import "./index-IXOTxK3N.js";
import "./chevron-up-BvGEbEf0.js";
import "./input-B6WlinMn.js";
import "./label-eoX2BTTj.js";
import "./skeleton-Dkt2W5Ll.js";
import "./table-CV6uaqbk.js";
import "./textarea-BQtbz16y.js";
import "./StatusBadge-C2Ygw5ZQ.js";
import "./plus-CoKHV7of.js";
function ConsentsPage({
  activePatientId,
  activePatientName,
  onClearFilter
}) {
  const patientId = activePatientId ?? 1n;
  const patientName = activePatientName ?? "Demo Patient";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", "data-ocid": "consents.page", children: [
    activePatientId && activePatientName && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PatientFilterBar,
      {
        patientName: activePatientName,
        onClear: onClearFilter ?? (() => {
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConsentsTab, { patientId, patientName })
  ] });
}
export {
  ConsentsPage as default
};
