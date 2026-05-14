// Named type aliases for backend types — prevents depending on numbered Type__N names
// which can change when the backend is regenerated.
export type {
  Type as BackendSurveyResponse,
  Type__1 as BackendReferral,
  Type__2 as BackendPrescription,
  Type__3 as BackendPatient,
  Type__4 as BackendMessage,
  Type__5 as BackendMentalHealthAssessment,
  Type__6 as BackendMedication,
  Type__7 as BackendLabResult,
  Type__8 as BackendInvoice,
  Type__9 as BackendImagingOrder,
  Type__10 as BackendClinicalNote,
  Type__11 as BackendClaim,
  Type__12 as BackendCaregiver,
  Type__13 as BackendAuditLog,
  Type__14 as BackendAppointment,
  Type__15 as BackendAllergy,
} from "../backend.d";
