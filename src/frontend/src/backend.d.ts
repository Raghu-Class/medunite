import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Type {
    id: bigint;
    patientId: bigint;
    submittedAt: Time;
    comment: string;
    rating: bigint;
}
export interface Type__11 {
    id: bigint;
    status: string;
    serviceDate: string;
    diagnosisCodes: string;
    patientId: bigint;
    submittedAt: Time;
    insurerId: bigint;
    cptCodes: string;
    totalAmount: bigint;
    patientName: string;
    claimNumber: string;
}
export type Time = bigint;
export interface Type__7 {
    id: bigint;
    result: string;
    isCritical: boolean;
    patientId: bigint;
    testName: string;
    unit: string;
}
export interface Type__15 {
    id: bigint;
    patientId: bigint;
    severity: string;
    allergen: string;
    reaction: string;
}
export interface Type__10 {
    id: bigint;
    content: string;
    patientId: bigint;
    authorId: bigint;
    noteType: string;
}
export interface Type__12 {
    id: bigint;
    relationship: string;
    patientId: bigint;
    name: string;
    email: string;
    phone: string;
    permissionsJson: string;
}
export interface Type__6 {
    id: bigint;
    status: string;
    patientId: bigint;
    dose: string;
    name: string;
    frequency: string;
}
export interface Type__2 {
    id: bigint;
    status: string;
    prescribedBy: string;
    patientId: bigint;
    medication: string;
    dose: string;
    createdAt: Time;
    notes: string;
    patientName: string;
}
export interface Type__9 {
    id: bigint;
    status: string;
    patientId: bigint;
    createdAt: Time;
    orderedBy: string;
    modality: string;
    indication: string;
    patientName: string;
    priority: string;
    bodyPart: string;
}
export interface Type__13 {
    id: bigint;
    action: string;
    actorId: Principal;
    entityId: bigint;
    timestamp: Time;
    entityType: string;
}
export interface Type__5 {
    id: bigint;
    scoresJson: string;
    patientId: bigint;
    date: string;
    assessmentType: string;
    totalScore: bigint;
    notes: string;
    severity: string;
    providerId: bigint;
}
export interface Type__3 {
    id: bigint;
    mrn: string;
    dateOfBirth: string;
    name: string;
    email: string;
    phone: string;
}
export interface Type__1 {
    id: bigint;
    status: string;
    patientId: bigint;
    createdAt: Time;
    referredTo: string;
    notes: string;
    patientName: string;
    priority: string;
    reason: string;
}
export interface Type__8 {
    id: bigint;
    status: string;
    patientId: bigint;
    amount: bigint;
}
export interface Type__14 {
    id: bigint;
    status: string;
    patientId: bigint;
    date: string;
    providerId: bigint;
}
export interface Type__4 {
    id: bigint;
    content: string;
    toUserId: bigint;
    fromUserId: bigint;
}
export interface UserProfile {
    userId: bigint;
    name: string;
    role: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface InboxResult {
  id: bigint;
  patientName: string;
  testName: string;
  resultSummary: string;
  flag: string;
  resultType: string;
  orderedDate: string;
  receivedDate: string;
  provider: string;
  acknowledged: boolean;
  note: string;
  callbackProvider: string;
  callbackMethod: string;
  callbackDateTime: string;
  callbackNotes: string;
  forwardedTo: string;
}
export interface backendInterface {
    addAllergy(patientId: bigint, allergen: string, reaction: string, severity: string): Promise<bigint>;
    addCaregiver(caregiver: Type__12): Promise<bigint>;
    addLabResult(patientId: bigint, testName: string, result: string, unit: string, isCritical: boolean): Promise<bigint>;
    addMedication(patientId: bigint, name: string, dose: string, frequency: string, status: string): Promise<bigint>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createAppointment(patientId: bigint, providerId: bigint, date: string): Promise<bigint>;
    createClaim(patientId: bigint, patientName: string, claimNumber: string, insurerId: bigint, totalAmount: bigint, serviceDate: string, cptCodes: string, diagnosisCodes: string): Promise<bigint>;
    createClinicalNote(patientId: bigint, noteType: string, content: string, authorId: bigint): Promise<bigint>;
    createImagingOrder(patientId: bigint, patientName: string, modality: string, bodyPart: string, priority: string, orderedBy: string, indication: string): Promise<bigint>;
    createInvoice(patientId: bigint, amount: bigint, status: string): Promise<bigint>;
    createMentalHealthAssessment(assessment: Type__5): Promise<bigint>;
    createPatient(name: string, dob: string, phone: string, email: string, mrn: string): Promise<bigint>;
    createPrescription(patientId: bigint, patientName: string, medication: string, dose: string, prescribedBy: string, notes: string): Promise<bigint>;
    createReferral(patientId: bigint, patientName: string, referredTo: string, reason: string, priority: string, notes: string): Promise<bigint>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    listAllergies(): Promise<Array<Type__15>>;
    listAppointments(): Promise<Array<Type__14>>;
    listAuditLogs(): Promise<Array<Type__13>>;
    listCaregivers(): Promise<Array<Type__12>>;
    listClaims(): Promise<Array<Type__11>>;
    listClinicalNotes(): Promise<Array<Type__10>>;
    listImagingOrders(): Promise<Array<Type__9>>;
    listInvoices(): Promise<Array<Type__8>>;
    listLabResults(): Promise<Array<Type__7>>;
    listMedications(): Promise<Array<Type__6>>;
    listMentalHealthAssessments(): Promise<Array<Type__5>>;
    listMessages(): Promise<Array<Type__4>>;
    listPatients(): Promise<Array<Type__3>>;
    listPrescriptions(): Promise<Array<Type__2>>;
    listReferrals(): Promise<Array<Type__1>>;
    listSurveyResponses(): Promise<Array<Type>>;
    removeCaregiver(id: bigint): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    saveSurveyResponse(response: Type): Promise<bigint>;
    sendMessage(fromUserId: bigint, toUserId: bigint, content: string): Promise<bigint>;
    updateAppointmentStatus(id: bigint, newStatus: string): Promise<boolean>;
    updateClaimStatus(id: bigint, newStatus: string): Promise<boolean>;
    updateImagingOrderStatus(id: bigint, newStatus: string): Promise<boolean>;
    updateInvoiceStatus(id: bigint, newStatus: string): Promise<boolean>;
    updateMedicationStatus(id: bigint, newStatus: string): Promise<boolean>;
    updatePatient(id: bigint, name: string, dob: string, phone: string, email: string): Promise<boolean>;
    updatePrescriptionStatus(id: bigint, newStatus: string): Promise<boolean>;
    updateReferralStatus(id: bigint, newStatus: string): Promise<boolean>;
    listInboxResults(): Promise<Array<InboxResult>>;
    createInboxResult(patientName: string, testName: string, resultSummary: string, flag: string, resultType: string, orderedDate: string, receivedDate: string, provider: string): Promise<bigint>;
    acknowledgeResult(id: bigint): Promise<boolean>;
    saveResultNote(id: bigint, note: string): Promise<boolean>;
    saveResultCallback(id: bigint, providerNotified: string, method: string, dateTime: string, notes: string): Promise<boolean>;
    forwardResult(id: bigint, forwardedTo: string): Promise<boolean>;
}
