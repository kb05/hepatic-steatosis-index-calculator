"use strict";

const I18N = {
  es: {
    docTitle: "Calculadora de esteatosis hepática",
    metaDescription: "Calculadora de FLI, HSI, FIB-4, APRI y NFS.",
    languageLabel: "Idioma",
    skip: "Ir a la calculadora",
    eyebrow: "Esteatosis hepática",
    heading: "Calculadora de índices",
    lede: "Calcula FLI, HSI, FIB-4, APRI y NFS.",
    tabsLabel: "Modo de la aplicación",
    tabCalc: "Calculadora",
    tabStatic: "Informe estático",
    variables: "Variables",
    sample: "Valores de ejemplo",
    modified: "Valores modificados",
    anthropometry: "Antropometría",
    age: "Edad",
    years: "años",
    sex: "Sexo",
    sexMale: "Hombre",
    sexFemale: "Mujer",
    height: "Talla",
    weight: "Peso",
    bmiLabel: "IMC",
    bmiHint: "10.000 × peso / talla²",
    waist: "Perímetro abdominal",
    diabetes: "Diabetes mellitus / GBA",
    dmNo: "No",
    dmIfg: "Glucemia basal alterada",
    dmYes: "Diabetes mellitus",
    dmHint: "HSI suma 2 × este código y NFS suma 1,13 × este código.",
    lab: "Laboratorio",
    platelets: "Plaquetas",
    albumin: "Albúmina",
    albuminHint: "El NFS resta 0,66 × este valor. El ejemplo es 35.",
    triglycerides: "Triglicéridos",
    uln: "ULN de AST",
    ulnHint: "El APRI divide el AST entre 41. El valor 35 es un ejemplo de límite del laboratorio.",
    reset: "Restablecer ejemplo",
    printReport: "Imprimir informe",
    results: "Resultados",
    staticTitle: "Informe estático",
    staticLead: "Vista previa del informe. Imprimir informe abre la impresión para guardarlo como PDF.",
    previewTitle: "Vista previa del informe estático",
    referenceSummary: "Fórmulas y escala de fibrosis",
    metavir: "Niveles de fibrosis (METAVIR)",
    f0: "No fibrosis",
    f1: "Fibrosis portal sin septos",
    f2: "Fibrosis portal con pocos septos",
    f3: "Numerosos septos sin cirrosis",
    f4: "Cirrosis",
    fliFormula1: "FLI = [e^y / (1 + e^y)] × 100",
    fliFormula2: "y = 0,953 × ln(triglicéridos) + 0,139 × IMC + 0,718 × ln(GGT) + 0,053 × perímetro abdominal − 15,745",
    hsiFormula: "HSI = 8 × (ALT / AST) + IMC + 2 × sexo + 2 × código de diabetes/GBA",
    fib4Formula: "FIB-4 = (edad × AST) / (plaquetas × √ALT)",
    apriFormula: "APRI = (AST / ULN) × 100 / plaquetas",
    nfsFormula: "NFS = −1,675 + 0,037 × edad + 0,094 × IMC + 1,13 × código de diabetes/GBA + 0,99 × (AST / ALT) − 0,013 × plaquetas − 0,66 × albúmina",
    footnote: "GBA: glucemia basal alterada. ULN: límite superior de la normalidad de AST del laboratorio. TyG, TyG-IMC, TyG-CC y LAP no entran en el cálculo porque no se recoge la glucosa en ayunas.",
    footer1: "Los resultados se calculan en este navegador.",
    footer2: "Herramienta de apoyo. Complementa la valoración clínica.",
    levelLow: "Baja",
    levelMid: "Intermedia",
    levelHigh: "Alta",
    noResult: "Sin resultado",
    uncalculable: "No calculable con estos valores",
    fliUses: "Triglicéridos, IMC, GGT y perímetro abdominal",
    fliLow: "Poca probabilidad de esteatosis",
    fliMid: "Zona intermedia. Valores indeterminados. Requiere otros métodos de evaluación",
    fliHigh: "Alta probabilidad de esteatosis hepática",
    fliLowRange: "< 30",
    fliMidRange: "30–59",
    fliHighRange: "≥ 60",
    hsiUses: "AST, ALT, IMC, sexo y diabetes/GBA",
    hsiLow: "Baja probabilidad de esteatosis hepática",
    hsiMid: "Zona intermedia. Valores indeterminados. Requiere otros métodos de evaluación",
    hsiHigh: "Alta probabilidad de esteatosis hepática",
    hsiLowRange: "< 30",
    hsiMidRange: "30–36",
    hsiHighRange: "> 36",
    fib4Uses: "Edad, plaquetas, AST y ALT",
    fib4Low: "Bajo riesgo de fibrosis F0-F1",
    fib4Mid: "Zona intermedia. Probable fibrosis. Requiere otro método de evaluación",
    fib4High: "Fibrosis significativa F3-F4",
    fib4LowRange: "< 1,45",
    fib4MidRange: "1,45–3,25",
    fib4HighRange: "> 3,25",
    apriUses: "AST, plaquetas y ULN",
    apriLow: "Ausencia de fibrosis significativa",
    apriMid: "Zona intermedia. Probable fibrosis. Requiere otros métodos de evaluación",
    apriHigh: "Fibrosis significativa",
    apriLowRange: "< 0,5",
    apriMidRange: "0,5–1,5",
    apriHighRange: "> 1,5",
    nfsUses: "Edad, IMC, diabetes/GBA, AST, ALT, plaquetas y albúmina",
    nfsLow: "Riesgo bajo de fibrosis F0-F1",
    nfsMid: "Zona intermedia. Probable fibrosis. Requiere otro método de evaluación",
    nfsHigh: "Alto riesgo de fibrosis F3-F4",
    nfsLowRange: "< −1,455",
    nfsMidRange: "−1,455–0,675",
    nfsHighRange: "> 0,675",
    diabetesShort: "Diabetes / GBA",
    reportEyebrow: "Informe estático",
    reportTitle: "Esteatosis y fibrosis hepática",
    reportMeta: "Generado el {date}. Archivo autónomo.",
    reportFooter: "Herramienta de apoyo. Complementa la valoración clínica.",
    reportDocTitle: "Informe de esteatosis",
  },
  en: {
    docTitle: "Hepatic steatosis calculator",
    metaDescription: "Calculator for FLI, HSI, FIB-4, APRI and NFS.",
    languageLabel: "Language",
    skip: "Skip to the calculator",
    eyebrow: "Hepatic steatosis",
    heading: "Index calculator",
    lede: "Calculates FLI, HSI, FIB-4, APRI and NFS.",
    tabsLabel: "Application mode",
    tabCalc: "Calculator",
    tabStatic: "Static report",
    variables: "Variables",
    sample: "Sample values",
    modified: "Modified values",
    anthropometry: "Anthropometry",
    age: "Age",
    years: "years",
    sex: "Sex",
    sexMale: "Male",
    sexFemale: "Female",
    height: "Height",
    weight: "Weight",
    bmiLabel: "BMI",
    bmiHint: "10,000 × weight / height²",
    waist: "Waist circumference",
    diabetes: "Diabetes mellitus / IFG",
    dmNo: "No",
    dmIfg: "Impaired fasting glucose",
    dmYes: "Diabetes mellitus",
    dmHint: "HSI adds 2 × this code and NFS adds 1.13 × this code.",
    lab: "Laboratory",
    platelets: "Platelets",
    albumin: "Albumin",
    albuminHint: "NFS subtracts 0.66 × this value. The example is 35.",
    triglycerides: "Triglycerides",
    uln: "AST ULN",
    ulnHint: "APRI divides AST by 41. The value 35 is an example of a laboratory limit.",
    reset: "Restore example",
    printReport: "Print report",
    results: "Results",
    staticTitle: "Static report",
    staticLead: "Preview of the report. Print report opens printing so you can save it as a PDF.",
    previewTitle: "Static report preview",
    referenceSummary: "Formulas and fibrosis scale",
    metavir: "Fibrosis stages (METAVIR)",
    f0: "No fibrosis",
    f1: "Portal fibrosis without septa",
    f2: "Portal fibrosis with few septa",
    f3: "Numerous septa without cirrhosis",
    f4: "Cirrhosis",
    fliFormula1: "FLI = [e^y / (1 + e^y)] × 100",
    fliFormula2: "y = 0.953 × ln(triglycerides) + 0.139 × BMI + 0.718 × ln(GGT) + 0.053 × waist circumference − 15.745",
    hsiFormula: "HSI = 8 × (ALT / AST) + BMI + 2 × sex + 2 × diabetes/IFG code",
    fib4Formula: "FIB-4 = (age × AST) / (platelets × √ALT)",
    apriFormula: "APRI = (AST / ULN) × 100 / platelets",
    nfsFormula: "NFS = −1.675 + 0.037 × age + 0.094 × BMI + 1.13 × diabetes/IFG code + 0.99 × (AST / ALT) − 0.013 × platelets − 0.66 × albumin",
    footnote: "IFG: impaired fasting glucose. ULN: upper limit of normal for AST at the laboratory. TyG, TyG-BMI, TyG-WC and LAP are not calculated because fasting glucose is not collected.",
    footer1: "Results are calculated in this browser.",
    footer2: "Decision-support tool. It complements clinical judgment.",
    levelLow: "Low",
    levelMid: "Intermediate",
    levelHigh: "High",
    noResult: "No result",
    uncalculable: "Cannot be calculated with these values",
    fliUses: "Triglycerides, BMI, GGT and waist circumference",
    fliLow: "Low probability of steatosis",
    fliMid: "Intermediate zone. Indeterminate values. Other assessment methods are required",
    fliHigh: "High probability of hepatic steatosis",
    fliLowRange: "< 30",
    fliMidRange: "30–59",
    fliHighRange: "≥ 60",
    hsiUses: "AST, ALT, BMI, sex and diabetes/IFG",
    hsiLow: "Low probability of hepatic steatosis",
    hsiMid: "Intermediate zone. Indeterminate values. Other assessment methods are required",
    hsiHigh: "High probability of hepatic steatosis",
    hsiLowRange: "< 30",
    hsiMidRange: "30–36",
    hsiHighRange: "> 36",
    fib4Uses: "Age, platelets, AST and ALT",
    fib4Low: "Low risk of fibrosis F0–F1",
    fib4Mid: "Intermediate zone. Probable fibrosis. Another assessment method is required",
    fib4High: "Significant fibrosis F3–F4",
    fib4LowRange: "< 1.45",
    fib4MidRange: "1.45–3.25",
    fib4HighRange: "> 3.25",
    apriUses: "AST, platelets and ULN",
    apriLow: "No significant fibrosis",
    apriMid: "Intermediate zone. Probable fibrosis. Other assessment methods are required",
    apriHigh: "Significant fibrosis",
    apriLowRange: "< 0.5",
    apriMidRange: "0.5–1.5",
    apriHighRange: "> 1.5",
    nfsUses: "Age, BMI, diabetes/IFG, AST, ALT, platelets and albumin",
    nfsLow: "Low risk of fibrosis F0–F1",
    nfsMid: "Intermediate zone. Probable fibrosis. Another assessment method is required",
    nfsHigh: "High risk of fibrosis F3–F4",
    nfsLowRange: "< −1.455",
    nfsMidRange: "−1.455–0.675",
    nfsHighRange: "> 0.675",
    diabetesShort: "Diabetes / IFG",
    reportEyebrow: "Static report",
    reportTitle: "Hepatic steatosis and fibrosis",
    reportMeta: "Generated on {date}. Standalone file.",
    reportFooter: "Decision-support tool. It complements clinical judgment.",
    reportDocTitle: "Steatosis report",
  },
};

