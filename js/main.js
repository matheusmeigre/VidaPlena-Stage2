// Dark Mode
document.getElementById("darkToggle")
  .addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

// FAQ Acordeão
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.classList.toggle("open");
    btn.nextElementSibling.style.display =
      btn.nextElementSibling.style.display === "block" ? "none" : "block";
  });
});

// Formulário
document.getElementById("contactForm")
  .addEventListener("submit", e => {
    e.preventDefault();

    const email = document.getElementById("email").value;

    if (!email.includes("@")) {
      alert("Email inválido");
      return;
    }

    alert("Mensagem enviada com sucesso!");
    e.target.reset();
  });
