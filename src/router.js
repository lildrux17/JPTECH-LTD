import home from "./pages/home.js";
import about from "./pages/about.js";
import client from "./pages/clients.js";
import contact from "./pages/contact.js";
import project from "./pages/project.js";
import service from "./pages/service.js";


const routes = {
    "/": home,
    "/home": home,
    "/about": about,
    "/clients": client,
    "/contact": contact,
    "/projects": project,
    "/services": service,
};


function router() {

    const path = window.location.pathname;

    const page = routes[path] || home;

    return page();

}


// Handle navigation without refreshing page
export function navigate(url){

    window.history.pushState({}, "", url);

    document.querySelector("#app").innerHTML = `
        ${window.Nav ? window.Nav() : ""}
        ${router()}
    `;
}


// Listen for browser back/forward buttons
window.addEventListener("popstate", () => {

    document.querySelector("#app").innerHTML = `
        ${router()}
    `;

});


export default router;