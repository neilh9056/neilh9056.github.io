(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();


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
