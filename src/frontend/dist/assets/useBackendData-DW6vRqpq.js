import { k as useQuery, f as useActor, u as useDemoMode } from "./index-4utdZC3E.js";
const STALE_TIME = 6e4;
function useEffectiveActor() {
  const { actor: realActor, isFetching } = useActor();
  const { isDemoMode, demoActor } = useDemoMode();
  const actor = isDemoMode ? demoActor : realActor;
  const ready = isDemoMode ? !!actor : !!actor && !isFetching;
  return { actor, ready, isDemoMode };
}
function usePatients() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["patients", isDemoMode ? "demo" : "real"],
    queryFn: () => actor.listPatients(),
    enabled: ready,
    staleTime: STALE_TIME
  });
}
function useAppointments() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["appointments", isDemoMode ? "demo" : "real"],
    queryFn: () => actor.listAppointments(),
    enabled: ready,
    staleTime: STALE_TIME
  });
}
function useLabResults() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["labResults", isDemoMode ? "demo" : "real"],
    queryFn: () => actor.listLabResults(),
    enabled: ready,
    staleTime: STALE_TIME
  });
}
function useInvoices() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["invoices", isDemoMode ? "demo" : "real"],
    queryFn: () => actor.listInvoices(),
    enabled: ready,
    staleTime: STALE_TIME
  });
}
function usePrescriptions() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["prescriptions", isDemoMode ? "demo" : "real"],
    queryFn: () => actor.listPrescriptions(),
    enabled: ready,
    staleTime: STALE_TIME
  });
}
function useClaims() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["claims", isDemoMode ? "demo" : "real"],
    queryFn: () => actor.listClaims(),
    enabled: ready,
    staleTime: STALE_TIME
  });
}
function useMessages() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["messages", isDemoMode ? "demo" : "real"],
    queryFn: () => actor.listMessages(),
    enabled: ready,
    staleTime: STALE_TIME
  });
}
function useMedications() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["medications", isDemoMode ? "demo" : "real"],
    queryFn: () => actor.listMedications(),
    enabled: ready,
    staleTime: STALE_TIME
  });
}
function useClinicalNotes() {
  const { actor, ready, isDemoMode } = useEffectiveActor();
  return useQuery({
    queryKey: ["clinicalNotes", isDemoMode ? "demo" : "real"],
    queryFn: () => actor.listClinicalNotes(),
    enabled: ready,
    staleTime: STALE_TIME
  });
}
export {
  usePatients as a,
  useClaims as b,
  useLabResults as c,
  useInvoices as d,
  usePrescriptions as e,
  useMessages as f,
  useMedications as g,
  useClinicalNotes as h,
  useAppointments as u
};
