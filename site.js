document.addEventListener("DOMContentLoaded", () => {
   let data =
    window.PORTFOLIO_CONTENT ||
    window.siteData ||
    (typeof siteData !== "undefined" ? siteData : {});

if (new URLSearchParams(window.location.search).get("preview") === "draft") {
    try {
        const draft = sessionStorage.getItem("iasirPortfolioDraftPreview");
        if (draft) data = JSON.parse(draft);
    } catch (error) {
        console.error("Draft preview could not load:", error);
    }
} ififif (!data) return;

    const profile = data.profile || {};
    const about = data.about || {};

    // Hero Section
    const heroTitle = document.getElementById("hero-title");
    const heroDesc = document.getElementById("hero-desc");

    if (heroTitle && profile.heroTitle) {
        heroTitle.textContent = profile.heroTitle;
    }

    if (heroDesc && profile.heroDescription) {
        heroDesc.textContent = profile.heroDescription;
    }

    // About Section
    const aboutText = document.getElementById("about-text");

    if (aboutText && Array.isArray(about.bioParagraphs)) {
        aboutText.innerHTML = about.bioParagraphs
            .map(p => `<p>${p}</p>`)
            .join("");
    }

    // Statistics
    const aboutStats = document.getElementById("about-stats");

    if (aboutStats && Array.isArray(about.stats)) {
        aboutStats.innerHTML = about.stats
            .map(stat => `
                <div class="stat-box">
                    <h3>${stat.value || ""}</h3>
                    <p>${stat.label || ""}</p>
                </div>
            `)
            .join("");
    }

    // Services
    const services = document.getElementById("services-grid");

    if (services && Array.isArray(data.services)) {
        services.innerHTML = data.services
            .map(service => `
                <div class="service-card">
                    <i class="${service.icon || ""}"></i>
                    <h3>${service.title || ""}</h3>
                    <p>${service.description || ""}</p>
                </div>
            `)
            .join("");
    }

    // Portfolio Projects
    const portfolio = document.getElementById("portfolio-grid");

    if (portfolio && Array.isArray(data.portfolio)) {
        portfolio.innerHTML = data.portfolio
            .map(item => `
                <div class="portfolio-item">
                    <h3>${item.title || ""}</h3>
                    <p>${item.description || ""}</p>
                </div>
            `)
            .join("");
    }

    // Contact Links
    const contactLinks = document.getElementById("contact-links");

    if (contactLinks && Array.isArray(data.contactLinks)) {
        contactLinks.innerHTML = data.contactLinks
            .map(link => `
                <a href="${link.url || "#"}"
                   ${link.target ? `target="${link.target}" rel="noopener noreferrer"` : ""}
                   class="contact-btn">
                    <i class="${link.icon || ""}"></i>
                    ${link.text || ""}
                </a>
            `)
            .join("");
    }
});
