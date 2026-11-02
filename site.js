// Site Rendering Engine
document.addEventListener("DOMContentLoaded", () => {
    // Render About Section
    const aboutTextContainer = document.getElementById("about-text");
    if (aboutTextContainer && siteData.about) {
        aboutTextContainer.innerHTML = siteData.about.bioParagraphs
            .map(p => `<p>${p}</p>`)
            .join("");
    }

    const aboutStatsContainer = document.getElementById("about-stats");
    if (aboutStatsContainer && siteData.about) {
        aboutStatsContainer.innerHTML = siteData.about.stats
            .map(stat => `
                <div class="stat-box">
                    <h3>${stat.value}</h3>
                    <p>${stat.label}</p>
                </div>
            `).join("");
    }

    // Render Services Section
    const servicesContainer = document.getElementById("services-grid");
    if (servicesContainer && siteData.services) {
        servicesContainer.innerHTML = siteData.services
            .map(service => `
                <div class="service-card">
                    <i class="${service.icon}"></i>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>
            `).join("");
    }

    // Render Portfolio Section
    const portfolioContainer = document.getElementById("portfolio-grid");
    if (portfolioContainer && siteData.portfolio) {
        portfolioContainer.innerHTML = siteData.portfolio
            .map(item => `
                <div class="portfolio-item">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `).join("");
    }

    // Render Contact Links
    const contactContainer = document.getElementById("contact-links");
    if (contactContainer && siteData.contactLinks) {
        contactContainer.innerHTML = siteData.contactLinks
            .map(link => `
                <a href="${link.url}" ${link.target ? `target="${link.target}"` : ''} class="contact-btn">
                    <i class="${link.icon}"></i> ${link.text}
                </a>
            `).join("");
    }
});
