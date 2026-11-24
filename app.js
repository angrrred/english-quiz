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
let currentTask = 1; // 1 или 2
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

  renderTask();

  document.getElementById("prev-task").onclick = () => {
    if (currentTask > 1) { currentTask--; renderTask(); }
  };
  document.getElementById("next-task").onclick = () => {
    if (currentTask < 2) { currentTask++; renderTask(); }
  };


  document.getElementById("retry-btn").onclick = () => location.reload();
}

function renderTask() {
  const container = document.getElementById("task-container");
  const task = currentTask === 1 ? currentVariant.task1 : currentVariant.task2;

  document.getElementById("task-indicator").textContent =
    `Задание ${currentTask} / 2`;
  document.getElementById("prev-task").disabled = currentTask === 1;
  document.getElementById("next-task").disabled = currentTask === 2;

  let html = `<h2 class="task-title">${task.title}</h2>
              <p class="task-instruction">${task.instruction}</p>`;

  if (currentTask === 1) {
    task.words.forEach((item, idx) => {
      const saved = userAnswers.task1[idx] || "";
      html += `<div class="word-row">
        <span class="word">${idx + 1}. ${item.word}</span>
        <select data-task="1" data-idx="${idx}">
          <option value="">— выберите определение —</option>
          ${item.options.map(opt => {
            const letter = opt.charAt(0);
            return `<option value="${letter}" ${saved === letter ? "selected" : ""}>${opt}</option>`;
          }).join("")}
        </select>
      </div>`;
    });
  } else {
    task.questions.forEach((q, idx) => {
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
  }

  container.innerHTML = html;

  // Сохраняем ответы при изменении
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
    // Кнопка "Проверить" видна только на последнем задании (Task 2)
  const checkBtn = document.getElementById("check-btn");
  if (!checked) {
    if (currentTask === 2) {
      checkBtn.classList.remove("hidden");
      checkBtn.onclick = checkAnswers;
    } else {
      checkBtn.classList.add("hidden");
    }
  }
}

function checkAnswers() {
  if (checked) return;

  // Task 1
  let score1 = 0;
  const t1 = currentVariant.task1;
  t1.words.forEach((item, idx) => {
    const user = userAnswers.task1[idx];
    if (user && user === item.answer) score1++;
  });

  // Task 2
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

  let cls, text;
  const pct = total ? score / total : 0;
  if (pct >= 0.9) cls = "good";
  else if (pct >= 0.6) cls = "warn";
  else cls = "bad";

  box.classList.add(cls);
  box.innerHTML = `
    Результат: <strong>${score} / ${total}</strong><br>
    <small>Задание 1: ${score1}/${total1} · Задание 2: ${score2}/${total2}</small>
  `;

  // Сохраняем
  const id = getVariantId();
  saveResult(id, score, total);

  checked = true;
  document.getElementById("check-btn").classList.add("hidden");
  document.getElementById("retry-btn").classList.remove("hidden");

  // Подсветка правильных ответов
  highlightAnswers();
}

function highlightAnswers() {
  const t1 = currentVariant.task1;
  document.querySelectorAll("select[data-task='1']").forEach(sel => {
    const idx = parseInt(sel.dataset.idx, 10);
    const correct = t1.words[idx].answer;
    const user = userAnswers.task1[idx];
    if (user === correct) sel.style.borderColor = "#16a34a";
    else if (user) sel.style.borderColor = "#dc2626";
    else sel.style.borderColor = "#f59e0b";
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