const LEVEL_KEY = { low: "levelLow", mid: "levelMid", high: "levelHigh" };
const LOCALE = { es: "es-ES", en: "en-US" };

const SCORES = [
  {
    id: "fli",
    name: "FLI",
    full: "Fatty Liver Index",
    digits: 2,
    uses: "fliUses",
    bands: [
      { level: "low", range: "fliLowRange", text: "fliLow", match: (v) => v < 30 },
      { level: "mid", range: "fliMidRange", text: "fliMid", match: (v) => v >= 30 && v < 60 },
      { level: "high", range: "fliHighRange", text: "fliHigh", match: (v) => v >= 60 },
    ],
    compute(s) {
      if (invalid(s.tg, s.bmi, s.ggt, s.waist) || s.tg <= 0 || s.ggt <= 0) return null;
      const y =
        0.953 * Math.log(s.tg) +
        0.139 * s.bmi +
        0.718 * Math.log(s.ggt) +
        0.053 * s.waist -
        15.745;
      if (y > 700) return 100;
      if (y < -700) return 0;
      const e = Math.exp(y);
      const value = (e / (1 + e)) * 100;
      return Number.isFinite(value) ? value : null;
    },
  },
  {
    id: "hsi",
    name: "HSI",
    full: "Hepatic Steatosis Index",
    digits: 2,
    uses: "hsiUses",
    bands: [
      { level: "low", range: "hsiLowRange", text: "hsiLow", match: (v) => v < 30 },
      { level: "mid", range: "hsiMidRange", text: "hsiMid", match: (v) => v >= 30 && v <= 36 },
      { level: "high", range: "hsiHighRange", text: "hsiHigh", match: (v) => v > 36 },
    ],
    compute(s) {
      if (invalid(s.alt, s.ast, s.bmi, s.sex, s.dm) || s.ast === 0) return null;
      const value = 8 * (s.alt / s.ast) + s.bmi + s.sex * 2 + s.dm * 2;
      return Number.isFinite(value) ? value : null;
    },
  },
  {
    id: "fib4",
    name: "FIB-4",
    full: "Fibrosis-4",
    digits: 2,
    uses: "fib4Uses",
    bands: [
      { level: "low", range: "fib4LowRange", text: "fib4Low", match: (v) => v < 1.45 },
      { level: "mid", range: "fib4MidRange", text: "fib4Mid", match: (v) => v >= 1.45 && v <= 3.25 },
      { level: "high", range: "fib4HighRange", text: "fib4High", match: (v) => v > 3.25 },
    ],
    compute(s) {
      if (invalid(s.age, s.ast, s.alt, s.platelets) || s.alt <= 0 || s.platelets === 0) return null;
      const value = (s.age * s.ast) / (Math.sqrt(s.alt) * s.platelets);
      return Number.isFinite(value) ? value : null;
    },
  },
  {
    id: "apri",
    name: "APRI",
    full: "AST to Platelet Ratio Index",
    digits: 2,
    uses: "apriUses",
    bands: [
      { level: "low", range: "apriLowRange", text: "apriLow", match: (v) => v < 0.5 },
      { level: "mid", range: "apriMidRange", text: "apriMid", match: (v) => v >= 0.5 && v <= 1.5 },
      { level: "high", range: "apriHighRange", text: "apriHigh", match: (v) => v > 1.5 },
    ],
    compute(s) {
      if (invalid(s.ast, s.uln, s.platelets) || s.uln === 0 || s.platelets === 0) return null;
      const value = ((s.ast / s.uln) * 100) / s.platelets;
      return Number.isFinite(value) ? value : null;
    },
  },
  {
    id: "nfs",
    name: "NFS",
    full: "NAFLD Fibrosis Score",
    digits: 3,
    uses: "nfsUses",
    bands: [
      { level: "low", range: "nfsLowRange", text: "nfsLow", match: (v) => v < -1.455 },
      { level: "mid", range: "nfsMidRange", text: "nfsMid", match: (v) => v >= -1.455 && v <= 0.675 },
      { level: "high", range: "nfsHighRange", text: "nfsHigh", match: (v) => v > 0.675 },
    ],
    compute(s) {
      if (invalid(s.age, s.bmi, s.dm, s.ast, s.alt, s.platelets, s.albumin) || s.alt === 0) return null;
      const value =
        -1.675 +
        0.037 * s.age +
        0.094 * s.bmi +
        1.13 * s.dm +
        0.99 * (s.ast / s.alt) -
        0.013 * s.platelets -
        0.66 * s.albumin;
      return Number.isFinite(value) ? value : null;
    },
  },
];

