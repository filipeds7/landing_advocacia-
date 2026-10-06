const WHATSAPP_NUMBER = "5553999999999";
const WHATSAPP_MESSAGE = "Olá! Vim pelo site e gostaria de falar com um advogado.";

function whatsappUrl() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".whatsapp-link").forEach(link => {
    link.href = whatsappUrl();
    link.target = "_blank";
    link.rel = "noopener";
  });

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Animação suave de entrada sem bibliotecas externas.
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});

  document.querySelectorAll(".service-card,.review,.about-content,.speed-copy,.faq-list,.contact-info").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = "opacity .6s ease, transform .6s ease";
    observer.observe(el);
  });

  const style = document.createElement("style");
  style.textContent = ".show{opacity:1!important;transform:translateY(0)!important}";
  document.head.appendChild(style);
});
