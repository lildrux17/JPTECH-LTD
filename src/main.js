import './style.css'
import Nav from './component/nav.js'
import Footer from './component/footer.js'
import router from './router.js'

document.querySelector('#app').innerHTML = `
    ${Nav()}
    <main id="page">
        ${router()}
    </main>
    ${Footer()}
`

// Handle SPA navigation
document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link]");

    if (!link) return;

    e.preventDefault();

    history.pushState({}, "", link.getAttribute("href"));

    document.querySelector("#page").innerHTML = router();
});

// Handle browser back/forward buttons
window.addEventListener("popstate", () => {
    document.querySelector("#page").innerHTML = router();
});