let lang = "es";

function t(key) {
  return I18N[lang][key] ?? I18N.es[key] ?? key;
}

function invalid(...values) {
  return values.some((value) => value === null || !Number.isFinite(value));
}

function field(id) {
  return document.getElementById(id);
}

function readNumber(id) {
  const el = field(id);
  const raw = el.value.trim();
  if (raw === "") return null;
  const value = Number(raw);
  if (!Number.isFinite(value)) return null;
  if (el.min === "0" && value < 0) return null;
  return value;
}

function readState() {
  const height = readNumber("talla");
  const weight = readNumber("peso");
  const bmi =
    height !== null && weight !== null && height > 0
      ? (10000 * weight) / (height * height)
      : null;
  return {
    age: readNumber("edad"),
    height,
    weight,
    bmi,
    waist: readNumber("perimetro"),
    sex: readNumber("sexo"),
    dm: readNumber("diabetes"),
    ast: readNumber("ast"),
    alt: readNumber("alt"),
    ggt: readNumber("ggt"),
    platelets: readNumber("plaquetas"),
    albumin: readNumber("albumina"),
    tg: readNumber("trigliceridos"),
    uln: readNumber("uln"),
  };
}

function formatNumber(value, digits) {
  return value.toLocaleString(LOCALE[lang], {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
    useGrouping: false,
  });
}

