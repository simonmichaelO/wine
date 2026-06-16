// ===== YOUR WHATSAPP NUMBER (edit this) =====
// Format: country code + number, no + and no spaces
const WHATSAPP = "2349033328061";

// ===== WINE CATEGORIES =====
const wines = [
  {
    name: "Rosé",
    desc: "Light, crisp, and beautifully refreshing — perfect for warm evenings and celebrations.",
    img: "assets/images/rose.jpg",
    hover: "assets/images/rose-hover.jpg"
  },
  {
    name: "Red",
    desc: "Bold, rich, and full-bodied — crafted for those who love depth and character.",
    img: "assets/images/red.jpg",
    hover: "assets/images/red-hover.jpg"
  },
  {
    name: "Chardonnay",
    desc: "Elegant and smooth with notes of citrus and oak — a timeless white classic.",
    img: "assets/images/chardonnay.jpg",
    hover: "assets/images/chardonnay-hover.jpg"
  }
];

// ===== GALLERY (images + videos) =====
const gallery = [
  { type: "image", src: "assets/images/gallery1.jpg" },
  { type: "image", src: "assets/images/gallery2.jpg" },
  { type: "image", src: "assets/images/gallery3.jpg" },
  { type: "image", src: "assets/images/gallery4.jpg" },
  { type: "image", src: "assets/images/gallery5.jpg" },
  { type: "image", src: "assets/images/gallery6.jpg" }
  // To add a video, use: { type: "video", src: "assets/videos/yourvideo.mp4" }
];

// ===== SET ALL WHATSAPP LINKS =====
function setWhatsAppLinks() {
  document.querySelectorAll(".wa-link").forEach(a => {
    a.href = "https://wa.me/" + WHATSAPP + "?text=Hello%2C%20I%20would%20like%20to%20make%20an%20inquiry";
  });
}

// ===== RENDER WINES =====
function renderWines() {
  const box = document.getElementById("wineContainer");
  wines.forEach(w => {
    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6";
    col.innerHTML = `
      <div class="wine-card h-100">
        <div class="wine-img-wrap">
          <img src="${w.img}" class="main-img" alt="${w.name}">
          <img src="${w.hover}" class="hover-img" alt="${w.name}">
        </div>
        <div class="wine-body">
          <h5>${w.name}</h5>
          <p>${w.desc}</p>
          <a href="https://wa.me/${WHATSAPP}?text=Hello%2C%20I%27m%20interested%20in%20your%20${encodeURIComponent(w.name)}%20wine"
             class="btn btn-outline-custom btn-sm" target="_blank">
            <i class="fa-brands fa-whatsapp"></i> More Information
          </a>
        </div>
      </div>`;
    box.appendChild(col);
  });
}

// ===== RENDER GALLERY =====
function renderGallery() {
  const box = document.getElementById("galleryGrid");
  gallery.forEach(g => {
    const col = document.createElement("div");
    col.className = "col-md-4 col-sm-6";

    if (g.type === "image") {
      col.innerHTML = `
        <div class="gallery-item">
          <img src="${g.src}" alt="gallery" onclick="openModal('${g.src}','image')">
        </div>`;
    } else {
      col.innerHTML = `
        <div class="gallery-item">
          <video muted onclick="openModal('${g.src}','video')">
            <source src="${g.src}" type="video/mp4">
          </video>
        </div>`;
    }
    box.appendChild(col);
  });
}

// ===== GALLERY MODAL =====
function openModal(src, type) {
  const content = document.getElementById("modalContent");
  content.innerHTML = type === "image"
    ? `<img src="${src}" alt="preview">`
    : `<video controls autoplay><source src="${src}" type="video/mp4"></video>`;
  new bootstrap.Modal(document.getElementById('galleryModal')).show();
}

// ===== THEME (manual + auto by time) =====
function applyTheme(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  document.getElementById("themeToggle").innerHTML =
    isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

function initTheme() {
  const saved = localStorage.getItem("darkMode");
  if (saved !== null) {
    applyTheme(saved === "true");
  } else {
    const hour = new Date().getHours();
    applyTheme(hour >= 19 || hour < 7); // dark at night, light in day
  }
}

document.getElementById("themeToggle").addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-mode");
  applyTheme(isDark);
  localStorage.setItem("darkMode", isDark);
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 60);
});

// ===== INITIALIZE EVERYTHING =====
window.addEventListener("DOMContentLoaded", () => {
  setWhatsAppLinks();
  renderWines();
  renderGallery();
  initTheme();
});