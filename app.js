// app.js — общая логика для главной и страницы варианта

const STORAGE_KEY = "englishTestsResults";

// ---------- LocalStorage ----------
function loadResults() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveResult(variantId, score, total) {
  const all = loadResults();
  all[variantId] = {
    score,
    total,
    date: new Date().toISOString()
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

// ---------- Главная страница ----------
function renderMain() {
  const list = document.getElementById("variants-list");
  if (!list) return;
  const results = loadResults();
  list.innerHTML = "";

  for (let i = 1; i <= 20; i++) {
    const a = document.createElement("a");
    a.href = `variant.html?v=${i}`;
    a.className = "variant-card";

    const done = results[i];
    if (done) {
      a.classList.add("done");
    }

    a.innerHTML = `
      <div class="num">Вариант ${i}</div>
      <div class="status">${
        done ? `${done.score}/${done.total} ✓` : "не пройден"
      }</div>
    `;
    list.appendChild(a);
  }

  const resetBtn = document.getElementById("reset-btn");
  if (resetBtn) {
    resetBtn.onclick = () => {
      if (confirm("Сбросить результаты всех вариантов?")) {
        localStorage.removeItem(STORAGE_KEY);
        renderMain();
      }
    };
  }
}

// ---------- Страница варианта ----------
let currentVariant = null;
let userAnswers = { task1: {}, task2: {} };
let checked = false;

function getVariantId() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("v"), 10);
  return isNaN(id) ? 1 : id;
}

function initVariant() {
  const container = document.getElementById("task-container");
  if (!container) return;

  const id = getVariantId();
  currentVariant = VARIANTS[id];

  document.getElementById("variant-title").textContent = `Вариант ${id}`;

  renderAllTasks();

  document.getElementById("check-btn").onclick = checkAnswers;
  document.getElementById("retry-btn").onclick = () => location.reload();
}

function renderAllTasks() {
  const container = document.getElementById("task-container");
  const t1 = currentVariant.task1;
  const t2 = currentVariant.task2;

  let html = "";

  // ---- Task 1 ----
  html += `<h2 class="task-title">${t1.title}</h2>
           <p class="task-instruction">${t1.instruction}</p>`;

  t1.words.forEach((item, idx) => {
    const saved = userAnswers.task1[idx] || "";
    html += `<div class="word-row" data-word-idx="${idx}">
      <span class="word">${idx + 1}. ${item.word}</span>
      <select data-task="1" data-idx="${idx}">
        <option value="">— выберите определение —</option>
        ${item.options.map(opt => {
          const letter = opt.charAt(0);
          return `<option value="${letter}" ${saved === letter ? "selected" : ""}>${opt}</option>`;
        }).join("")}
      </select>
      <div class="word-feedback hidden"></div>
    </div>`;
  });

  // ---- Task 2 ----
  html += `<h2 class="task-title" style="margin-top:32px">${t2.title}</h2>
           <p class="task-instruction">${t2.instruction}</p>`;

  t2.questions.forEach((q, idx) => {
    const saved = userAnswers.task2[idx];
    html += `<div class="question-row">
      <span class="q-text">${idx + 1}. ${q.text}</span>
      ${q.options.map((opt, oi) => `
        <label>
          <input type="radio" name="q${idx}" value="${oi}"
            data-task="2" data-idx="${idx}" data-opt="${oi}"
            ${saved === oi ? "checked" : ""}>
          <span>${String.fromCharCode(65 + oi)}) ${opt}</span>
        </label>
      `).join("")}
    </div>`;
  });

  container.innerHTML = html;

  container.querySelectorAll("select, input[type=radio]").forEach(el => {
    el.addEventListener("change", e => {
      const taskNum = e.target.dataset.task;
      const idx = parseInt(e.target.dataset.idx, 10);
      if (taskNum === "1") {
        userAnswers.task1[idx] = e.target.value;
      } else {
        userAnswers.task2[idx] = parseInt(e.target.dataset.opt, 10);
      }
    });
  });

  if (checked) highlightAnswers();
}

function checkAnswers() {
  if (checked) return;

  let score1 = 0;
  const t1 = currentVariant.task1;
  t1.words.forEach((item, idx) => {
    const user = userAnswers.task1[idx];
    if (user && user === item.answer) score1++;
  });

  let score2 = 0;
  const t2 = currentVariant.task2;
  t2.questions.forEach((q, idx) => {
    const user = userAnswers.task2[idx];
    if (user !== undefined && user === q.answer) score2++;
  });

  const total1 = t1.words.length;
  const total2 = t2.questions.length;
  const total = total1 + total2;
  const score = score1 + score2;

  const box = document.getElementById("result-box");
  box.classList.remove("hidden", "good", "warn", "bad");

  let cls;
  const pct = total ? score / total : 0;
  if (pct >= 0.9) cls = "good";
  else if (pct >= 0.6) cls = "warn";
  else cls = "bad";

  box.classList.add(cls);
  box.innerHTML = `
    Результат: <strong>${score} / ${total}</strong><br>
    <small>Задание 1: ${score1}/${total1} · Задание 2: ${score2}/${total2}</small>
  `;

  const id = getVariantId();
  saveResult(id, score, total);

  checked = true;
  document.getElementById("check-btn").classList.add("hidden");
  document.getElementById("retry-btn").classList.remove("hidden");

  highlightAnswers();
}

function highlightAnswers() {
  const t1 = currentVariant.task1;

  document.querySelectorAll(".word-row").forEach(row => {
    const idx = parseInt(row.dataset.wordIdx, 10);
    const item = t1.words[idx];
    const sel = row.querySelector("select");
    const fb = row.querySelector(".word-feedback");
    const user = userAnswers.task1[idx];
    const correct = item.answer;

    if (user === correct) sel.style.borderColor = "#16a34a";
    else if (user) sel.style.borderColor = "#dc2626";
    else sel.style.borderColor = "#f59e0b";

    fb.classList.remove("hidden");
    if (user === correct) {
      fb.innerHTML = `<span class="fb-ok">✓ Верно: ${correct}</span>`;
    } else if (user) {
      fb.innerHTML = `<span class="fb-bad">✗ Ваш ответ: ${user}. Правильный: <strong>${correct}</strong></span>`;
    } else {
      fb.innerHTML = `<span class="fb-miss">— Нет ответа. Правильный: <strong>${correct}</strong></span>`;
    }
  });

  const t2 = currentVariant.task2;
  document.querySelectorAll(".question-row").forEach((row, idx) => {
    const correct = t2.questions[idx].answer;
    row.querySelectorAll("label").forEach((lab, oi) => {
      if (oi === correct) lab.style.color = "#16a34a";
      else if (oi === userAnswers.task2[idx]) lab.style.color = "#dc2626";
    });
  });
}

// ---------- Запуск ----------
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("variants-list")) {
    renderMain();
  } else if (document.getElementById("task-container")) {
    initVariant();
  }
});