function formatFlexible(value) {
  if (value === null || !Number.isFinite(value)) return "—";
  const digits = Number.isInteger(value) ? 0 : 2;
  return formatNumber(value, digits);
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
  });
}

function usingSample() {
  return [...document.querySelectorAll("[data-sample]")].every((el) => el.value === el.dataset.sample);
}

function activeBand(score, value) {
  if (value === null) return null;
  return score.bands.find((band) => band.match(value)) ?? null;
}

function sexLabel(value) {
  if (value === 0) return t("sexMale");
  if (value === 1) return t("sexFemale");
  return "—";
}

function dmLabel(value) {
  if (value === 0) return t("dmNo");
  if (value === 1) return t("dmIfg");
  if (value === 2) return t("dmYes");
  return "—";
}

function cardHtml(score, state) {
  const value = score.compute(state);
  const band = activeBand(score, value);
  const level = band ? band.level : "empty";
  const shown = value === null ? "—" : formatNumber(value, score.digits);
  const data = value === null ? "" : String(value);
  const badge = band
    ? `<span class="badge ${band.level}">${esc(t(LEVEL_KEY[band.level]))}</span>`
    : `<span class="badge empty">${esc(t("noResult"))}</span>`;
  const reading = band ? esc(t(band.text)) : esc(t("uncalculable"));
  const bands = score.bands
    .map((item) => {
      const on = band === item ? " is-active" : "";
      return `<li class="band ${item.level}${on}"><span class="range">${esc(t(item.range))}</span><span>${esc(t(item.text))}</span></li>`;
    })
    .join("");

  return `
    <article class="card ${level}" id="card-${score.id}">
      <header class="card-head">
        <div>
          <h3>${esc(score.name)}</h3>
          <p class="full">${esc(score.full)}</p>
        </div>
        ${badge}
      </header>
      <p class="score-value" id="score-${score.id}" data-value="${esc(data)}">${shown}</p>
      <p class="reading" id="read-${score.id}">${reading}</p>
      <p class="uses">${esc(t(score.uses))}</p>
      <ul class="bands">${bands}</ul>
    </article>`;
}

