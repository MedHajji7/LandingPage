// ===== CONFIG =====
const WHATSAPP_NUMBER = "212708180292"; 
const DEFAULT_LANG = "ar"; // "ar" | "en" | "fr"

// ===== Translations (keep it short & focused) =====
const I18N = {
  ar: {
    dir: "rtl",
    lang: "ar",

    // NAV (kept for completeness; you removed the nav UI)
    nav_services: "الخدمات",
    nav_process: "خطوات العمل",
    nav_testimonials: "آراء العملاء",
    nav_faq: "الأسئلة الشائعة",
    nav_contact: "تواصل معنا",

    // HERO (global)
    hero_title: "استيراد موثوق من الصين إلى جميع أنحاء العالم",
    hero_sub: "من المورّد إلى بابك — بحث، فحص جودة، شحن، وجمارك.",
    cta_start: "ابدأ الآن",
    cta_whatsapp: "واتساب مباشر",
    trustline: "✓ فحص ما قبل الشحن • ✓ تتبّع • ✓ جمارك",

    // SERVICES
    services_title: "لماذا نحن؟",
    s1_title: "توريد وبحث موثوق",
    s1_desc:"نبحث عن المورّدين المناسبين ونتفاوض على أفضل الشروط وفق مواصفاتكم.",
    s2_title: "فحص الجودة قبل الشحن",
    s2_desc: "تقارير AQL مع صور وفيديو لضمان المطابقة قبل خروج الشحنة.",
    s3_title: "شحن وتتبع واضح",
    s3_desc: "تنسيق الشحن البحري أو الجوي مع تحديثات حتى التسليم.",
    s4_title: "دعم جمركي ومستندات",
    s4_desc: "نساعدكم في المستندات والإجراءات لتجنّب التأخيرات والمفاجآت.",

    // PROCESS
    process_title: "خطوات العمل",
    p1_title: "تواصل سريع",
    p1_desc: "واتساب أو نموذج — نجمع تفاصيل المنتج والكمية والمدينة.",
    p2_title: "البحث والعرض",
    p2_desc: "مورّدون موثوقون مع جدول زمني ومتطلبات أولية.",
    p3_title: "الإنتاج وفحص الجودة",
    p3_desc: "متابعة مراحل الإنتاج وإجراء فحص ما قبل الشحن.",
    p4_title: "الشحن والتسليم",
    p4_desc: "تنسيق اللوجستيات والجمارك حتى بابكم.",

    // TESTIMONIALS
    testimonials_title: "آراء العملاء",
    t1_text: "“تعامل احترافي وتواصل واضح. وصلت البضاعة كما هو متفق.”",
    t1_meta: "كريم، الرباط",
    t2_text:"“ساعدونا في إيجاد مورّد أفضل بجودة ممتازة، وكان التسليم في الموعد.”",
    t2_meta: "سلمى، فاس",
    t3_text: "“فحص ما قبل الشحن منحني راحة بال. شكرًا على الخدمة.”",
    t3_meta: "يوسف، مراكش",

    // FAQ
    faq_title: "الأسئلة الشائعة",
    q1: "ما المدة النموذجية للشحن من الصين؟",
    a1: "عادةً 30–40 يومًا حسب المنتج وطريقة الشحن وإجراءات الجمارك.",
    q2: "هل يمكن شحن كميات صغيرة؟",
    a2: "نعم، الشحن الجزئي (LCL) مناسب للطلبات الصغيرة أو التجريبية.",
    q3: "كيف يمكنني متابعة طلبي؟",
    a3: "نشارك تحديثات وصورًا في كل مرحلة حتى التسليم.",

    // CONTACT / FORM
    contact_title: "لنبدأ العمل",
    contact_sub:"من دون أسعار علنية أو تفاصيل مطوّلة — املأ النموذج المختصر، وسنفتح واتساب برسالة جاهزة.",
    f_name_label: "الاسم الكامل *",
    f_phone_label: "هاتف/واتساب *",
    f_product_label: "نوع المنتج *",
    f_city_label: "المدينة",
    f_notes_label: "ملاحظة (اختياري)",
    f_consent: "أوافق على التواصل عبر واتساب/البريد الإلكتروني *",
    f_submit: "إرسال الطلب",
    f_required: "* حقول مطلوبة",
    f_country_label: "الدولة *",

    // FOOTER
    footer_tag: "توريد موثوق، فحص جودة، شحن وجمارك — تواصل بسيط عبر واتساب.",
    footer_whatsapp: "واتساب:",
    footer_email: "البريد الإلكتروني:",
  },
  en: {
    dir: "ltr",
    lang: "en",
    nav_services: "Services",
    nav_process: "Process",
    nav_testimonials: "Testimonials",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    hero_title: "Trusted sourcing from China to anywhere in the world",
    hero_sub: "From supplier to your door — sourcing, QC, shipping, customs.",
    cta_start: "Get started",
    cta_whatsapp: "WhatsApp Now",
    trustline: "✓ Pre-shipment QC • ✓ Tracking • ✓ Customs",
    trust_qc: "Pre-shipment QC (AQL)",
    trust_tracking: "Step-by-step tracking",
    trust_customs: "Customs support",
    trust_reports: "Photo/Video reports",
    services_title: "Why us?",
    s1_title: "Reliable sourcing & negotiation",
    s1_desc:"We find the right suppliers and negotiate terms to match your specs.",
    s2_title: "Quality control before shipment",
    s2_desc: "AQL reports with photos/videos to ensure conformity.",
    s3_title: "Clear shipping & tracking",
    s3_desc: "Sea/Air coordination + updates until delivery.",
    s4_title: "Customs & paperwork",
    s4_desc: "We help with documents to avoid delays.",
    process_title: "Process",
    p1_title: "Quick contact",
    p1_desc: "WhatsApp or form — we capture product, quantity, city.",
    p2_title: "Sourcing & quote",
    p2_desc: "Trusted sources + initial timeline & requirements.",
    p3_title: "Production & QC",
    p3_desc: "We follow production and perform pre-shipment QC.",
    p4_title: "Shipping & delivery",
    p4_desc: "Logistics + customs until your door.",
    testimonials_title: "What clients say",
    t1_text:"“Professional and clear communication. Goods arrived with no issues.”",
    t1_meta: "— Rachid, Casablanca",
    t2_text:"“They found a better supplier with great quality. Delivery on time.”",
    t2_meta: "— Amine, Tangier",
    t3_text: "“QC before shipment gave me peace of mind. Thank you.”",
    t3_meta: "— Mariam, Agadir",
    faq_title: "Quick FAQ",
    q1: "Typical lead time China → Morocco?",
    a1: "Usually 30–40 days depending on product, mode, and customs.",
    q2: "Small quantities possible?",
    a2: "Yes, LCL works well for small/test orders.",
    q3: "How do I track my order?",
    a3: "We share updates and photos at each stage until delivery.",
    contact_title: "Get started",
    contact_sub:"No public pricing or long details — fill the short form and we’ll open WhatsApp with a ready message.",
    f_name_label: "Full name *",
    f_phone_label: "Phone/WhatsApp *",
    f_product_label: "Product type *",
    f_city_label: "City",
    f_notes_label: "Note (optional)",
    f_consent: "I agree to be contacted via WhatsApp/email *",
    f_submit: "Send request",
    f_country_label: "Country *",
    f_required: "* required fields",
    footer_tag:"Reliable sourcing, QC, shipping & customs — simple WhatsApp contact.",
    footer_whatsapp: "WhatsApp:",
    footer_email: "Email:",
  },
  fr: {
    dir: "ltr",
    lang: "fr",
    nav_services: "Services",
    nav_process: "Processus",
    nav_testimonials: "Témoignages",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    hero_title: "Approvisionnement fiable de la Chine vers le monde entier",
    hero_sub:"Du fournisseur à votre porte — sourcing, contrôle qualité, expédition, douane.",
    cta_start: "Commencer",
    cta_whatsapp: "WhatsApp Direct",
    trustline: "✓ QC avant expédition • ✓ Suivi • ✓ Douane",
    trust_qc: "QC avant expédition (AQL)",
    trust_tracking: "Suivi par étapes",
    trust_customs: "Support douanier",
    trust_reports: "Rapports Photo/Vidéo",
    services_title: "Pourquoi nous ?",
    s1_title: "Sourcing & négociation fiables",
    s1_desc:"Nous trouvons les bons fournisseurs et négocions selon vos specs.",
    s2_title: "Contrôle qualité avant expédition",
    s2_desc: "Rapports AQL avec photos/vidéos pour garantir la conformité.",
    s3_title: "Expédition & suivi clairs",
    s3_desc: "Mer/Air + mises à jour jusqu’à la livraison.",
    s4_title: "Documents & douane",
    s4_desc: "Aide aux formalités pour éviter les retards.",
    process_title: "Processus",
    p1_title: "Contact rapide",
    p1_desc: "WhatsApp ou formulaire — produit, quantité, ville.",
    p2_title: "Sourcing & devis",
    p2_desc: "Sources fiables + estimation délais et exigences.",
    p3_title: "Production & QC",
    p3_desc: "Suivi de production et QC avant expédition.",
    p4_title: "Expédition & livraison",
    p4_desc: "Logistique + douane jusqu’à chez vous.",
    testimonials_title: "Avis clients",
    t1_text: "« Pro et clair, marchandise reçue sans souci. »",
    t1_meta: "— Rachid, Casablanca",
    t2_text:"« Meilleur fournisseur trouvé, bonne qualité, livraison à l’heure. »",
    t2_meta: "— Amine, Tanger",
    t3_text: "« Le QC avant expédition m’a rassuré. Merci. »",
    t3_meta: "— Mariam, Agadir",
    faq_title: "FAQ rapide",
    q1: "Délais typiques Chine → Maroc ?",
    a1: "Généralement 30–40 jours selon produit, mode et douane.",
    q2: "Petites quantités possibles ?",
    a2: "Oui, LCL convient aux petits tests.",
    q3: "Comment suivre ma commande ?",
    a3: "Mises à jour et photos à chaque étape jusqu’à la livraison.",
    contact_title: "On démarre",
    contact_sub:"Pas de tarifs publics ni de longs détails — remplissez le mini-formulaire, on ouvre WhatsApp avec le message prêt.",
    f_name_label: "Nom complet *",
    f_phone_label: "Téléphone/WhatsApp *",
    f_product_label: "Type de produit *",
    f_city_label: "Ville",
    f_notes_label: "Note (optionnel)",
    f_consent: "J’accepte d’être contacté par WhatsApp/email *",
    f_submit: "Envoyer",
    f_country_label: "Pays *",
    f_required: "* champs obligatoires",
    footer_tag:"Sourcing fiable, QC, expédition & douane — contact WhatsApp simple.",
    footer_whatsapp: "WhatsApp :",
    footer_email: "Email :",
    
  },
};

