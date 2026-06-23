// =============================================
// BROWN ROSE - HOUSE OF BROWN DISTRIBUTOR
// Main JavaScript File
// =============================================
// ===== CONFIGURATION =====
const WHATSAPP = "2349021419000";
const EMAIL = "emmablack_67@yahoo.com";
const WHATSAPP_MESSAGE = "Hello, I would like to make an inquiry about House of Brown wine";
// ===== LOGOS (light mode and dark mode) =====
const LOGOS = {
  light: "assets/images/logo1.png",
  dark: "assets/images/logo 2.png"
};
// ===== ALL 5 WINE CATEGORIES =====
const WINES = [
  {
    id: "sauvignon-blanc",
    name: "House of Brown 2024 Sauvignon Blanc",
    shortName: "Sauvignon Blanc",
    year: "2024",
    type: "White Wine",
    desc: "Fresh, lean and savory — brand new to the House of Brown. This vibrant Sauvignon Blanc features alluring aromatics of Meyer lemon cream, key lime zest, fennel fronds, a hint of white jasmine, and subtle wet stone minerality. On the palate, discover elegant notes of white peach, green melon, chamomile, green apple peel, and a refreshing hint of sea spray.",
    composition: "95% Sauvignon Blanc • 5% Chenin Blanc",
    img: "assets/images/gallery6.jpg",
    hover: "assets/images/gallery7_puzzle.jpg",
    galleryHover: "assets/images/gallery8.jpg"
  },
  {
    id: "chardonnay",
    name: "House of Brown 2022 Chardonnay",
    shortName: "Chardonnay",
    year: "2022",
    type: "White Wine",
    desc: "Elegant and captivating with gemstone clarity and a canary yellow diamond core. Night blooming jasmine, tropical guava, starfruit, lychee, and key lime mingle with stone fruit undertones on the nose. Juicy yet zesty on the palate — lithe and bright with a silky, creamy texture, medium body, and a lingering finish of honeydew melon, limestone dust, and saline.",
    composition: "100% Chardonnay",
    img: "assets/images/chardonnay.jpg",
    hover: "assets/images/chardonnay-hover.jpg",
    galleryHover: "assets/images/gallery9.jpg"
  },
  {
    id: "rose",
    name: "House of Brown 2022 Rosé",
    shortName: "Rosé",
    year: "2022",
    type: "Rosé Wine",
    desc: "A delicate pale pink blush that represents our Brown Zin legacy for a new generation. Our Rosé features enchanting notes of star jasmine, watermelon, raspberry, wild strawberry, blood orange, yuzu, hints of honeycomb, and baking spice. Lithe, vibrant, and dynamic on the palate with a light body, silky texture, and a delightfully subtle finish.",
    composition: "75% Zinfandel • 20% Muscat Blanc • 5% Viognier",
    img: "assets/images/rose.jpg",
    hover: "assets/images/rose-hover.jpg",
    galleryHover: "assets/images/gallery10.jpg"
  },
  {
    id: "red-blend",
    name: "House of Brown 2022 Red Blend",
    shortName: "Red Blend",
    year: "2022",
    type: "Red Wine",
    desc: "Brilliant and translucent ruby through and through. An expressive nose of hibiscus, tea rose, pomegranate, and Maraschino cherry layered with subtle cinnamon, clove, and English lavender. Light body and crisp acidity meet lush fruit and warm spices on the palate, culminating in intense flavors and a sublime, lingering finish.",
    composition: "50% Cabernet Sauvignon • 25% Pinot Noir • 25% Tempranillo",
    img: "assets/images/red.jpg",
    hover: "assets/images/gallery11.jpg",
    galleryHover: "assets/images/red-hover.jpg"
  },
  {
    id: "cabernet-sauvignon",
    name: "House of Brown 2023 Cabernet Sauvignon",
    shortName: "Cabernet Sauvignon",
    year: "2023",
    type: "Red Wine",
    desc: "Focused, plush and elegant — new to the House of Brown lineup. A deep garnet core with translucent ruby rim reveals notes of gardenia, lilac, lavender, violet, black cherry, dried rose petals, spicy cedar, cigar box, and sweet vanilla. Ripe blue and black fruits with subtle citrus, eucalyptus, and brown sugar. Structured yet lush and creamy with soft, supple tannins leading to an endlessly delightful finish.",
    composition: "75% Cabernet Sauvignon • 25% Nero d'Avola",
    img: "assets/images/gallery5.jpg",
    hover: "assets/images/gallery5-hover.jpg",
    galleryHover: "assets/images/gallery1.jpg"
  }
];
// ===== GALLERY IMAGES (Home Page) =====
const GALLERY_IMAGES = [
  "assets/images/gallery1.jpg",
  "assets/images/gallery2.jpg",
  "assets/images/gallery3.jpg",
  "assets/images/gallery4.jpg",
  "assets/images/gallery5.jpg",
  "assets/images/gallery6.jpg"
];
// ===== ALL GALLERY IMAGES (Full Gallery Page) =====
const ALL_GALLERY_IMAGES = [
  "assets/images/gallery1.jpg",
  "assets/images/gallery2.jpg",
  "assets/images/gallery3.jpg",
  "assets/images/gallery4.jpg",
  "assets/images/gallery5.jpg",
  "assets/images/gallery6.jpg",
  "assets/images/gallery7_puzzle.jpg",
  "assets/images/gallery8.jpg",
  "assets/images/gallery9.jpg",
  "assets/images/gallery10.jpg",
  "assets/images/gallery11.jpg",
  "assets/images/hero.jpg",
  "assets/images/chardonnay.jpg",
  "assets/images/chardonnay-hover.jpg",
  "assets/images/rose.jpg",
  "assets/images/rose-hover.jpg",
  "assets/images/red.jpg",
  "assets/images/red-hover.jpg",
  "assets/images/gallery5-hover.jpg"
];
// ===== HELPER: Get WhatsApp Link =====
function getWhatsAppLink(message) {
  message = message || WHATSAPP_MESSAGE;
  return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(message);
}
// ===== SET ALL WHATSAPP LINKS =====
function setWhatsAppLinks() {
  var links = document.querySelectorAll(".wa-link");
  links.forEach(function(link) {
    link.href = getWhatsAppLink();
  });
}
// ===== THEME: Initialize =====
function initTheme() {
  var saved = localStorage.getItem("darkMode");
  var isDark;
  
  if (saved !== null) {
    isDark = saved === "true";
  } else {
    // Auto-detect based on time of day
    var hour = new Date().getHours();
    isDark = hour >= 19 || hour < 6;
  }
  
  applyTheme(isDark);
}
// ===== THEME: Apply =====
function applyTheme(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  
  // Update logos
  var navLogo = document.getElementById("navLogo");
  var footerLogo = document.getElementById("footerLogo");
  var logo = isDark ? LOGOS.dark : LOGOS.light;
  
  if (navLogo) navLogo.src = logo;
  if (footerLogo) footerLogo.src = logo;
  
  localStorage.setItem("darkMode", isDark);
}
// ===== THEME: Toggle =====
function toggleTheme() {
  var isDark = !document.body.classList.contains("dark-mode");
  applyTheme(isDark);
}
// ===== NAVBAR: Scroll Effect =====
function initNavbar() {
  var navbar = document.getElementById("navbar");
  
  window.addEventListener("scroll", function() {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}
// ===== MOBILE MENU =====
function initMobileMenu() {
  var toggle = document.getElementById("mobileToggle");
  var menu = document.getElementById("mobileMenu");
  var links = document.querySelectorAll(".mobile-link");
  
  if (!toggle || !menu) return;
  
  toggle.addEventListener("click", function() {
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
  });
  
  // Close menu when clicking a link
  links.forEach(function(link) {
    link.addEventListener("click", function() {
      toggle.classList.remove("active");
      menu.classList.remove("active");
    });
  });
}
// ===== RENDER: Wine Cards (Home Page) =====
function renderWines() {
  var container = document.getElementById("wineContainer");
  if (!container) return;
  
  WINES.forEach(function(wine) {
    var waLink = getWhatsAppLink("Hello, I would like to inquire about " + wine.name);
    
    var card = document.createElement("div");
    card.className = "wine-card";
    card.innerHTML = 
      '<div class="wine-img-wrap">' +
        '<img src="' + wine.img + '" alt="' + wine.name + '" class="main-img" loading="lazy">' +
        '<img src="' + wine.hover + '" alt="' + wine.name + ' alternate" class="hover-img" loading="lazy">' +
        '<span class="wine-badge year">' + wine.year + '</span>' +
        '<span class="wine-badge type">' + wine.type + '</span>' +
      '</div>' +
      '<div class="wine-body">' +
        '<h5>' + wine.shortName + '</h5>' +
        '<p class="wine-composition">' + wine.composition + '</p>' +
        '<p>' + wine.desc + '</p>' +
        '<a href="' + waLink + '" target="_blank" rel="noopener noreferrer" class="btn-outline">More Information</a>' +
      '</div>';
    
    container.appendChild(card);
  });
}
// ===== RENDER: Gallery (Home Page) =====
function renderGallery() {
  var container = document.getElementById("galleryGrid");
  if (!container) return;
  
  GALLERY_IMAGES.forEach(function(src, index) {
    var item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = '<img src="' + src + '" alt="Gallery ' + (index + 1) + '" loading="lazy">';
    item.addEventListener("click", function() {
      openModal(src);
    });
    container.appendChild(item);
  });
}
// ===== RENDER: Wine Categories (Gallery Page) =====
function renderWineCategories() {
  var container = document.getElementById("wineCategoriesGrid");
  if (!container) return;
  
  WINES.forEach(function(wine) {
    var card = document.createElement("div");
    card.className = "wine-category-card";
    card.innerHTML = 
      '<div class="card-images">' +
        '<img src="' + wine.img + '" alt="' + wine.name + '" class="main-img" loading="lazy">' +
        '<img src="' + wine.galleryHover + '" alt="' + wine.name + ' alternate" class="hover-img" loading="lazy">' +
      '</div>' +
      '<div class="card-overlay"></div>' +
      '<div class="card-content">' +
        '<h4>' + wine.shortName + '</h4>' +
        '<p>' + wine.year + ' · ' + wine.type + '</p>' +
      '</div>' +
      '<span class="card-badge">' + wine.type + '</span>';
    
    card.addEventListener("click", function() {
      openModal(wine.img);
    });
    
    container.appendChild(card);
  });
}
// ===== RENDER: Full Gallery (Gallery Page) =====
function renderFullGallery() {
  var container = document.getElementById("fullGalleryGrid");
  if (!container) return;
  
  // Get unique images (excluding main wine images shown above)
  var mainWineImgs = [];
  WINES.forEach(function(w) { mainWineImgs.push(w.img); });
  
  var additionalImages = [];
  
  ALL_GALLERY_IMAGES.forEach(function(img) {
    if (mainWineImgs.indexOf(img) === -1 && additionalImages.indexOf(img) === -1) {
      additionalImages.push(img);
    }
  });
  
  // Add hover images from wines
  WINES.forEach(function(wine) {
    if (additionalImages.indexOf(wine.hover) === -1) {
      additionalImages.push(wine.hover);
    }
    if (additionalImages.indexOf(wine.galleryHover) === -1) {
      additionalImages.push(wine.galleryHover);
    }
  });
  
  additionalImages.forEach(function(src, index) {
    var item = document.createElement("div");
    item.className = "full-gallery-item";
    item.innerHTML = '<img src="' + src + '" alt="Gallery ' + (index + 1) + '" loading="lazy">';
    item.addEventListener("click", function() {
      openModal(src);
    });
    container.appendChild(item);
  });
}
// ===== MODAL: Open =====
function openModal(src) {
  var modal = document.getElementById("imageModal");
  var modalImage = document.getElementById("modalImage");
  
  if (!modal || !modalImage) return;
  
  modalImage.src = src;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}
// ===== MODAL: Close =====
function closeModal() {
  var modal = document.getElementById("imageModal");
  if (!modal) return;
  
  modal.classList.remove("active");
  document.body.style.overflow = "";
}
// ===== MODAL: Initialize =====
function initModal() {
  var modal = document.getElementById("imageModal");
  var closeBtn = document.getElementById("modalClose");
  var backdrop = modal ? modal.querySelector(".modal-backdrop") : null;
  
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }
  
  if (backdrop) {
    backdrop.addEventListener("click", closeModal);
  }
  
  // Close on Escape key
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}
// ===== SET CURRENT YEAR =====
function setCurrentYear() {
  var el = document.getElementById("currentYear");
  if (el) {
    el.textContent = new Date().getFullYear();
  }
}
// ===== INITIALIZE EVERYTHING =====
document.addEventListener("DOMContentLoaded", function() {
  // Core setup
  setWhatsAppLinks();
  initTheme();
  initNavbar();
  initMobileMenu();
  initModal();
  setCurrentYear();
  
  // Check which page we're on
  var isGalleryPage = window.location.pathname.indexOf("gallery") !== -1;
  
  if (isGalleryPage) {
    renderWineCategories();
    renderFullGallery();
  } else {
    renderWines();
    renderGallery();
  }
  
  // Theme toggle button
  var themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
});