function renderResults(state) {
  field("results").innerHTML = SCORES.map((score) => cardHtml(score, state)).join("");
}

function renderBmi(state) {
  field("bmi").textContent = state.bmi === null ? "—" : formatNumber(state.bmi, 2);
}

function renderFlag() {
  const flag = field("sample-flag");
  const sample = usingSample();
  flag.textContent = sample ? t("sample") : t("modified");
  flag.classList.toggle("is-custom", !sample);
}

function inputRows(state) {
  return [
    [t("age"), formatFlexible(state.age), t("years")],
    [t("sex"), sexLabel(state.sex), ""],
    [t("height"), formatFlexible(state.height), "cm"],
    [t("weight"), formatFlexible(state.weight), "kg"],
    [t("bmiLabel"), state.bmi === null ? "—" : formatNumber(state.bmi, 2), ""],
    [t("waist"), formatFlexible(state.waist), "cm"],
    [t("diabetesShort"), dmLabel(state.dm), ""],
    ["AST-GOT", formatFlexible(state.ast), "U/L"],
    ["ALT-GPT", formatFlexible(state.alt), "U/L"],
    ["GGT", formatFlexible(state.ggt), "U/L"],
    [t("platelets"), formatFlexible(state.platelets), "×10⁹/L"],
    [t("albumin"), formatFlexible(state.albumin), ""],
    [t("triglycerides"), formatFlexible(state.tg), "mg/dL"],
    [t("uln"), formatFlexible(state.uln), "U/L"],
  ];
}

