/* eslint-disable no-unused-vars */
(() => {
  const root = document.documentElement;

  // =========================
  // DEFAULTS
  // =========================
  const defaultLang = root.dataset.lang || "es";
  const defaultTheme = root.dataset.theme || "light";

  if (!root.dataset.lang) root.dataset.lang = defaultLang;
  if (!root.dataset.theme) root.dataset.theme = defaultTheme;

  // =========================
  // I18N
  // =========================
  const i18n = {
    en: {
      theme: "Theme",
      nav_about: "About",
      nav_projects: "Projects",
      nav_skills: "Skills",
      nav_contact: "Contact",
      kicker: "Creative Portfolio · 2025",
      hero_hi: "Hi, I’m",
      hero_lead:
        "Graphic design student passionate about visual challenges through creative solutions. I’m always evolving—blending theory with hands-on practice to build a versatile style.",
      hero_statement: "Visual systems, editorial rhythm, digital experiences.",
      hero_note: "Scroll to see selected work and project details.",

      badge_location: "Based in Madrid, Spain",
      badge_available: "Available for work",
      cta_projects: "View projects",
      cta_contact: "Contact",

      featured: "Selected work",
      featured_text:
        "Projects focused on visual identity, editorial design, and digital experiences, developed with a conceptual and aesthetic approach.",

      about_title: "About me",
      about_subtitle:
        "Minimalist, organic and naturalistic—focused on calm, refined visual balance.",
      about_who_title: "Who I am",
      about_who_body:
        "I’m Paulina Abelló, originally from Maracaibo, Venezuela, currently living and studying in Madrid. I’m in my 4th year of Multimedia and Graphic Design at UDIT.",
      about_style_title: "Style",
      about_style_body:
        "My style is minimalist, organic, and naturalistic. I enjoy shapes and colors that evoke tranquility and beauty, aiming for simplicity and a refined artistic expression.",
      about_focus_title: "Focus",
      about_focus_body:
        "In every project, I strive to create visual balance that reflects what’s essential and aesthetic—tailored to each project’s needs.",
      about_edu_title: "Education",
      about_edu_body: "2022 – Present · 4th year",

      download_cv: "Download CV",
      case_role: "Role",
      case_goal: "Goal",

      projects_title: "Projects",
      projects_subtitle: "Selected work — click a project to view details.",
      filter_all: "All",
      filter_editorial: "Editorial",
      filter_packaging: "Packaging",
      filter_ui: "UI / App",

      p01_teaser:
        "Graphic campaign promoting Madrid using Puerta de Alcalá as the main symbol.",
      p02_teaser:
        "Packaging design for “MOLA”, a canned beverage inspired by Aperol.",
      p03_teaser:
        "Exhibition inspired by Daniel Arsham that transforms everyday objects into fictional relics of the future.",
      p04_teaser:
        "3D composition of a modern room with warm, harmonious pastel palette.",
      p05_teaser:
        "Digital travel platform offering personalized experiences and unique adventures.",
      p06_teaser:
        "“Gaia” campaign: minimalist organic visuals about nature, balance and sustainability.",

      skills_title: "Skills",
      skills_subtitle: "Tools I use to craft visual systems and digital experiences.",
      skills_soft_title: "Approach",
      skills_soft_1: "Minimal & refined aesthetics",
      skills_soft_2: "Organic shapes and calm palettes",
      skills_soft_3: "Clarity, balance, and intention",

      contact_title: "Let’s work together",
      contact_subtitle:
        "Reach out for collaborations, internships, or freelance work.",
      contact_details: "Contact details",
      phone: "Phone",
      contact_form_title: "Send a message",
      form_name: "Name",
      form_email: "Email",
      form_message: "Message",
      form_submit: "Send",
      form_note:
        "This demo form does not send emails yet. Use Formspree or your backend later.",

      footer_note: "Built as a reusable portfolio template.",
      back_top: "Back to top",
    },

    es: {
      theme: "Tema",
      nav_about: "Sobre mí",
      nav_projects: "Proyectos",
      nav_skills: "Skills",
      nav_contact: "Contacto",
      kicker: "Portfolio Creativo · 2025",
      hero_hi: "Hola, soy",
      hero_lead:
        "Estudiante de diseño gráfico con pasión por resolver retos visuales mediante soluciones creativas. Siempre estoy evolucionando—mezclando teoría con práctica para construir un estilo versátil.",
      hero_statement: "Sistemas visuales, ritmo editorial, experiencias digitales.",
      hero_note: "Haz scroll para ver trabajos seleccionados y detalles.",

      badge_location: "Vivo en Madrid, España",
      badge_available: "Disponible para trabajar",
      cta_projects: "Ver proyectos",
      cta_contact: "Contactar",

      featured: "Selección de proyectos",
      featured_text:
        "Proyectos centrados en identidad visual, diseño editorial y experiencias digitales, desarrollados con un enfoque conceptual y estético.",

      about_title: "Sobre mí",
      about_subtitle:
        "Minimalista, orgánico y naturalista—con foco en calma, equilibrio y estética refinada.",
      about_who_title: "Quién soy",
      about_who_body:
        "Soy Paulina Abelló, de Maracaibo (Venezuela), y actualmente vivo y estudio en Madrid. Estoy en 4º año de Diseño Multimedia y Gráfico en UDIT.",
      about_style_title: "Estilo",
      about_style_body:
        "Mi estilo es minimalista, orgánico y naturalista. Me gusta trabajar con formas y colores que evocan tranquilidad y belleza, buscando simplicidad y una expresión artística refinada.",
      about_focus_title: "Enfoque",
      about_focus_body:
        "En cada proyecto busco un equilibrio visual que refleje mi visión de lo esencial y lo estético—adaptado a las necesidades de cada encargo.",
      about_edu_title: "Estudios",
      about_edu_body: "2022 – Actualidad · 4º año",

      download_cv: "Descargar CV",
      case_role: "Rol",
      case_goal: "Objetivo",

      projects_title: "Proyectos",
      projects_subtitle: "Selección de trabajos — haz click para ver detalles.",
      filter_all: "Todos",
      filter_editorial: "Editorial",
      filter_packaging: "Packaging",
      filter_ui: "UI / App",

      p01_teaser:
        "Campaña gráfica para promover Madrid usando la Puerta de Alcalá como símbolo principal.",
      p02_teaser:
        "Diseño de packaging para “MOLA”, bebida en lata inspirada en Aperol.",
      p03_teaser:
        "Exposición inspirada en Daniel Arsham que transforma objetos cotidianos en reliquias ficticias del futuro.",
      p04_teaser:
        "Composición 3D de habitación moderna con paleta pastel cálida y armoniosa.",
      p05_teaser:
        "Plataforma digital de viajes con experiencias personalizadas y aventuras únicas.",
      p06_teaser:
        "Campaña “Gaia”: visuales orgánicos y minimalistas sobre naturaleza, equilibrio y sostenibilidad.",

      skills_title: "Skills",
      skills_subtitle:
        "Herramientas con las que construyo sistemas visuales y experiencias digitales.",
      skills_soft_title: "Enfoque",
      skills_soft_1: "Estética minimal y pulida",
      skills_soft_2: "Formas orgánicas y paletas calmadas",
      skills_soft_3: "Claridad, equilibrio e intención",

      contact_title: "Trabajemos juntos",
      contact_subtitle:
        "Escríbeme para colaboraciones, prácticas o trabajo freelance.",
      contact_details: "Datos de contacto",
      phone: "Teléfono",
      contact_form_title: "Enviar mensaje",
      form_name: "Nombre",
      form_email: "Email",
      form_message: "Mensaje",
      form_submit: "Enviar",
      form_note:
        "Este formulario demo aún no envía correos. Más adelante puedes usar Formspree o backend propio.",

      footer_note: "Hecho como plantilla reutilizable de portfolio.",
      back_top: "Volver arriba",
    },
  };

  function applyLang(lang) {
    const dict = i18n[lang] || i18n.es;
    root.dataset.lang = lang;

    try { localStorage.setItem("lang", lang); } catch {}

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    // Si el modal está abierto, re-render (para que cambie idioma dentro del modal)
    if (modal && modal.classList.contains("is-open") && modal.dataset.projectId) {
      renderModal(modal.dataset.projectId);
    }
  }

  function applyTheme(theme) {
    const t = theme === "dark" ? "dark" : "light";
    root.dataset.theme = t;

    try { localStorage.setItem("theme", t); } catch {}

    const icon = document.querySelector(".theme-icon");
    if (icon) icon.textContent = t === "dark" ? "☀️" : "🌙";
  }

  // =========================
  // NAV + TOGGLES
  // =========================
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // cerrar al hacer click en un link
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // cerrar al tocar fuera
  document.addEventListener("click", (e) => {
    if (!menu.classList.contains("is-open")) return;
    const inside = menu.contains(e.target) || toggle.contains(e.target);
    if (!inside) {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// cerrar menú al hacer scroll (móvil/tablet)
window.addEventListener(
  "scroll",
  () => {
    if (!menu || !toggle) return;
    if (!menu.classList.contains("is-open")) return;

    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  },
  { passive: true }
);

// Cerrar menú mobile al hacer scroll
window.addEventListener("scroll", () => {
  if (!menu) return;
  if (menu.classList.contains("is-open")) {
    menu.classList.remove("is-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }
});

// Cerrar menú si cambias a desktop
window.addEventListener("resize", () => {
  if (!menu) return;
  if (window.innerWidth > 820 && menu.classList.contains("is-open")) {
    menu.classList.remove("is-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }
});



  // =========================
  // PROJECT DATA
  // =========================
  const projects = {
    p01: {
      title: "Madrid Campaign",
      meta: "Editorial · InDesign / Photoshop",
      desc: {
        es: "Campaña gráfica para promover Madrid usando la Puerta de Alcalá.",
        en: "Graphic campaign promoting Madrid using Puerta de Alcalá.",
      },
      tags: ["InDesign", "Photoshop", "Campaign"],
      images: [
        "./assets/images/projects/p01/1.jpg",
        "./assets/images/projects/p01/2.jpg",
        "./assets/images/projects/p01/3.jpg",
      ],
      caseStudy: {
        role: { es: "Dirección de arte y diseño editorial.", en: "Art direction and editorial design." },
        goal: { es: "Crear una identidad visual clara y representativa de Madrid.", en: "Create a clear and recognizable visual identity for Madrid." },
      },
    },
    p02: {
      title: "MOLA Packaging",
      meta: "Packaging · Illustrator / Photoshop",
      desc: {
        es: "Diseño de packaging para bebida en lata inspirada en Aperol.",
        en: "Packaging design for a canned beverage inspired by Aperol.",
      },
      tags: ["Illustrator", "Photoshop", "Packaging", "Branding"],
      images: [
        "./assets/images/projects/p02/1.jpg",
        "./assets/images/projects/p02/2.jpg",
        "./assets/images/projects/p02/3.jpg",
      ],
      caseStudy: {
        role: { es: "Diseño de packaging e identidad visual.", en: "Packaging and visual identity design." },
        goal: { es: "Transmitir frescura y energía a través del diseño.", en: "Convey freshness and energy through design." },
      },
    },
    p03: {
      title: "Future Relics",
      meta: "Editorial · InDesign",
      desc: {
        es: "Exposición inspirada en Daniel Arsham sobre tiempo y memoria.",
        en: "Exhibition inspired by Daniel Arsham reflecting on time and memory.",
      },
      tags: ["InDesign", "Die-cut", "Editorial system", "Production"],
      images: [
        "./assets/images/projects/p03/1.jpg",
        "./assets/images/projects/p03/2.jpg",
        "./assets/images/projects/p03/3.jpg",
      ],
      caseStudy: {
        role: { es: "Concepto, identidad visual y diseño editorial.", en: "Concept, visual identity and editorial design." },
        goal: { es: "Transformar objetos cotidianos en reliquias ficticias.", en: "Transform everyday objects into fictional relics." },
      },
    },
    p04: {
      title: "3D Interior",
      meta: "3D · Cinema 4D",
      desc: {
        es: "Escena 3D con atmósfera cálida y paleta pastel.",
        en: "3D scene with warm atmosphere and pastel palette.",
      },
      tags: ["Cinema 4D", "Lighting", "Materials", "Composition"],
      images: [
        "./assets/images/projects/p04/1.jpg",
        "./assets/images/projects/p04/2.jpg",
        "./assets/images/projects/p04/3.jpg",
      ],
      caseStudy: {
        role: { es: "Modelado, texturizado e iluminación.", en: "Modeling, texturing and lighting." },
        goal: { es: "Transmitir calma y equilibrio visual.", en: "Convey calm and visual balance." },
      },
    },
    p05: {
      title: "Nómada App",
      meta: "UI/UX · Figma",
      desc: {
        es: "Plataforma digital de viajes personalizados.",
        en: "Digital platform for personalized travel experiences.",
      },
      tags: ["Figma", "UX/UI", "Mobile", "Community"],
      images: [
        "./assets/images/projects/p05/1.jpg",
        "./assets/images/projects/p05/2.jpg",
        "./assets/images/projects/p05/3.jpg",
      ],
      caseStudy: {
        role: { es: "Diseño UX/UI y prototipado.", en: "UX/UI design and prototyping." },
        goal: { es: "Facilitar la planificación de viajes.", en: "Simplify travel planning." },
      },
    },
    p06: {
      title: "Gaia Campaign",
      meta: "Editorial · Procreate / Illustrator / Photoshop",
      desc: {
        es: "Campaña visual sobre sostenibilidad.",
        en: "Visual campaign about sustainability.",
      },
      tags: ["Procreate", "Illustrator", "Photoshop", "Sustainability"],
      images: [
        "./assets/images/projects/p06/1.jpg",
        "./assets/images/projects/p06/2.jpg",
        "./assets/images/projects/p06/3.jpg",
      ],
      caseStudy: {
        role: { es: "Ilustración y desarrollo gráfico.", en: "Illustration and graphic development." },
        goal: { es: "Comunicar conexión con la naturaleza.", en: "Communicate connection with nature." },
      },
    },
  };

  // =========================
  // MODAL + LIGHTBOX (SIN CONTROLES)
  // =========================
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalMeta = document.getElementById("modal-meta");
  const modalDesc = document.getElementById("modal-desc");
  const modalTags = document.getElementById("modal-tags");
  const modalRole = document.getElementById("modal-role");
  const modalGoal = document.getElementById("modal-goal");
  const modalGallery = document.querySelector(".modal-gallery");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeLightboxBtn = document.querySelector("[data-close-lightbox]");

  function openLightbox(src) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
  }

  function renderModal(id) {
    const p = projects[id];
    if (!p || !modal) return;

    const lang = root.dataset.lang || "es";
    modal.dataset.projectId = id;

    if (modalTitle) modalTitle.textContent = p.title || "";
    if (modalMeta) modalMeta.textContent = p.meta || "";
    if (modalDesc) modalDesc.textContent = (p.desc && (p.desc[lang] || p.desc.es)) || "";

    if (modalRole) modalRole.textContent = p.caseStudy?.role?.[lang] || p.caseStudy?.role?.es || "";
    if (modalGoal) modalGoal.textContent = p.caseStudy?.goal?.[lang] || p.caseStudy?.goal?.es || "";

    if (modalTags) {
      modalTags.innerHTML = "";
      (p.tags || []).forEach((t) => {
        const li = document.createElement("li");
        li.textContent = t;
        modalTags.appendChild(li);
      });
    }

    // Galería (3 imágenes)
    if (modalGallery) {
      modalGallery.innerHTML = "";
      const imgs = Array.isArray(p.images) ? p.images : [];

      if (!imgs.length) {
        modalGallery.innerHTML =
          `<div class="media-placeholder" aria-hidden="true"><div class="media-label">No images</div></div>`;
      } else {
        imgs.slice(0, 3).forEach((src, i) => {
          const img = document.createElement("img");
          img.src = src;
          img.loading = "lazy";
          img.alt = `${p.title} image ${i + 1}`;
          img.className = "modal-img";
          img.tabIndex = 0;

          img.addEventListener("click", () => openLightbox(src));
          img.addEventListener("keydown", (e) => {
            if (e.key === "Enter") openLightbox(src);
          });

          modalGallery.appendChild(img);
        });
      }
    }
  }

  function openModal(id) {
    renderModal(id);
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    delete modal.dataset.projectId;
    closeLightbox();
  }

  document.querySelectorAll("[data-project]").forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn.getAttribute("data-project")));
  });

  document.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  if (closeLightboxBtn) closeLightboxBtn.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    const modalOpen = modal && modal.classList.contains("is-open");
    const lbOpen = lightbox && lightbox.classList.contains("is-open");

    if (e.key === "Escape") {
      if (lbOpen) closeLightbox();
      else if (modalOpen) closeModal();
    }
  });

  // =========================
  // FILTERS
  // =========================
  const chips = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll(".project-card");

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");

      const f = chip.getAttribute("data-filter");
      cards.forEach((card) => {
        const tags = (card.getAttribute("data-tags") || "").split(/\s+/);
        const show = f === "all" ? true : tags.includes(f);
        card.style.display = show ? "" : "none";
      });
    });
  });

  // =========================
  // SPOTLIGHT
  // =========================
  document.addEventListener("mousemove", (e) => {
    root.style.setProperty("--spot-x", `${e.clientX - window.innerWidth / 2}px`);
    root.style.setProperty("--spot-y", `${e.clientY - window.innerHeight / 2}px`);
  });

  // =========================
  // SCROLL PROGRESS
  // =========================
  const progressBar = document.getElementById("scroll-progress-bar");
  window.addEventListener("scroll", () => {
    if (!progressBar) return;
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const scrolled = max > 0 ? (h.scrollTop / max) * 100 : 0;
    progressBar.style.width = `${scrolled}%`;
  });

  // =========================
  // BACK TO TOP
  // =========================
  const backFab = document.getElementById("backtop-fab");
  if (backFab) {
    backFab.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const toggleFab = () => {
      backFab.classList.toggle("is-visible", window.scrollY > 600);
    };
    window.addEventListener("scroll", toggleFab);
    toggleFab();
  }

  // =========================
  // REVEAL
  // =========================
  const revealEls = Array.from(document.querySelectorAll(".reveal"));
  if (!("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  // =========================
  // DEMO CONTACT FORM
  // =========================
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const lang = root.dataset.lang || "es";
      status.textContent =
        lang === "es"
          ? "Formulario demo: no envía correos todavía."
          : "Demo form: it doesn’t send emails yet.";
    });
  }

  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // =========================
// LANGUAGE SWITCH (ES / EN)
// =========================
document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang-btn");
    applyLang(lang);
  });
});

// =========================
// THEME TOGGLE (LIGHT / DARK)
// =========================
const themeBtn = document.querySelector(".theme-toggle");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
}

  // INIT
  applyLang(root.dataset.lang || "es");
  applyTheme(root.dataset.theme || "light");
})();