// ===== Helpers =====
function buildWhatsAppLink(data = {}, lang = DEFAULT_LANG) {
  const L = I18N[lang] || I18N[DEFAULT_LANG];
  const {
    name = "",
    phone = "",
    product = "",
    city = "",
    country = "",
    notes = "",
  } = data;

  // Message in the current language (short, structured)
  const parts = {
    ar: [
      "مرحبا، أرسلت طلب استيراد:",
      `• الاسم: ${name}`,
      `• الهاتف: ${phone}`,
      `• المنتج: ${product}`,
      city ? `• المدينة: ${city}` : "",
      country ? `• الدولة: ${country}` : "",
      notes ? `• ملاحظة: ${notes}` : "",
    ],
    en: [
      "Hello, I’m sending a sourcing request:",
      `• Name: ${name}`,
      `• Phone: ${phone}`,
      `• Product: ${product}`,
      city ? `• City: ${city}` : "",
      country ? `• Country: ${country}` : "",
      notes ? `• Note: ${notes}` : "",
    ],
    fr: [
      "Bonjour, je vous envoie une demande d’approvisionnement :",
      `• Nom : ${name}`,
      `• Téléphone : ${phone}`,
      `• Produit : ${product}`,
      city ? `• Ville : ${city}` : "",
      country ? `• Pays : ${country}` : "",
      notes ? `• Remarque : ${notes}` : "",
    ],
  };

  const msg = (parts[L.lang] || parts.ar).filter(Boolean).join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}


