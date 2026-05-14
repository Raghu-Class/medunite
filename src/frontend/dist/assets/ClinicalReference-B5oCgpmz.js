import { r as reactExports, j as jsxRuntimeExports, o as Search } from "./index-4utdZC3E.js";
import { B as Badge } from "./badge-D0bvPgLI.js";
import { I as Input } from "./input-B6WlinMn.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-D2sDVimt.js";
const ICD_CODES = [
  // Cardiovascular
  {
    code: "I10",
    description: "Essential (Primary) Hypertension",
    category: "Cardiovascular"
  },
  {
    code: "I25.10",
    description: "Atherosclerotic Heart Disease",
    category: "Cardiovascular"
  },
  {
    code: "I21.9",
    description: "Acute Myocardial Infarction, Unspecified",
    category: "Cardiovascular"
  },
  {
    code: "I50.9",
    description: "Heart Failure, Unspecified",
    category: "Cardiovascular"
  },
  {
    code: "I48.91",
    description: "Unspecified Atrial Fibrillation",
    category: "Cardiovascular"
  },
  {
    code: "I63.9",
    description: "Cerebral Infarction, Unspecified",
    category: "Cardiovascular"
  },
  {
    code: "I20.9",
    description: "Angina Pectoris, Unspecified",
    category: "Cardiovascular"
  },
  {
    code: "I26.99",
    description: "Other Pulmonary Embolism",
    category: "Cardiovascular"
  },
  {
    code: "I82.401",
    description: "Deep Vein Thrombosis, Unspecified",
    category: "Cardiovascular"
  },
  {
    code: "I35.0",
    description: "Nonrheumatic Aortic Valve Stenosis",
    category: "Cardiovascular"
  },
  {
    code: "I42.0",
    description: "Dilated Cardiomyopathy",
    category: "Cardiovascular"
  },
  {
    code: "I71.4",
    description: "Abdominal Aortic Aneurysm without Rupture",
    category: "Cardiovascular"
  },
  // Endocrine
  {
    code: "E11.9",
    description: "Type 2 Diabetes Mellitus without Complications",
    category: "Endocrine"
  },
  {
    code: "E10.9",
    description: "Type 1 Diabetes Mellitus without Complications",
    category: "Endocrine"
  },
  {
    code: "E03.9",
    description: "Hypothyroidism, Unspecified",
    category: "Endocrine"
  },
  {
    code: "E05.90",
    description: "Hyperthyroidism, Unspecified",
    category: "Endocrine"
  },
  {
    code: "E11.65",
    description: "Type 2 Diabetes with Hyperglycemia",
    category: "Endocrine"
  },
  {
    code: "E78.5",
    description: "Hyperlipidemia, Unspecified",
    category: "Endocrine"
  },
  {
    code: "E11.40",
    description: "Type 2 Diabetes with Diabetic Neuropathy",
    category: "Endocrine"
  },
  {
    code: "E66.01",
    description: "Morbid Obesity due to Excess Calories",
    category: "Endocrine"
  },
  {
    code: "E27.1",
    description: "Primary Adrenocortical Insufficiency",
    category: "Endocrine"
  },
  // Respiratory
  {
    code: "J18.9",
    description: "Pneumonia, Unspecified",
    category: "Respiratory"
  },
  {
    code: "J44.1",
    description: "COPD with Acute Exacerbation",
    category: "Respiratory"
  },
  {
    code: "J45.901",
    description: "Unspecified Asthma with Acute Exacerbation",
    category: "Respiratory"
  },
  {
    code: "J06.9",
    description: "Acute Upper Respiratory Infection, Unspecified",
    category: "Respiratory"
  },
  {
    code: "J20.9",
    description: "Acute Bronchitis, Unspecified",
    category: "Respiratory"
  },
  {
    code: "J96.0",
    description: "Acute Respiratory Failure",
    category: "Respiratory"
  },
  {
    code: "J22",
    description: "Unspecified Acute Lower Respiratory Infection",
    category: "Respiratory"
  },
  { code: "J31.0", description: "Chronic Rhinitis", category: "Respiratory" },
  {
    code: "J41.0",
    description: "Simple Chronic Bronchitis",
    category: "Respiratory"
  },
  {
    code: "J93.11",
    description: "Spontaneous Tension Pneumothorax",
    category: "Respiratory"
  },
  // GI
  {
    code: "K21.0",
    description: "GERD with Esophagitis",
    category: "Gastrointestinal"
  },
  {
    code: "K92.1",
    description: "Melena (GI Bleeding)",
    category: "Gastrointestinal"
  },
  {
    code: "K57.30",
    description: "Diverticulosis of Colon without Perforation",
    category: "Gastrointestinal"
  },
  {
    code: "K80.20",
    description: "Cholelithiasis without Cholecystitis",
    category: "Gastrointestinal"
  },
  {
    code: "K56.60",
    description: "Unspecified Intestinal Obstruction",
    category: "Gastrointestinal"
  },
  {
    code: "K70.30",
    description: "Alcoholic Cirrhosis of Liver",
    category: "Gastrointestinal"
  },
  {
    code: "K25.9",
    description: "Gastric Ulcer, Unspecified",
    category: "Gastrointestinal"
  },
  {
    code: "K51.90",
    description: "Ulcerative Colitis, Unspecified",
    category: "Gastrointestinal"
  },
  {
    code: "K50.90",
    description: "Crohn's Disease of Small Intestine",
    category: "Gastrointestinal"
  },
  {
    code: "K85.90",
    description: "Acute Pancreatitis, Unspecified",
    category: "Gastrointestinal"
  },
  // Musculoskeletal
  { code: "M54.5", description: "Low Back Pain", category: "Musculoskeletal" },
  {
    code: "M54.2",
    description: "Cervicalgia (Neck Pain)",
    category: "Musculoskeletal"
  },
  {
    code: "M17.11",
    description: "Primary Osteoarthritis, Right Knee",
    category: "Musculoskeletal"
  },
  {
    code: "M79.3",
    description: "Panniculitis (Fibromyalgia Context)",
    category: "Musculoskeletal"
  },
  {
    code: "M25.511",
    description: "Pain in Right Shoulder",
    category: "Musculoskeletal"
  },
  {
    code: "M05.79",
    description: "Rheumatoid Arthritis with Rheumatoid Factor",
    category: "Musculoskeletal"
  },
  {
    code: "M10.9",
    description: "Gout, Unspecified",
    category: "Musculoskeletal"
  },
  {
    code: "M80.08XA",
    description: "Osteoporosis with Pathological Fracture",
    category: "Musculoskeletal"
  },
  // Mental Health
  {
    code: "F32.9",
    description: "Major Depressive Disorder, Single Episode",
    category: "Mental Health"
  },
  {
    code: "F33.0",
    description: "Major Depressive Disorder, Recurrent, Mild",
    category: "Mental Health"
  },
  {
    code: "F41.1",
    description: "Generalized Anxiety Disorder",
    category: "Mental Health"
  },
  { code: "F41.0", description: "Panic Disorder", category: "Mental Health" },
  {
    code: "F31.9",
    description: "Bipolar Disorder, Unspecified",
    category: "Mental Health"
  },
  {
    code: "F20.9",
    description: "Schizophrenia, Unspecified",
    category: "Mental Health"
  },
  {
    code: "F10.20",
    description: "Alcohol Use Disorder, Moderate",
    category: "Mental Health"
  },
  {
    code: "F43.10",
    description: "PTSD, Unspecified",
    category: "Mental Health"
  },
  {
    code: "F90.0",
    description: "ADHD, Predominantly Inattentive",
    category: "Mental Health"
  },
  {
    code: "F50.01",
    description: "Anorexia Nervosa, Restricting Type",
    category: "Mental Health"
  },
  // Neurological
  {
    code: "G43.909",
    description: "Migraine, Unspecified",
    category: "Neurological"
  },
  { code: "G20", description: "Parkinson's Disease", category: "Neurological" },
  { code: "G35", description: "Multiple Sclerosis", category: "Neurological" },
  {
    code: "G30.9",
    description: "Alzheimer's Disease, Unspecified",
    category: "Neurological"
  },
  {
    code: "G40.909",
    description: "Epilepsy, Unspecified",
    category: "Neurological"
  },
  {
    code: "G62.9",
    description: "Polyneuropathy, Unspecified",
    category: "Neurological"
  },
  { code: "G25.0", description: "Essential Tremor", category: "Neurological" },
  // Infectious
  { code: "A41.9", description: "Sepsis, Unspecified", category: "Infectious" },
  { code: "B20", description: "HIV Disease", category: "Infectious" },
  {
    code: "A09",
    description: "Infectious Gastroenteritis",
    category: "Infectious"
  },
  {
    code: "J09.X1",
    description: "Influenza, Identified Novel Virus",
    category: "Infectious"
  },
  {
    code: "A49.01",
    description: "MRSA Infection, Unspecified",
    category: "Infectious"
  },
  {
    code: "B37.3",
    description: "Candidiasis of Vulva and Vagina",
    category: "Infectious"
  },
  { code: "A36.9", description: "COVID-19", category: "Infectious" },
  {
    code: "U07.1",
    description: "COVID-19, Virus Identified",
    category: "Infectious"
  },
  // Genitourinary
  {
    code: "N39.0",
    description: "Urinary Tract Infection, Site Not Specified",
    category: "Genitourinary"
  },
  {
    code: "N18.3",
    description: "Chronic Kidney Disease, Stage 3",
    category: "Genitourinary"
  },
  {
    code: "N40.1",
    description: "Benign Prostatic Hyperplasia with LUTS",
    category: "Genitourinary"
  },
  {
    code: "N18.6",
    description: "End-Stage Renal Disease",
    category: "Genitourinary"
  },
  {
    code: "N20.0",
    description: "Calculus of Kidney (Kidney Stone)",
    category: "Genitourinary"
  },
  {
    code: "N92.0",
    description: "Excessive and Frequent Menstruation",
    category: "Genitourinary"
  },
  // Pregnancy
  {
    code: "O09.90",
    description: "Supervision of Unspecified Pregnancy",
    category: "Obstetric"
  },
  {
    code: "O80",
    description: "Encounter for Full-Term Uncomplicated Delivery",
    category: "Obstetric"
  },
  {
    code: "Z34.90",
    description: "Encounter for Supervision of Normal Pregnancy",
    category: "Obstetric"
  },
  // Symptoms
  { code: "R05.9", description: "Cough, Unspecified", category: "Symptoms" },
  { code: "R51.9", description: "Headache, Unspecified", category: "Symptoms" },
  {
    code: "R10.9",
    description: "Unspecified Abdominal Pain",
    category: "Symptoms"
  },
  {
    code: "R07.9",
    description: "Chest Pain, Unspecified",
    category: "Symptoms"
  },
  { code: "R55", description: "Syncope and Collapse", category: "Symptoms" },
  {
    code: "R00.1",
    description: "Bradycardia, Unspecified",
    category: "Symptoms"
  },
  { code: "R06.00", description: "Dyspnea, Unspecified", category: "Symptoms" },
  { code: "R53.83", description: "Other Fatigue", category: "Symptoms" },
  {
    code: "R73.09",
    description: "Other Abnormal Glucose",
    category: "Symptoms"
  },
  { code: "R11.2", description: "Nausea with Vomiting", category: "Symptoms" },
  // Preventive
  {
    code: "Z00.00",
    description: "Encounter for General Adult Medical Examination",
    category: "Preventive"
  },
  {
    code: "Z23",
    description: "Encounter for Immunization",
    category: "Preventive"
  },
  {
    code: "Z12.11",
    description: "Encounter for Screening for Colon Cancer",
    category: "Preventive"
  },
  {
    code: "Z12.31",
    description: "Encounter for Screening for Cervical Cancer",
    category: "Preventive"
  },
  {
    code: "Z79.4",
    description: "Long-term (current) Use of Insulin",
    category: "Preventive"
  }
];
const MEDICATIONS = [
  {
    name: "Lisinopril",
    drugClass: "ACE Inhibitor",
    indication: "Hypertension, Heart Failure",
    dose: "5–40 mg daily",
    route: "PO",
    notes: "Monitor K+, Cr; CI in pregnancy"
  },
  {
    name: "Metformin",
    drugClass: "Biguanide",
    indication: "Type 2 Diabetes",
    dose: "500–2000 mg/day",
    route: "PO",
    notes: "Hold before contrast; CI in eGFR <30"
  },
  {
    name: "Atorvastatin",
    drugClass: "Statin",
    indication: "Hyperlipidemia, CVD prevention",
    dose: "10–80 mg nightly",
    route: "PO",
    notes: "Monitor LFTs; myopathy risk"
  },
  {
    name: "Amlodipine",
    drugClass: "Calcium Channel Blocker",
    indication: "Hypertension, Angina",
    dose: "2.5–10 mg daily",
    route: "PO",
    notes: "Peripheral edema common"
  },
  {
    name: "Warfarin",
    drugClass: "Anticoagulant",
    indication: "AFib, DVT, PE",
    dose: "Dose per INR target",
    route: "PO",
    notes: "Narrow TI; many drug/food interactions; monitor INR"
  },
  {
    name: "Metoprolol",
    drugClass: "Beta-Blocker",
    indication: "Hypertension, Heart Failure, AFib",
    dose: "25–200 mg/day",
    route: "PO",
    notes: "Do not stop abruptly; CI in severe bradycardia"
  },
  {
    name: "Omeprazole",
    drugClass: "PPI",
    indication: "GERD, Peptic Ulcer",
    dose: "20–40 mg daily",
    route: "PO",
    notes: "May reduce clopidogrel efficacy"
  },
  {
    name: "Levothyroxine",
    drugClass: "Thyroid Hormone",
    indication: "Hypothyroidism",
    dose: "25–200 mcg daily",
    route: "PO",
    notes: "Take fasting; many interactions"
  },
  {
    name: "Sertraline",
    drugClass: "SSRI",
    indication: "Depression, Anxiety, OCD",
    dose: "50–200 mg daily",
    route: "PO",
    notes: "Serotonin syndrome risk; taper off"
  },
  {
    name: "Amoxicillin",
    drugClass: "Penicillin Antibiotic",
    indication: "Bacterial infections",
    dose: "250–875 mg q8–12h",
    route: "PO",
    notes: "CI in PCN allergy"
  },
  {
    name: "Azithromycin",
    drugClass: "Macrolide Antibiotic",
    indication: "Respiratory infections, STIs",
    dose: "250–500 mg daily",
    route: "PO/IV",
    notes: "QT prolongation risk"
  },
  {
    name: "Ciprofloxacin",
    drugClass: "Fluoroquinolone",
    indication: "UTI, GI infections",
    dose: "250–750 mg q12h",
    route: "PO/IV",
    notes: "Tendon rupture risk; avoid in children"
  },
  {
    name: "Prednisone",
    drugClass: "Corticosteroid",
    indication: "Inflammation, Autoimmune",
    dose: "5–60 mg daily",
    route: "PO",
    notes: "Taper on long-term use; hyperglycemia"
  },
  {
    name: "Ibuprofen",
    drugClass: "NSAID",
    indication: "Pain, Fever, Inflammation",
    dose: "200–800 mg q6–8h",
    route: "PO",
    notes: "GI/renal risk; avoid in CKD"
  },
  {
    name: "Acetaminophen",
    drugClass: "Analgesic/Antipyretic",
    indication: "Pain, Fever",
    dose: "325–1000 mg q4–6h",
    route: "PO/IV",
    notes: "Max 3–4 g/day; hepatotoxic in OD"
  },
  {
    name: "Aspirin",
    drugClass: "Antiplatelet/NSAID",
    indication: "CVD prevention, Pain",
    dose: "81–325 mg daily",
    route: "PO",
    notes: "GI bleeding risk; Reye's syndrome in children"
  },
  {
    name: "Clopidogrel",
    drugClass: "Antiplatelet",
    indication: "ACS, Stroke prevention",
    dose: "75 mg daily",
    route: "PO",
    notes: "CYP2C19 polymorphism affects efficacy"
  },
  {
    name: "Furosemide",
    drugClass: "Loop Diuretic",
    indication: "Edema, Heart Failure, Hypertension",
    dose: "20–80 mg daily",
    route: "PO/IV",
    notes: "Monitor electrolytes; ototoxicity"
  },
  {
    name: "Spironolactone",
    drugClass: "Potassium-Sparing Diuretic",
    indication: "Heart Failure, Hyperaldosteronism",
    dose: "25–100 mg daily",
    route: "PO",
    notes: "Hyperkalemia risk; gynecomastia"
  },
  {
    name: "Albuterol",
    drugClass: "Beta-2 Agonist",
    indication: "Asthma, COPD",
    dose: "2.5 mg q4–6h PRN",
    route: "Inhaled/NEB",
    notes: "Tachycardia; tremor"
  },
  {
    name: "Fluticasone",
    drugClass: "Inhaled Corticosteroid",
    indication: "Asthma, Allergic rhinitis",
    dose: "88–880 mcg/day",
    route: "Inhaled",
    notes: "Oral candidiasis; rinse mouth after"
  },
  {
    name: "Montelukast",
    drugClass: "Leukotriene Antagonist",
    indication: "Asthma, Allergic rhinitis",
    dose: "10 mg nightly",
    route: "PO",
    notes: "Neuropsychiatric events reported"
  },
  {
    name: "Gabapentin",
    drugClass: "Anticonvulsant/Neuropathic",
    indication: "Neuropathic pain, Seizures",
    dose: "300–3600 mg/day in 3 doses",
    route: "PO",
    notes: "Sedation; dose adjust for renal"
  },
  {
    name: "Pregabalin",
    drugClass: "Anticonvulsant/Neuropathic",
    indication: "Fibromyalgia, Neuropathic pain",
    dose: "150–600 mg/day",
    route: "PO",
    notes: "Schedule V; sedation; abuse potential"
  },
  {
    name: "Duloxetine",
    drugClass: "SNRI",
    indication: "Depression, Neuropathic pain",
    dose: "30–120 mg daily",
    route: "PO",
    notes: "Avoid in liver disease; taper off"
  },
  {
    name: "Escitalopram",
    drugClass: "SSRI",
    indication: "Depression, Generalized Anxiety",
    dose: "10–20 mg daily",
    route: "PO",
    notes: "QT prolongation at high doses"
  },
  {
    name: "Bupropion",
    drugClass: "NDRI",
    indication: "Depression, Smoking cessation",
    dose: "150–450 mg/day",
    route: "PO",
    notes: "Lowers seizure threshold; CI in eating disorders"
  },
  {
    name: "Quetiapine",
    drugClass: "Atypical Antipsychotic",
    indication: "Schizophrenia, Bipolar, Depression",
    dose: "50–800 mg/day",
    route: "PO",
    notes: "Metabolic syndrome; QT prolongation"
  },
  {
    name: "Risperidone",
    drugClass: "Atypical Antipsychotic",
    indication: "Schizophrenia, Bipolar",
    dose: "0.5–8 mg/day",
    route: "PO/IM",
    notes: "EPS risk; hyperprolactinemia"
  },
  {
    name: "Haloperidol",
    drugClass: "Typical Antipsychotic",
    indication: "Psychosis, Agitation",
    dose: "0.5–20 mg/day",
    route: "PO/IM/IV",
    notes: "EPS risk; QT prolongation"
  },
  {
    name: "Lorazepam",
    drugClass: "Benzodiazepine",
    indication: "Anxiety, Seizures, Sedation",
    dose: "0.5–4 mg q6–8h",
    route: "PO/IV/IM",
    notes: "Schedule IV; dependence; respiratory depression"
  },
  {
    name: "Alprazolam",
    drugClass: "Benzodiazepine",
    indication: "Anxiety, Panic disorder",
    dose: "0.25–1 mg TID",
    route: "PO",
    notes: "High abuse potential; taper off"
  },
  {
    name: "Zolpidem",
    drugClass: "Non-Benzodiazepine Sedative",
    indication: "Insomnia",
    dose: "5–10 mg at bedtime",
    route: "PO",
    notes: "Parasomnias; avoid in elderly"
  },
  {
    name: "Trazodone",
    drugClass: "SARI",
    indication: "Insomnia, Depression",
    dose: "50–150 mg at bedtime",
    route: "PO",
    notes: "Priapism (rare); orthostatic hypotension"
  },
  {
    name: "Hydrochlorothiazide",
    drugClass: "Thiazide Diuretic",
    indication: "Hypertension, Edema",
    dose: "12.5–50 mg daily",
    route: "PO",
    notes: "Hypokalemia; hyperuricemia"
  },
  {
    name: "Losartan",
    drugClass: "ARB",
    indication: "Hypertension, Heart Failure, Diabetic nephropathy",
    dose: "25–100 mg daily",
    route: "PO",
    notes: "Monitor K+, Cr; CI in pregnancy"
  },
  {
    name: "Valsartan",
    drugClass: "ARB",
    indication: "Hypertension, Heart Failure",
    dose: "80–320 mg daily",
    route: "PO",
    notes: "CI in pregnancy; hyperkalemia"
  },
  {
    name: "Carvedilol",
    drugClass: "Alpha/Beta-Blocker",
    indication: "Heart Failure, Hypertension",
    dose: "3.125–25 mg BID",
    route: "PO",
    notes: "Do not stop abruptly; titrate slowly"
  },
  {
    name: "Bisoprolol",
    drugClass: "Beta-1 Blocker",
    indication: "Heart Failure, Hypertension",
    dose: "1.25–10 mg daily",
    route: "PO",
    notes: "Cardioselective; do not stop abruptly"
  },
  {
    name: "Diltiazem",
    drugClass: "Non-DHP Calcium Channel Blocker",
    indication: "AFib rate control, Angina",
    dose: "120–360 mg/day",
    route: "PO/IV",
    notes: "Negative chronotrope; drug interactions"
  },
  {
    name: "Digoxin",
    drugClass: "Cardiac Glycoside",
    indication: "Heart Failure, AFib",
    dose: "0.125–0.25 mg daily",
    route: "PO",
    notes: "Narrow TI; toxicity in renal failure"
  },
  {
    name: "Amiodarone",
    drugClass: "Antiarrhythmic",
    indication: "Ventricular arrhythmias, AFib",
    dose: "100–400 mg daily",
    route: "PO/IV",
    notes: "Thyroid/lung/liver toxicity; many interactions"
  },
  {
    name: "Apixaban",
    drugClass: "Factor Xa Inhibitor",
    indication: "AFib, DVT/PE treatment & prevention",
    dose: "2.5–10 mg BID",
    route: "PO",
    notes: "No routine monitoring; reversal: andexanet"
  },
  {
    name: "Rivaroxaban",
    drugClass: "Factor Xa Inhibitor",
    indication: "AFib, DVT/PE",
    dose: "10–20 mg daily",
    route: "PO",
    notes: "Take with food; renal dose adjust"
  },
  {
    name: "Heparin",
    drugClass: "Anticoagulant",
    indication: "DVT/PE, ACS",
    dose: "Per protocol (weight-based)",
    route: "IV/SQ",
    notes: "Monitor aPTT; HIT risk"
  },
  {
    name: "Enoxaparin",
    drugClass: "LMWH",
    indication: "DVT/PE, ACS prophylaxis",
    dose: "1 mg/kg q12h or 1.5 mg/kg daily",
    route: "SQ",
    notes: "Renal dose adjust; anti-Xa monitoring"
  },
  {
    name: "Insulin Glargine",
    drugClass: "Long-Acting Insulin",
    indication: "Type 1 & 2 Diabetes",
    dose: "Once daily, dose individualized",
    route: "SQ",
    notes: "Do not mix; hypoglycemia"
  },
  {
    name: "Insulin Aspart",
    drugClass: "Rapid-Acting Insulin",
    indication: "Type 1 & 2 Diabetes",
    dose: "Mealtime, dose per carb ratio",
    route: "SQ",
    notes: "Give within 15 min of meal"
  },
  {
    name: "Glipizide",
    drugClass: "Sulfonylurea",
    indication: "Type 2 Diabetes",
    dose: "5–40 mg daily",
    route: "PO",
    notes: "Hypoglycemia; take before meal"
  },
  {
    name: "Sitagliptin",
    drugClass: "DPP-4 Inhibitor",
    indication: "Type 2 Diabetes",
    dose: "100 mg daily",
    route: "PO",
    notes: "Pancreatitis risk; renal dose adjust"
  },
  {
    name: "Empagliflozin",
    drugClass: "SGLT-2 Inhibitor",
    indication: "Type 2 Diabetes, Heart Failure",
    dose: "10–25 mg daily",
    route: "PO",
    notes: "DKA risk; UTI; not for eGFR <45"
  },
  {
    name: "Liraglutide",
    drugClass: "GLP-1 Agonist",
    indication: "Type 2 Diabetes, Obesity",
    dose: "0.6–1.8 mg daily",
    route: "SQ",
    notes: "GI side effects; pancreatitis"
  },
  {
    name: "Methotrexate",
    drugClass: "DMARD/Chemotherapy",
    indication: "RA, Psoriasis, Cancer",
    dose: "7.5–25 mg weekly (RA)",
    route: "PO/SQ",
    notes: "Folic acid supplement; hepatotoxic; teratogenic"
  },
  {
    name: "Hydroxychloroquine",
    drugClass: "DMARD",
    indication: "RA, Lupus",
    dose: "200–400 mg daily",
    route: "PO",
    notes: "Baseline ophthalmology exam; retinopathy"
  },
  {
    name: "Adalimumab",
    drugClass: "TNF Inhibitor",
    indication: "RA, Crohn's, Psoriasis",
    dose: "40 mg q2 weeks",
    route: "SQ",
    notes: "Screen for TB; infection risk"
  },
  {
    name: "Etanercept",
    drugClass: "TNF Inhibitor",
    indication: "RA, Psoriatic arthritis",
    dose: "50 mg weekly",
    route: "SQ",
    notes: "Screen for TB; avoid live vaccines"
  },
  {
    name: "Naproxen",
    drugClass: "NSAID",
    indication: "Pain, Inflammation, Arthritis",
    dose: "250–500 mg BID",
    route: "PO",
    notes: "GI protection advised; avoid in CKD"
  },
  {
    name: "Celecoxib",
    drugClass: "COX-2 Inhibitor",
    indication: "Arthritis, Pain",
    dose: "100–200 mg BID",
    route: "PO",
    notes: "Lower GI risk; cardiovascular risk"
  },
  {
    name: "Tramadol",
    drugClass: "Opioid Agonist/SNRI",
    indication: "Moderate pain",
    dose: "50–100 mg q4–6h",
    route: "PO",
    notes: "Seizure risk; serotonin syndrome; Schedule IV"
  },
  {
    name: "Oxycodone",
    drugClass: "Opioid Agonist",
    indication: "Moderate-severe pain",
    dose: "5–15 mg q4–6h PRN",
    route: "PO",
    notes: "Schedule II; constipation; respiratory depression"
  },
  {
    name: "Morphine",
    drugClass: "Opioid Agonist",
    indication: "Severe pain, Dyspnea",
    dose: "2–15 mg q4h",
    route: "PO/IV/SQ",
    notes: "Schedule II; titrate; constipation"
  },
  {
    name: "Ondansetron",
    drugClass: "5-HT3 Antagonist",
    indication: "Nausea/Vomiting",
    dose: "4–8 mg q8h",
    route: "PO/IV",
    notes: "QT prolongation; serotonin syndrome"
  },
  {
    name: "Metoclopramide",
    drugClass: "Prokinetic",
    indication: "Nausea, Gastroparesis",
    dose: "5–10 mg q6h",
    route: "PO/IV",
    notes: "Tardive dyskinesia with long-term use"
  },
  {
    name: "Pantoprazole",
    drugClass: "PPI",
    indication: "GERD, GI prophylaxis",
    dose: "40 mg daily",
    route: "PO/IV",
    notes: "C. diff risk; Mg monitoring long-term"
  },
  {
    name: "Sucralfate",
    drugClass: "Cytoprotective",
    indication: "Peptic ulcer",
    dose: "1 g QID",
    route: "PO",
    notes: "Take on empty stomach; constipation"
  },
  {
    name: "Lactulose",
    drugClass: "Osmotic Laxative",
    indication: "Constipation, Hepatic encephalopathy",
    dose: "15–30 mL BID–TID",
    route: "PO",
    notes: "Titrate to 2–3 soft stools/day"
  },
  {
    name: "Polyethylene Glycol",
    drugClass: "Osmotic Laxative",
    indication: "Constipation",
    dose: "17 g in 8 oz water daily",
    route: "PO",
    notes: "Well tolerated; safe long-term"
  },
  {
    name: "Mesalamine",
    drugClass: "Aminosalicylate",
    indication: "Ulcerative colitis",
    dose: "800 mg TID or 1.6 g BID",
    route: "PO/PR",
    notes: "Monitor renal function"
  },
  {
    name: "Azathioprine",
    drugClass: "Immunosuppressant",
    indication: "IBD, Transplant, Autoimmune",
    dose: "1–3 mg/kg daily",
    route: "PO",
    notes: "TPMT testing; myelosuppression; lymphoma"
  },
  {
    name: "Vancomycin",
    drugClass: "Glycopeptide Antibiotic",
    indication: "MRSA, C. diff (PO)",
    dose: "15–20 mg/kg q8–12h IV",
    route: "IV/PO",
    notes: "Monitor troughs; nephrotoxicity"
  },
  {
    name: "Piperacillin-Tazobactam",
    drugClass: "Beta-Lactam/Beta-Lactamase Inhibitor",
    indication: "Polymicrobial infections",
    dose: "3.375–4.5 g q6–8h",
    route: "IV",
    notes: "PCN allergy cross-reactivity"
  },
  {
    name: "Meropenem",
    drugClass: "Carbapenem",
    indication: "Severe/multidrug-resistant infections",
    dose: "1–2 g q8h",
    route: "IV",
    notes: "Reserve for resistant organisms"
  },
  {
    name: "Fluconazole",
    drugClass: "Azole Antifungal",
    indication: "Candidiasis",
    dose: "150–400 mg daily",
    route: "PO/IV",
    notes: "Many CYP450 interactions; QT prolongation"
  },
  {
    name: "Acyclovir",
    drugClass: "Antiviral",
    indication: "Herpes, VZV",
    dose: "200–800 mg 5x/day",
    route: "PO/IV",
    notes: "Hydration important; renal dose adjust"
  },
  {
    name: "Oseltamivir",
    drugClass: "Neuraminidase Inhibitor",
    indication: "Influenza",
    dose: "75 mg BID x 5 days",
    route: "PO",
    notes: "Start within 48h of symptoms"
  },
  {
    name: "Doxycycline",
    drugClass: "Tetracycline Antibiotic",
    indication: "Atypical pneumonia, Lyme, STIs",
    dose: "100 mg BID",
    route: "PO/IV",
    notes: "Avoid with dairy; photosensitivity"
  },
  {
    name: "Nitrofurantoin",
    drugClass: "Nitrofuran Antibiotic",
    indication: "Uncomplicated UTI",
    dose: "100 mg BID x 5–7 days",
    route: "PO",
    notes: "CI in eGFR <45; pulmonary toxicity long-term"
  },
  {
    name: "Trimethoprim-Sulfamethoxazole",
    drugClass: "Sulfonamide",
    indication: "UTI, PCP prophylaxis",
    dose: "1–2 DS tabs BID",
    route: "PO/IV",
    notes: "Sulfa allergy; hyperkalemia; photosensitivity"
  },
  {
    name: "Cephalexin",
    drugClass: "First-Gen Cephalosporin",
    indication: "Skin/soft tissue, UTI",
    dose: "250–500 mg QID",
    route: "PO",
    notes: "Cross-reactivity with PCN allergy (<5%)"
  },
  {
    name: "Clindamycin",
    drugClass: "Lincosamide Antibiotic",
    indication: "Skin/soft tissue, Anaerobic infections",
    dose: "150–450 mg q6h",
    route: "PO/IV",
    notes: "C. diff risk; covers MRSA (skin)"
  },
  {
    name: "Levofloxacin",
    drugClass: "Fluoroquinolone",
    indication: "CAP, UTI, Sinusitis",
    dose: "250–750 mg daily",
    route: "PO/IV",
    notes: "QT prolongation; tendon rupture"
  },
  {
    name: "Fentanyl",
    drugClass: "Opioid Agonist",
    indication: "Severe pain, Anesthesia",
    dose: "12–100 mcg/h patch",
    route: "TD/IV",
    notes: "Schedule II; high potency; respiratory depression"
  },
  {
    name: "Naloxone",
    drugClass: "Opioid Antagonist",
    indication: "Opioid overdose reversal",
    dose: "0.4–2 mg q2–3min",
    route: "IM/IV/IN",
    notes: "Short-acting; may need repeat doses"
  },
  {
    name: "Lithium",
    drugClass: "Mood Stabilizer",
    indication: "Bipolar disorder",
    dose: "600–1200 mg/day",
    route: "PO",
    notes: "Narrow TI; monitor levels, thyroid, renal"
  },
  {
    name: "Valproate",
    drugClass: "Anticonvulsant/Mood Stabilizer",
    indication: "Seizures, Bipolar, Migraine",
    dose: "750–2000 mg/day",
    route: "PO/IV",
    notes: "Teratogenic; hepatotoxic; monitor levels"
  },
  {
    name: "Levetiracetam",
    drugClass: "Anticonvulsant",
    indication: "Seizures",
    dose: "500–3000 mg/day",
    route: "PO/IV",
    notes: "Behavioral side effects; renal dose adjust"
  },
  {
    name: "Carbidopa-Levodopa",
    drugClass: "Dopamine Precursor",
    indication: "Parkinson's disease",
    dose: "25/100 mg TID–QID",
    route: "PO",
    notes: "Dyskinesias; 'wearing off'; take consistently"
  },
  {
    name: "Donepezil",
    drugClass: "Acetylcholinesterase Inhibitor",
    indication: "Alzheimer's dementia",
    dose: "5–10 mg nightly",
    route: "PO",
    notes: "GI side effects; vivid dreams"
  },
  {
    name: "Memantine",
    drugClass: "NMDA Antagonist",
    indication: "Moderate-severe Alzheimer's",
    dose: "5–20 mg daily",
    route: "PO",
    notes: "Can combine with donepezil"
  },
  {
    name: "Sumatriptan",
    drugClass: "Triptan",
    indication: "Migraine",
    dose: "25–100 mg PO; 6 mg SQ",
    route: "PO/SQ/IN",
    notes: "CI in CAD, uncontrolled HTN"
  },
  {
    name: "Topiramate",
    drugClass: "Anticonvulsant",
    indication: "Seizures, Migraine prevention",
    dose: "25–200 mg/day",
    route: "PO",
    notes: "Kidney stones; cognitive effects; teratogenic"
  },
  {
    name: "Allopurinol",
    drugClass: "Xanthine Oxidase Inhibitor",
    indication: "Gout, Hyperuricemia",
    dose: "100–800 mg daily",
    route: "PO",
    notes: "Severe rash (SJS); HLA-B*5801 testing"
  },
  {
    name: "Colchicine",
    drugClass: "Alkaloid Anti-inflammatory",
    indication: "Acute gout",
    dose: "1.2 mg then 0.6 mg 1h later",
    route: "PO",
    notes: "GI toxicity; drug interactions"
  },
  {
    name: "Ferrous Sulfate",
    drugClass: "Iron Supplement",
    indication: "Iron deficiency anemia",
    dose: "325 mg TID",
    route: "PO",
    notes: "GI side effects; take on empty stomach"
  },
  {
    name: "Folic Acid",
    drugClass: "Vitamin B9",
    indication: "Anemia prevention, Pregnancy",
    dose: "0.4–5 mg daily",
    route: "PO",
    notes: "Required in pregnancy (neural tube defects)"
  },
  {
    name: "Vitamin B12",
    drugClass: "Vitamin",
    indication: "B12 deficiency, Pernicious anemia",
    dose: "1000 mcg monthly IM",
    route: "IM/PO",
    notes: "PO if dietary deficiency; IM if absorption issue"
  }
];
const SYMPTOMS = [
  {
    symptom: "Chest Pain",
    causes: [
      "Angina/ACS",
      "GERD/Esophageal spasm",
      "Musculoskeletal",
      "Pulmonary embolism",
      "Anxiety/Panic"
    ],
    workup: "ECG, Troponin, CXR, BMP, D-dimer if PE suspected"
  },
  {
    symptom: "Shortness of Breath",
    causes: [
      "Heart failure",
      "COPD/Asthma",
      "Pneumonia",
      "Pulmonary embolism",
      "Anemia"
    ],
    workup: "CXR, BNP, CBC, ABG, ECG, SpO2"
  },
  {
    symptom: "Headache",
    causes: [
      "Tension headache",
      "Migraine",
      "Hypertension",
      "Meningitis",
      "Intracranial hemorrhage"
    ],
    workup: "Neuro exam; CT head if red flags; LP if meningitis suspected"
  },
  {
    symptom: "Fever",
    causes: [
      "Bacterial infection",
      "Viral illness",
      "UTI",
      "Drug reaction",
      "Malignancy"
    ],
    workup: "CBC, BMP, UA/culture, Blood cultures x2, CXR"
  },
  {
    symptom: "Fatigue",
    causes: [
      "Anemia",
      "Hypothyroidism",
      "Depression",
      "Sleep apnea",
      "Diabetes"
    ],
    workup: "CBC, TSH, BMP, HbA1c, Depression screen, Sleep study"
  },
  {
    symptom: "Dizziness",
    causes: [
      "BPPV",
      "Orthostatic hypotension",
      "Vestibular neuritis",
      "Anemia",
      "Cardiac arrhythmia"
    ],
    workup: "Orthostatic BPs, CBC, ECG, Dix-Hallpike maneuver"
  },
  {
    symptom: "Cough",
    causes: [
      "URTI/Postnasal drip",
      "Asthma",
      "GERD",
      "ACE inhibitor",
      "Pneumonia"
    ],
    workup: "CXR, Spirometry, Trial off ACE inhibitor, Methacholine challenge"
  },
  {
    symptom: "Abdominal Pain",
    causes: ["Appendicitis", "PUD/GERD", "Cholecystitis", "IBD", "IBS"],
    workup: "CBC, BMP, LFTs, Lipase, UA, Imaging (CT/US)"
  },
  {
    symptom: "Nausea/Vomiting",
    causes: [
      "Gastroenteritis",
      "GERD",
      "Pregnancy",
      "Gastroparesis",
      "Drug side effect"
    ],
    workup: "BMP, Lipase, hCG if female, Abdominal US"
  },
  {
    symptom: "Back Pain",
    causes: [
      "Lumbar strain",
      "Herniated disc",
      "Osteoarthritis",
      "Spinal stenosis",
      "Kidney stones"
    ],
    workup: "Musculoskeletal exam; MRI lumbar if neurological deficits; UA to rule out renal"
  },
  {
    symptom: "Joint Pain",
    causes: [
      "Osteoarthritis",
      "Rheumatoid arthritis",
      "Gout",
      "Septic arthritis",
      "Reactive arthritis"
    ],
    workup: "CBC, CMP, ESR, CRP, RF, Anti-CCP, Uric acid, Joint aspiration if septic suspected"
  },
  {
    symptom: "Palpitations",
    causes: ["AFib", "SVT", "PVCs", "Anxiety", "Hyperthyroidism"],
    workup: "ECG, Holter monitor, TSH, CBC, BMP, Echocardiogram"
  },
  {
    symptom: "Syncope",
    causes: [
      "Vasovagal",
      "Orthostatic hypotension",
      "Cardiac arrhythmia",
      "Seizure",
      "Structural heart disease"
    ],
    workup: "ECG, Orthostatic BPs, CBC, BMP, Echocardiogram, EEG if seizure"
  },
  {
    symptom: "Edema (Lower Extremity)",
    causes: [
      "Heart failure",
      "Venous insufficiency",
      "DVT",
      "Hypoalbuminemia",
      "Medication"
    ],
    workup: "BNP, Echo, Duplex US, BMP, LFTs, UA"
  },
  {
    symptom: "Unintentional Weight Loss",
    causes: ["Malignancy", "Hyperthyroidism", "IBD", "Depression", "Diabetes"],
    workup: "CBC, BMP, TSH, HbA1c, CEA, CT chest/abdomen/pelvis"
  },
  {
    symptom: "Weight Gain",
    causes: [
      "Hypothyroidism",
      "Cushing's syndrome",
      "Heart failure",
      "Medication",
      "Depression"
    ],
    workup: "TSH, Cortisol, Fasting glucose, Echo, Medication review"
  },
  {
    symptom: "Dysphagia",
    causes: [
      "GERD/Esophagitis",
      "Esophageal stricture",
      "Esophageal cancer",
      "Achalasia",
      "Neurological"
    ],
    workup: "Barium swallow, Upper endoscopy, Manometry"
  },
  {
    symptom: "Hematuria",
    causes: [
      "UTI",
      "Kidney stones",
      "Bladder cancer",
      "Glomerulonephritis",
      "BPH"
    ],
    workup: "UA with microscopy, Urine culture, CT urography, Cystoscopy"
  },
  {
    symptom: "Dysuria",
    causes: ["UTI", "STI", "Urethritis", "Vaginitis", "Interstitial cystitis"],
    workup: "UA/urine culture, STI panel, Pelvic exam if female"
  },
  {
    symptom: "Rash",
    causes: [
      "Contact dermatitis",
      "Drug reaction",
      "Psoriasis",
      "Eczema",
      "Infection"
    ],
    workup: "Dermatology exam, Skin biopsy if unclear, Drug history, Patch testing"
  },
  {
    symptom: "Polyuria/Polydipsia",
    causes: [
      "Diabetes mellitus",
      "Diabetes insipidus",
      "Hypercalcemia",
      "CKD",
      "Diuretics"
    ],
    workup: "Fasting glucose, HbA1c, BMP, Calcium, Urine osmolality"
  },
  {
    symptom: "Chest Tightness",
    causes: ["Asthma", "Angina", "Anxiety", "GERD", "Pericarditis"],
    workup: "ECG, Spirometry, CXR, Troponin if cardiac suspected"
  },
  {
    symptom: "Hemoptysis",
    causes: [
      "Bronchitis",
      "Lung cancer",
      "TB",
      "Pulmonary embolism",
      "Bronchiectasis"
    ],
    workup: "CXR, CT chest, CBC, Coagulation studies, Bronchoscopy"
  },
  {
    symptom: "Night Sweats",
    causes: ["Menopause", "Lymphoma", "TB", "HIV", "Medications"],
    workup: "CBC, ESR, CRP, TSH, HIV, CXR, Lymph node assessment"
  },
  {
    symptom: "Tremor",
    causes: [
      "Essential tremor",
      "Parkinson's disease",
      "Hyperthyroidism",
      "Medication",
      "Anxiety"
    ],
    workup: "Neuro exam, TSH, Medication review, DaT scan if Parkinson's suspected"
  },
  {
    symptom: "Memory Loss",
    causes: [
      "Dementia/Alzheimer's",
      "Depression",
      "Hypothyroidism",
      "Vitamin B12 deficiency",
      "Medication"
    ],
    workup: "MMSE/MoCA, TSH, B12, CBC, BMP, MRI brain"
  },
  {
    symptom: "Jaundice",
    causes: [
      "Viral hepatitis",
      "Cirrhosis",
      "Cholelithiasis",
      "Hemolysis",
      "Pancreatic cancer"
    ],
    workup: "LFTs, Bili (direct/indirect), CBC, Abdominal US, Hepatitis panel"
  },
  {
    symptom: "Hematochezia",
    causes: [
      "Hemorrhoids",
      "Diverticulosis",
      "Colorectal cancer",
      "IBD",
      "Colitis"
    ],
    workup: "Colonoscopy, CBC, BMP, Rectal exam, CT angiography if massive"
  },
  {
    symptom: "Pruritus",
    causes: [
      "Dermatitis",
      "Cholestasis",
      "CKD",
      "Polycythemia vera",
      "Drug reaction"
    ],
    workup: "LFTs, BMP, CBC, TSH, Skin exam, Biopsy if needed"
  },
  {
    symptom: "Epistaxis",
    causes: [
      "Dry nasal mucosa",
      "Hypertension",
      "Coagulopathy",
      "Trauma",
      "Anticoagulant use"
    ],
    workup: "BP measurement, CBC, Coagulation studies, Medication review"
  },
  {
    symptom: "Insomnia",
    causes: [
      "Anxiety/Depression",
      "Sleep apnea",
      "Restless leg syndrome",
      "Medication",
      "Poor sleep hygiene"
    ],
    workup: "PHQ-9, GAD-7, Sleep study, TSH, Medication review"
  },
  {
    symptom: "Tinnitus",
    causes: [
      "Noise-induced hearing loss",
      "Otosclerosis",
      "Ménière's disease",
      "Medication",
      "Acoustic neuroma"
    ],
    workup: "Audiogram, CT/MRI head, Medication review"
  },
  {
    symptom: "Vision Changes",
    causes: [
      "Diabetic retinopathy",
      "Glaucoma",
      "Cataracts",
      "Stroke/TIA",
      "Optic neuritis"
    ],
    workup: "Ophthalmology consult, Blood glucose, ECG, MRI brain"
  },
  {
    symptom: "Urinary Incontinence",
    causes: [
      "Stress incontinence",
      "Urge incontinence",
      "BPH",
      "UTI",
      "Neurogenic bladder"
    ],
    workup: "UA/culture, PVR ultrasound, Urodynamic studies"
  },
  {
    symptom: "Anxiety",
    causes: [
      "GAD",
      "Panic disorder",
      "Hyperthyroidism",
      "Stimulant use",
      "Cardiovascular disease"
    ],
    workup: "GAD-7, TSH, ECG, Substance screen, PHQ-9"
  },
  {
    symptom: "Depression",
    causes: [
      "MDD",
      "Hypothyroidism",
      "Anemia",
      "Substance abuse",
      "Chronic illness"
    ],
    workup: "PHQ-9, TSH, CBC, B12, Substance screen"
  },
  {
    symptom: "Leg Cramps",
    causes: [
      "Electrolyte imbalance",
      "Dehydration",
      "Peripheral arterial disease",
      "Medication",
      "Nerve compression"
    ],
    workup: "BMP, Mg, Phosphorus, ABI, Medication review"
  },
  {
    symptom: "Constipation",
    causes: [
      "Low fiber diet",
      "Hypothyroidism",
      "IBS",
      "Medication",
      "Colorectal obstruction"
    ],
    workup: "TSH, BMP, Calcium, Colonoscopy if alarm features"
  },
  {
    symptom: "Diarrhea",
    causes: [
      "Infectious gastroenteritis",
      "IBS",
      "IBD",
      "C. diff",
      "Medication"
    ],
    workup: "Stool culture, C. diff toxin, CBC, BMP, Colonoscopy if chronic"
  },
  {
    symptom: "Hirsutism",
    causes: [
      "PCOS",
      "Adrenal tumor",
      "Cushing's syndrome",
      "Medication",
      "Idiopathic"
    ],
    workup: "Total testosterone, DHEA-S, 17-OH progesterone, Cortisol"
  }
];
const medications = MEDICATIONS;
const icdCodes = ICD_CODES;
const symptoms = SYMPTOMS;
const routeColor = {
  PO: "bg-primary/10 text-primary",
  IV: "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary",
  "PO/IV": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
  Inhaled: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  "Inhaled/NEB": "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  SQ: "bg-warning/15 text-warning-foreground dark:bg-warning/20 dark:text-warning",
  "PO/SQ": "bg-warning/15 text-warning-foreground dark:bg-warning/20 dark:text-warning",
  "IV/SQ": "bg-warning/15 text-warning-foreground dark:bg-warning/20 dark:text-warning",
  "IV/IM": "bg-destructive/10 text-destructive",
  "PO/IV/IM": "bg-destructive/10 text-destructive",
  IM: "bg-destructive/10 text-destructive",
  "PO/IM": "bg-destructive/10 text-destructive",
  "TD/IV": "bg-warning/10 text-warning",
  "IM/IV/IN": "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
  "PO/PR": "bg-success/0.1 text-success"
};
const categoryColorMap = {
  Cardiovascular: "bg-destructive/10 text-destructive",
  Endocrine: "bg-warning/10 text-warning",
  Respiratory: "bg-accent/10 text-accent",
  Gastrointestinal: "bg-success/0.1 text-success",
  Musculoskeletal: "bg-warning/15 text-warning-foreground dark:bg-warning/20 dark:text-warning",
  "Mental Health": "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary",
  Neurological: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
  Infectious: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
  Genitourinary: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  Obstetric: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
  Symptoms: "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300",
  Preventive: "bg-success/0.1 text-success"
};
function ClinicalReference() {
  const [medSearch, setMedSearch] = reactExports.useState("");
  const [icdSearch, setIcdSearch] = reactExports.useState("");
  const [symptomSearch, setSymptomSearch] = reactExports.useState("");
  const filteredMeds = medications.filter((m) => {
    const q = medSearch.toLowerCase();
    return m.name.toLowerCase().includes(q) || m.drugClass.toLowerCase().includes(q) || m.indication.toLowerCase().includes(q);
  });
  const filteredIcd = icdCodes.filter((c) => {
    const q = icdSearch.toLowerCase();
    return c.code.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.category.toLowerCase().includes(q);
  });
  const filteredSymptoms = symptoms.filter((s) => {
    const q = symptomSearch.toLowerCase();
    return s.symptom.toLowerCase().includes(q) || s.causes.some((c) => c.toLowerCase().includes(q)) || s.workup.toLowerCase().includes(q);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "clinical_reference.page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "medications", "data-ocid": "clinical_reference.tab", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "h-9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsTrigger,
        {
          value: "medications",
          "data-ocid": "clinical_reference.medications.tab",
          className: "text-xs px-4",
          children: [
            "Medications (",
            medications.length,
            ")"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsTrigger,
        {
          value: "icd10",
          "data-ocid": "clinical_reference.icd10.tab",
          className: "text-xs px-4",
          children: [
            "ICD-10 Codes (",
            icdCodes.length,
            ")"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsTrigger,
        {
          value: "symptoms",
          "data-ocid": "clinical_reference.symptoms.tab",
          className: "text-xs px-4",
          children: [
            "Symptoms (",
            symptoms.length,
            ")"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "medications", className: "mt-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            "data-ocid": "clinical_reference.medications.search_input",
            placeholder: "Search by name, class, or indication...",
            value: medSearch,
            onChange: (e) => setMedSearch(e.target.value),
            className: "pl-8 h-8 text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "clinical_reference.medications.table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
          "Drug Name",
          "Class",
          "Indication",
          "Dose",
          "Route",
          "Key Notes"
        ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableHead,
          {
            className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-3",
            children: h
          },
          h
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
          filteredMeds.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            TableCell,
            {
              colSpan: 6,
              className: "text-center py-10 text-sm text-muted-foreground",
              "data-ocid": "clinical_reference.medications.empty_state",
              children: "No medications match your search"
            }
          ) }),
          filteredMeds.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TableRow,
            {
              "data-ocid": `clinical_reference.medications.row.${i + 1}`,
              className: "hover:bg-muted/30 even:bg-muted/20 border-l-2 border-l-transparent hover:border-l-accent transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-3 py-2.5 font-semibold text-sm text-foreground", children: m.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-3 py-2.5 text-xs text-muted-foreground", children: m.drugClass }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-3 py-2.5 text-xs text-foreground", children: m.indication }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-3 py-2.5 font-mono text-xs text-foreground", children: m.dose }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `inline-flex items-center px-1.5 py-0.5 rounded text-xs font-semibold ${routeColor[m.route] ?? "bg-gray-100 text-gray-700"}`,
                    children: m.route
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-3 py-2.5 text-xs text-muted-foreground max-w-[220px]", children: m.notes })
              ]
            },
            m.name
          ))
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "icd10", className: "mt-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            "data-ocid": "clinical_reference.icd10.search_input",
            placeholder: "Search by code, description, or category...",
            value: icdSearch,
            onChange: (e) => setIcdSearch(e.target.value),
            className: "pl-8 h-8 text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "clinical_reference.icd10.table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: ["Code", "Description", "Category"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableHead,
          {
            className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-3",
            children: h
          },
          h
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
          filteredIcd.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            TableCell,
            {
              colSpan: 3,
              className: "text-center py-10 text-sm text-muted-foreground",
              "data-ocid": "clinical_reference.icd10.empty_state",
              children: "No ICD-10 codes match your search"
            }
          ) }),
          filteredIcd.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TableRow,
            {
              "data-ocid": `clinical_reference.icd10.row.${i + 1}`,
              className: "hover:bg-muted/30 even:bg-muted/20 border-l-2 border-l-transparent hover:border-l-accent transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-3 py-2.5 font-mono text-sm font-semibold text-foreground", children: c.code }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-3 py-2.5 text-sm text-foreground", children: c.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `inline-flex items-center px-1.5 py-0.5 rounded text-xs font-semibold ${categoryColorMap[c.category] ?? "bg-gray-100 text-gray-700"}`,
                    children: c.category
                  }
                ) })
              ]
            },
            c.code
          ))
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "symptoms", className: "mt-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            "data-ocid": "clinical_reference.symptoms.search_input",
            placeholder: "Search symptoms, causes, or workup...",
            value: symptomSearch,
            onChange: (e) => setSymptomSearch(e.target.value),
            className: "pl-8 h-8 text-sm"
          }
        )
      ] }),
      filteredSymptoms.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "text-center py-10 text-sm text-muted-foreground",
          "data-ocid": "clinical_reference.symptoms.empty_state",
          children: "No symptoms match your search"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: filteredSymptoms.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `clinical_reference.symptoms.card.${i + 1}`,
          className: "bg-card border border-border p-4 hover:bg-muted/20 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: s.symptom }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 grid grid-cols-1 md:grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1", children: "Common Causes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: s.causes.map((cause) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "secondary",
                    className: "text-xs px-1.5 py-0",
                    children: cause
                  },
                  cause
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1", children: "Suggested Workup" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: s.workup })
              ] })
            ] })
          ]
        },
        s.symptom
      )) })
    ] })
  ] }) });
}
export {
  ClinicalReference as default
};
