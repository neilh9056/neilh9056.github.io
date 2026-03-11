(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// AV gallery lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

const galleryImages = Array.from(
  document.querySelectorAll('.avHero__gallery img[data-lightbox="image"]')
);

let currentImageIndex = 0;

function openLightbox(index) {
  if (!lightbox || !lightboxImage || galleryImages.length === 0) return;

  currentImageIndex = index;
  const img = galleryImages[currentImageIndex];

  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt || "Gallery image";
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightbox) return;

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function showNextImage() {
  if (galleryImages.length === 0) return;
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  openLightbox(currentImageIndex);
}

function showPrevImage() {
  if (galleryImages.length === 0) return;
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  openLightbox(currentImageIndex);
}

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightboxNext) {
  lightboxNext.addEventListener("click", showNextImage);
}

if (lightboxPrev) {
  lightboxPrev.addEventListener("click", showPrevImage);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (!lightbox || !lightbox.classList.contains("is-open")) return;

  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowRight") showNextImage();
  if (event.key === "ArrowLeft") showPrevImage();
});
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
    if (e.key === "Escape" && overlay.classList.contains("is-open")) close();
  });
})();



