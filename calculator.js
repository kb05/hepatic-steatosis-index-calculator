"use strict";

const LEVEL_NAME = {
  low: "Baja",
  mid: "Intermedia",
  high: "Alta",
};

const SEX_LABEL = {
  0: "Hombre (0)",
  1: "Mujer (1)",
};

const DM_LABEL = {
  0: "No (0)",
  1: "Glucemia basal alterada (1)",
  2: "Diabetes mellitus (2)",
};

const SCORES = [
  {
    id: "fli",
    name: "FLI",
    full: "Fatty Liver Index",
    digits: 2,
    uses: "Triglicéridos, IMC, GGT y perímetro abdominal",
    bands: [
      {
        level: "low",
        range: "< 30",
        text: "Poca probabilidad de esteatosis",
        match: (v) => v < 30,
      },
      {
        level: "mid",
        range: "30–59",
        text: "Zona intermedia. Valores indeterminados. Requiere otros métodos de evaluación",
        match: (v) => v >= 30 && v < 60,
      },
      {
        level: "high",
        range: "≥ 60",
        text: "Alta probabilidad de esteatosis hepática",
        match: (v) => v >= 60,
      },
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
    uses: "AST, ALT, IMC, sexo y diabetes/GBA",
    bands: [
      {
        level: "low",
        range: "< 30",
        text: "Baja probabilidad de esteatosis hepática",
        match: (v) => v < 30,
      },
      {
        level: "mid",
        range: "30–36",
        text: "Zona intermedia. Valores indeterminados. Requiere otros métodos de evaluación",
        match: (v) => v >= 30 && v <= 36,
      },
      {
        level: "high",
        range: "> 36",
        text: "Alta probabilidad de esteatosis hepática",
        match: (v) => v > 36,
      },
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
    uses: "Edad, plaquetas, AST y ALT",
    bands: [
      {
        level: "low",
        range: "< 1,45",
        text: "Bajo riesgo de fibrosis F0-F1",
        match: (v) => v < 1.45,
      },
      {
        level: "mid",
        range: "1,45–3,25",
        text: "Zona intermedia. Probable fibrosis. Requiere otro método de evaluación",
        match: (v) => v >= 1.45 && v <= 3.25,
      },
      {
        level: "high",
        range: "> 3,25",
        text: "Fibrosis significativa F3-F4",
        match: (v) => v > 3.25,
      },
    ],
    compute(s) {
      if (invalid(s.age, s.ast, s.alt, s.platelets) || s.alt <= 0 || s.platelets === 0) {
        return null;
      }
      const value = (s.age * s.ast) / (Math.sqrt(s.alt) * s.platelets);
      return Number.isFinite(value) ? value : null;
    },
  },
  {
    id: "apri",
    name: "APRI",
    full: "AST to Platelet Ratio Index",
    digits: 2,
    uses: "AST, plaquetas y ULN",
    bands: [
      {
        level: "low",
        range: "< 0,5",
        text: "Ausencia de fibrosis significativa",
        match: (v) => v < 0.5,
      },
      {
        level: "mid",
        range: "0,5–1,5",
        text: "Zona intermedia. Probable fibrosis. Requiere otros métodos de evaluación",
        match: (v) => v >= 0.5 && v <= 1.5,
      },
      {
        level: "high",
        range: "> 1,5",
        text: "Fibrosis significativa",
        match: (v) => v > 1.5,
      },
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
    uses: "Edad, IMC, diabetes/GBA, AST, ALT, plaquetas y albúmina",
    bands: [
      {
        level: "low",
        range: "< −1,455",
        text: "Riesgo bajo de fibrosis F0-F1",
        match: (v) => v < -1.455,
      },
      {
        level: "mid",
        range: "−1,455–0,675",
        text: "Zona intermedia. Probable fibrosis. Requiere otro método de evaluación",
        match: (v) => v >= -1.455 && v <= 0.675,
      },
      {
        level: "high",
        range: "> 0,675",
        text: "Alto riesgo de fibrosis F3-F4",
        match: (v) => v > 0.675,
      },
    ],
    compute(s) {
      if (invalid(s.age, s.bmi, s.dm, s.ast, s.alt, s.platelets, s.albumin) || s.alt === 0) {
        return null;
      }
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

function invalid(...values) {
  return values.some((value) => value === null || !Number.isFinite(value));
}

function field(id) {
  return document.getElementById(id);
}

function readNumber(id) {
  const raw = field(id).value.trim();
  if (raw === "") return null;
  const value = Number(raw);
  return Number.isFinite(value) ? value : null;
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
  return value.toLocaleString("es-ES", {
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

function cardHtml(score, state) {
  const value = score.compute(state);
  const band = activeBand(score, value);
  const level = band ? band.level : "empty";
  const shown = value === null ? "—" : formatNumber(value, score.digits);
  const data = value === null ? "" : String(value);
  const badge = band
    ? `<span class="badge ${band.level}">${esc(LEVEL_NAME[band.level])}</span>`
    : `<span class="badge empty">Sin resultado</span>`;
  const reading = band ? esc(band.text) : "No calculable con estos valores";
  const bands = score.bands
    .map((item) => {
      const on = band === item ? " is-active" : "";
      return `<li class="band ${item.level}${on}"><span class="range">${esc(item.range)}</span><span>${esc(item.text)}</span></li>`;
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
      <p class="uses">${esc(score.uses)}</p>
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
  flag.textContent = sample ? "Valores de ejemplo de la hoja" : "Valores modificados";
  flag.classList.toggle("is-custom", !sample);
}

function inputRows(state) {
  return [
    ["Edad", formatFlexible(state.age), "años"],
    ["Sexo", SEX_LABEL[state.sex] || "—", ""],
    ["Talla", formatFlexible(state.height), "cm"],
    ["Peso", formatFlexible(state.weight), "kg"],
    ["IMC", state.bmi === null ? "—" : formatNumber(state.bmi, 2), ""],
    ["Perímetro abdominal", formatFlexible(state.waist), "cm"],
    ["Diabetes / GBA", DM_LABEL[state.dm] || "—", ""],
    ["AST-GOT", formatFlexible(state.ast), "U/L"],
    ["ALT-GPT", formatFlexible(state.alt), "U/L"],
    ["GGT", formatFlexible(state.ggt), "U/L"],
    ["Plaquetas", formatFlexible(state.platelets), "×10⁹/L"],
    ["Albúmina", formatFlexible(state.albumin), ""],
    ["Triglicéridos", formatFlexible(state.tg), "mg/dL"],
    ["ULN de AST", formatFlexible(state.uln), "U/L"],
  ];
}

function buildReport(state) {
  const when = new Date().toLocaleString("es-ES", {
    dateStyle: "long",
    timeStyle: "short",
  });
  const rows = inputRows(state)
    .map(([label, value, unit]) => {
      return `<tr><th>${esc(label)}</th><td>${esc(value)}${unit ? ` <span>${esc(unit)}</span>` : ""}</td></tr>`;
    })
    .join("");
  const cards = SCORES.map((score) => {
    const value = score.compute(state);
    const band = activeBand(score, value);
    const shown = value === null ? "—" : formatNumber(value, score.digits);
    const reading = band ? band.text : "No calculable con estos valores";
    const bands = score.bands
      .map((item) => {
        const mark = band === item ? " active" : "";
        return `<li class="${item.level}${mark}"><strong>${esc(item.range)}</strong> ${esc(item.text)}</li>`;
      })
      .join("");
    return `
      <section class="score ${band ? band.level : "empty"}">
        <header>
          <h2>${esc(score.name)} <small>${esc(score.full)}</small></h2>
          <p class="value">${esc(shown)}</p>
        </header>
        <p class="reading">${esc(reading)}</p>
        <p class="uses">${esc(score.uses)}</p>
        <ul>${bands}</ul>
      </section>`;
  }).join("");

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Informe de esteatosis</title>
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
    @media print { body { background: white; } }
  </style>
</head>
<body>
  <main>
    <p class="eyebrow">Informe estático · esteatosis4</p>
    <h1>Esteatosis y fibrosis hepática</h1>
    <p class="meta">Generado el ${esc(when)}. Archivo autónomo, sin servidor.</p>
    <h3>Variables</h3>
    <table>${rows}</table>
    <h3>Resultados</h3>
    ${cards}
    <footer>
      <p>Calculado con las fórmulas de la hoja esteatosis4. Herramienta de apoyo. Complementa la valoración clínica.</p>
    </footer>
  </main>
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

function downloadReport() {
  const blob = new Blob([buildReport(readState())], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `informe-esteatosis-${new Date().toISOString().slice(0, 10)}.html`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function resetSample() {
  document.querySelectorAll("[data-sample]").forEach((el) => {
    el.value = el.dataset.sample;
  });
  refresh();
}

field("calculadora-form").addEventListener("submit", (event) => event.preventDefault());
field("calculadora-form").addEventListener("input", refresh);
field("btn-reset").addEventListener("click", resetSample);
field("btn-print").addEventListener("click", () => {
  if (field("panel-static").hidden) window.print();
  else field("report-frame").contentWindow.print();
});
field("btn-download").addEventListener("click", downloadReport);
field("tab-calc").addEventListener("click", () => setMode("calc"));
field("tab-static").addEventListener("click", () => setMode("static"));
refresh();
