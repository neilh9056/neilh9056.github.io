(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector(".lightbox__img");
const lightboxClose = document.querySelector(".lightbox__close");

if (lightbox && lightboxImg && lightboxClose) {
  document.querySelectorAll(".avHero__tile img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    lightboxImg.alt = "";
  };

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

// ===== AV Collage click-to-open =====
(() => {
  
  const btn = document.getElementById("avThumbBtn");
  const overlay = document.getElementById("avCollageOverlay");
  const closeBtn = document.getElementById("avCollageClose");

  if (!btn || !overlay || !closeBtn) return;

  const open = () => {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
  };

  const close = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
  };

  btn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);

  // Click outside modal closes
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  // ESC closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();