function tableRows(state) {
  return inputRows(state)
    .map(([label, value, unit]) => {
      return `<tr><th>${esc(label)}</th><td>${esc(value)}${unit ? ` <span>${esc(unit)}</span>` : ""}</td></tr>`;
    })
    .join("");
}

function reportCards(state) {
  return SCORES.map((score) => {
    const value = score.compute(state);
    const band = activeBand(score, value);
    const shown = value === null ? "—" : formatNumber(value, score.digits);
    const reading = band ? t(band.text) : t("uncalculable");
    const bands = score.bands
      .map((item) => {
        const mark = band === item ? " active" : "";
        return `<li class="${item.level}${mark}"><strong>${esc(t(item.range))}</strong> ${esc(t(item.text))}</li>`;
      })
      .join("");
    return `
      <section class="score ${band ? band.level : "empty"}">
        <header>
          <h2>${esc(score.name)} <small>${esc(score.full)}</small></h2>
          <p class="value">${esc(shown)}</p>
        </header>
        <p class="reading">${esc(reading)}</p>
        <p class="uses">${esc(t(score.uses))}</p>
        <ul>${bands}</ul>
      </section>`;
  }).join("");
}

function buildReport(state) {
  const when = new Date().toLocaleString(LOCALE[lang], {
    dateStyle: "long",
    timeStyle: "short",
  });
  return reportDocument(reportBody(when, tableRows(state), reportCards(state)));
}

function reportBody(when, rows, cards) {
  return `<main>
    <p class="eyebrow">${esc(t("reportEyebrow"))}</p>
    <h1>${esc(t("reportTitle"))}</h1>
    <p class="meta">${esc(t("reportMeta").replace("{date}", when))}</p>
    <h3>${esc(t("variables"))}</h3>
    <table>${rows}</table>
    <h3>${esc(t("results"))}</h3>
    ${cards}
    <footer>
      <p>${esc(t("reportFooter"))}</p>
    </footer>
  </main>`;
}

