// Footer year
(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

// Mobile nav toggle
(() => {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("primaryNav");
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    setOpen(!nav.classList.contains("is-open"));
  });

  // Close after tapping a nav link
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  // Close when clicking outside the menu
  document.addEventListener("click", (event) => {
    if (
      nav.classList.contains("is-open") &&
      !nav.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      setOpen(false);
    }
  });

  // Close on Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
})();

// AV hero gallery swap + reset to default image
(() => {
  const mediaFrame = document.getElementById("avHeroMediaFrame");
  const gallery = document.getElementById("avHeroGallery");

  if (!mediaFrame || !gallery) return;

  const tiles = Array.from(gallery.querySelectorAll(".avHero__tile"));
  const defaultSrc = "assets/img/av-01.jpg";
  const defaultAlt = "Autonomous vehicle hero view";

  const setActiveTile = (activeTile = null) => {
    tiles.forEach((tile) => tile.classList.remove("is-active"));
    if (activeTile) activeTile.classList.add("is-active");
  };

  const renderImage = (src, alt) => {
    mediaFrame.innerHTML = `
      <img
        id="avHeroMainMedia"
        class="avHero__mainMedia"
        src="${src}"
        alt="${alt}"
        data-default-src="${defaultSrc}"
        data-default-alt="${defaultAlt}"
      >
    `;
  };

  const renderVideo = (src, poster, alt) => {
    mediaFrame.innerHTML = `
      <video
        id="avHeroMainMedia"
        class="avHero__heroVideo"
        controls
        playsinline
        preload="metadata"
        poster="${poster || ""}"
        aria-label="${alt}"
      >
        <source src="${src}" type="video/mp4">
      </video>
    `;
  };

  tiles.forEach((tile) => {
    tile.addEventListener("click", (event) => {
      event.stopPropagation();

      const type = tile.dataset.type;
      const src = tile.dataset.src;
      const alt = tile.dataset.alt || "Autonomous vehicle media";
      const poster = tile.dataset.poster || "";

      if (!src) return;

      if (type === "video") {
        renderVideo(src, poster, alt);
      } else {
        renderImage(src, alt);
      }

      setActiveTile(tile);
    });
  });

  const resetHeroToDefault = () => {
    renderImage(defaultSrc, defaultAlt);
    const defaultTile = tiles.find((tile) => tile.dataset.src === defaultSrc);
    setActiveTile(defaultTile || null);
  };

  mediaFrame.addEventListener("click", () => {
    resetHeroToDefault();
  });

  mediaFrame.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      resetHeroToDefault();
    }
  });
})();
