const questions = [
  {
    question: "1. SI unit of force?",
    options: ["Joule", "Newton", "Watt"],
    answer: 1
  },
  {
    question: "2. Speed = Distance / ?",
    options: ["Mass", "Time", "Force"],
    answer: 1
  },
  {
    question: "3. H2O is?",
    options: ["Hydrogen", "Oxygen", "Water"],
    answer: 2
  },
  {
    question: "4. Earth revolves around?",
    options: ["Moon", "Sun", "Mars"],
    answer: 1
  }
];

// Generate Questions Automatically
const container = document.getElementById("quizContainer");

questions.forEach((q, index) => {
  const div = document.createElement("div");
  div.classList.add("question");

  let html = `<p>${q.question}</p>`;

  q.options.forEach((option, i) => {
    html += `
      <label>
        <input type="radio" name="q${index}" value="${i}">
        ${option}
      </label>
    `;
  });

  div.innerHTML = html;
  container.appendChild(div);
});

function checkAnswers() {
  let score = 0;

  questions.forEach((q, index) => {
    let selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) {
      score++;
    }
  });

  document.getElementById("result").innerText =
    "Your Score: " + score + " / " + questions.length;
    }