function setErr(id, msg) {
  const span = document.querySelector(`.err[data-for="${id}"]`);
  if (span) span.textContent = msg;
}

function applyLang(lang) {
  const L = I18N[lang] || I18N[DEFAULT_LANG];
  document.documentElement.lang = L.lang;
  document.documentElement.dir = L.dir;

  // Swap text for all [data-i18n] nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (L[key]) el.textContent = L[key];
  });

  // Update placeholders (optional)
  const product = document.getElementById("product");
  if (product) {
    if (lang === "en") product.placeholder = "e.g., Home tools";
    else if (lang === "fr") product.placeholder = "ex. Ustensiles";
    else product.placeholder = "";
  }
  const city = document.getElementById("city");
  if (city) {
    if (lang === "en") city.placeholder = "City";
    else if (lang === "fr") city.placeholder = "Ville";
    else city.placeholder = "";
  }
}

// ===== Nav (mobile) =====
const hamburger = document.getElementById("hamburger");
const navmenu = document.getElementById("navmenu");
if (hamburger && navmenu) {
  hamburger.addEventListener("click", () => {
    const open = navmenu.style.display === "flex";
    navmenu.style.display = open ? "none" : "flex";
    hamburger.setAttribute("aria-expanded", (!open).toString());
  });
}

// ===== WhatsApp buttons (blank message) =====
const directButtons = [
  document.getElementById("whatsapp-hero"),
  document.getElementById("whatsapp-cta"),
  document.getElementById("whatsapp-footer"),
];
directButtons.forEach((el) => {
  if (!el) return;
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const lang = document.documentElement.lang || DEFAULT_LANG;
    const url = buildWhatsAppLink({}, lang);
    window.open(url, "_blank", "noopener");
  });
  el.setAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}`);
});

// ===== Form → WhatsApp message (no backend email) =====
const form = document.getElementById("lead-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const lang = document.documentElement.lang || DEFAULT_LANG;

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const product = document.getElementById("product").value.trim();
    const city = document.getElementById("city").value.trim();
    const notes = document.getElementById("notes").value.trim();
    const consent = document.getElementById("consent").checked;

    // Clear errors
    document.querySelectorAll(".err").forEach((el) => (el.textContent = ""));

    let valid = true;
    if (!name) {
      setErr(
        "name",
        lang === "fr"
          ? "Entrez le nom"
          : lang === "en"
          ? "Enter name"
          : "من فضلك اكتب الاسم"
      );
      valid = false;
    }
    if (!phone) {
      setErr(
        "phone",
        lang === "fr"
          ? "Entrez le téléphone"
          : lang === "en"
          ? "Enter phone"
          : "أدخل الهاتف"
      );
      valid = false;
    }
    if (!product) {
      setErr(
        "product",
        lang === "fr"
          ? "Entrez le produit"
          : lang === "en"
          ? "Enter product"
          : "أدخل نوع المنتج"
      );
      valid = false;
    }
    if (!consent) {
      setErr(
        "consent",
        lang === "fr"
          ? "Acceptez le contact"
          : "en" === lang
          ? "Please accept contact"
          : "الرجاء الموافقة"
      );
      valid = false;
    }
    if (!valid) return;

    const wa = buildWhatsAppLink({ name, phone, product, city, notes }, lang);
    window.open(wa, "_blank", "noopener");

    const res = document.getElementById("form-result");
    if (res) {
      res.textContent =
        lang === "fr"
          ? "Demande envoyée. WhatsApp est ouvert."
          : lang === "en"
          ? "Request sent. WhatsApp opened."
          : "تم الإرسال. تم فتح واتساب.";
    }
    form.reset();
  });
}

// ===== Language Switcher =====
// Language switcher (select)
const langSelect = document.getElementById("lang-select");
if (langSelect) {
  langSelect.addEventListener("change", () => {
    applyLang(langSelect.value);
  });
  // optional: sync UI with default/applyLang default
  langSelect.value = document.documentElement.lang || langSelect.value;
}

// Init
applyLang(DEFAULT_LANG);
