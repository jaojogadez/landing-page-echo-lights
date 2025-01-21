// Script for show movel menu
window.addEventListener("scroll", function () {
  let header = document.querySelector(".menu--movel");
  let scrollTop = window.scrollY;
  if (scrollTop > 70) {
    header.classList.add("menu--show");
  } else {
    header.classList.remove("menu--show");
  }
});

// Script for actives links
const sections = document.querySelectorAll(".main-section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    if (sectionTop <= 150 && sectionBottom > 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Script for scrollbar colors
window.addEventListener("scroll", function () {
  let scrollPercentage =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);

  let red = Math.min(255, Math.floor(scrollPercentage * 255));
  let green = Math.min(255, Math.floor((1 - scrollPercentage) * 255));
  let blue = Math.floor(150 + scrollPercentage * 105);

  let color = `rgb(${red}, ${green}, ${blue})`;

  document.documentElement.style.setProperty("--scroll-thumb-color", color);
});

// Script for copy the code
function copyCode() {
  const codeText = document.getElementById("code").innerText;
  navigator.clipboard
    .writeText(codeText)
    .then(() => {
      alert("Código copiado com sucesso!");
    })
    .catch(() => {
      alert("Erro ao copiar o código.");
    });
}

// Script for typing effect
document.addEventListener("DOMContentLoaded", function () {
  const codeContainer = document.getElementById("code");
  const codeText = codeContainer.textContent;
  codeContainer.textContent = ""; // Limpa o conteúdo inicial para animação
  codeContainer.style.display = "block"; // Exibe o bloco de código

  let index = 0;

  function typeEffect() {
    if (index < codeText.length) {
      codeContainer.textContent += codeText[index];
      index++;
      setTimeout(typeEffect, 0.001); // Tempo reduzido para uma animação mais rápida
    }
  }

  typeEffect();
});

// Simular Palmas

const statusSpan = document.getElementById("status-lights");
const btnSimulate = document.getElementById("simulateButton");
const echolightsDesconnect = document.getElementById("echolightDesconnect");
const echolightsConnect = document.getElementById("echolightConnect");
let contPalma = 0;
btnSimulate.onclick = () => {
  contPalma++;
  if (contPalma % 2 !== 0) {
    statusSpan.textContent = "Ligado";
    echolightsDesconnect.style.display = "none";
    echolightsConnect.style.display = "block";
  } else {
    statusSpan.textContent = "Desligado";
    echolightsDesconnect.style.display = "block";
    echolightsConnect.style.display = "none";
  }
};

const $enterInput = document.querySelector("#inputEnter");
const $textarea = document.querySelector("textarea");
const $form = document.getElementById("formMessage");
const $btnModal = document.querySelector("#modalBTN");
const $btn = document.querySelector("#formBTN");
const $closeBtn = document.querySelector("#closeButton");
const $formContent = document.querySelectorAll(
  "#formContact .modal-body .mb-3"
);
const $formSuccessContent = document.querySelector(
  "#formContact .modal-body .col"
);

console.log($formContent);
$btn.onclick = () => {
  $textarea.value = $enterInput.value;
};

$form.onsubmit = (event) => {
  event.preventDefault();
  successForm();
};

let successForm = () => {
  $btnModal.style.display = "none";
  for (let index = 0; index < $formContent.length; index++) {
    const element = $formContent[index];
    element.style.display = "none";
  }
  $formSuccessContent.classList.remove("d-none");
};


$closeBtn.onclick = () => hiddenModal()

let hiddenModal = () => {
  $btnModal.style.display = "block";
  for (let index = 0; index < $formContent.length; index++) {
    const element = $formContent[index];
    element.style.display = "block";
  }
  $formSuccessContent.classList.add("d-none");
  $form.reset();
  $enterInput.value = "";
};