function reportDocument(body) {
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(t("reportDocTitle"))}</title>
  <style>
    :root { color-scheme: light; }
    body { margin: 0; background: #f4efe6; color: #1c1915; font-family: "Segoe UI", "Liberation Sans", sans-serif; }
    main { max-width: 760px; margin: 0 auto; padding: 2rem 1.25rem 2.5rem; }
    h1 { font-family: Georgia, "Liberation Serif", serif; font-size: 2rem; margin: 0.2rem 0; letter-spacing: -0.03em; }
    .eyebrow, .meta, .uses, footer { color: #5e564c; }
    .eyebrow { letter-spacing: 0.12em; text-transform: uppercase; font-size: 0.75rem; margin: 0; }
    table { width: 100%; border-collapse: collapse; background: white; border-radius: 12px; overflow: hidden; }
    th, td { text-align: left; padding: 0.45rem 0.7rem; border-bottom: 1px solid #eee4d6; vertical-align: top; }
    th { width: 46%; font-weight: 650; }
    td span { color: #5e564c; }
    .score { background: white; border-radius: 12px; padding: 0.85rem 1rem 1rem; margin: 0.75rem 0; border-left: 5px solid #d9d0c2; }
    .score.low { border-left-color: #1d6b4f; }
    .score.mid { border-left-color: #c48a12; }
    .score.high { border-left-color: #9f2d2d; }
    .score header { display: flex; justify-content: space-between; gap: 1rem; align-items: baseline; }
    h2 { font-family: Georgia, "Liberation Serif", serif; font-size: 1.25rem; margin: 0; }
    h2 small { display: block; font-family: "Segoe UI", sans-serif; font-size: 0.8rem; color: #5e564c; font-weight: 500; }
    .value { margin: 0; font-family: Georgia, serif; font-size: 2rem; }
    .reading { font-weight: 700; margin: 0.35rem 0 0.15rem; }
    .uses { margin: 0 0 0.4rem; font-size: 0.88rem; }
    ul { margin: 0; padding-left: 1.1rem; }
    li { margin: 0.2rem 0; color: #5e564c; }
    li.active { color: #1c1915; font-weight: 650; }
    h3 { font-family: Georgia, serif; margin: 1.4rem 0 0.5rem; }
    footer { font-size: 0.88rem; }
    @page { size: A4; margin: 14mm; }
    @media print {
      body { background: white; }
      main { max-width: none; padding: 0; }
      table, .score, h3 { break-inside: avoid; }
    }
  </style>
</head>
<body>
  ${body}
</body>
</html>`;
}

function refresh() {
  const state = readState();
  renderBmi(state);
  renderFlag();
  renderResults(state);
  if (!field("panel-static").hidden) {
    field("report-frame").srcdoc = buildReport(state);
  }
}

function applyLanguage() {
  document.documentElement.lang = lang;
  document.title = t("docTitle");
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", t("metaDescription"));
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.title = t(el.dataset.i18nTitle);
  });
  field("lang-es").setAttribute("aria-pressed", String(lang === "es"));
  field("lang-en").setAttribute("aria-pressed", String(lang === "en"));
  refresh();
}

function setLanguage(next) {
  lang = next === "en" ? "en" : "es";
  try {
    localStorage.setItem("esteatosis-lang", lang);
  } catch {
    /* Storage can be unavailable; the choice still applies to this page. */
  }
  applyLanguage();
}

function storedLanguage() {
  try {
    return localStorage.getItem("esteatosis-lang");
  } catch {
    return null;
  }
}

function setMode(mode) {
  const calculator = mode === "calc";
  field("tab-calc").setAttribute("aria-selected", String(calculator));
  field("tab-static").setAttribute("aria-selected", String(!calculator));
  field("panel-results").hidden = !calculator;
  field("panel-static").hidden = calculator;
  if (!calculator) {
    field("report-frame").srcdoc = buildReport(readState());
  }
}

function preparePrint() {
  const state = readState();
  const when = new Date().toLocaleString(LOCALE[lang], {
    dateStyle: "long",
    timeStyle: "short",
  });
  field("print-root").innerHTML = reportBody(when, tableRows(state), reportCards(state));
}

function printReport() {
  preparePrint();
  window.print();
}

function resetSample() {
  document.querySelectorAll("[data-sample]").forEach((el) => {
    el.value = el.dataset.sample;
  });
  refresh();
}

field("calculadora-form").addEventListener("submit", (event) => event.preventDefault());
field("calculadora-form").addEventListener("input", (event) => {
  const input = event.target;
  if (input instanceof HTMLInputElement && input.min === "0" && input.value.includes("-")) {
    input.value = input.value.replace(/-/g, "");
  }
  refresh();
});
field("btn-reset").addEventListener("click", resetSample);
document.querySelectorAll("[data-print-report]").forEach((button) => {
  button.addEventListener("click", printReport);
});
window.addEventListener("beforeprint", preparePrint);
field("tab-calc").addEventListener("click", () => setMode("calc"));
field("tab-static").addEventListener("click", () => setMode("static"));
field("lang-es").addEventListener("click", () => setLanguage("es"));
field("lang-en").addEventListener("click", () => setLanguage("en"));
setLanguage(storedLanguage() === "en" ? "en" : "es");
