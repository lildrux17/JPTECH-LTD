import './style.css'
import Nav from './component/nav.js'
import Footer from './component/footer.js'
import router from './router.js'

const renderApp = () => {
    document.querySelector('#app').innerHTML = `
        ${Nav()}
        <main id="page">
            ${router()}
        </main>
        ${Footer()}
    `;
};

renderApp();

// Handle SPA navigation
document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link]");

    const toggleButton = e.target.closest("[data-menu-toggle]");
    if (toggleButton) {
        const targetId = toggleButton.dataset.menuToggle;
        const menu = document.getElementById(targetId);
        if (menu) {
            menu.classList.toggle("hidden");
            const expanded = !menu.classList.contains("hidden");
            toggleButton.setAttribute("aria-expanded", String(expanded));
        }
        return;
    }

    if (!link) return;

    e.preventDefault();

    history.pushState({}, "", link.getAttribute("href"));

    renderApp();
});

// Handle browser back/forward buttons
window.addEventListener("popstate", () => {
    renderApp();
});