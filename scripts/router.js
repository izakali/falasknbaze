
const routes = {
    '#': 'home',
    '#/about': 'about',
    '#/services': 'services',
    '#/contact': 'contact'
};

const router = async () => {
    const path = window.location.hash || '#';
    const view = routes[path] || '404';
    const viewModule = await import(`./views/${view}.js`);
    const app = document.getElementById('app');
    app.innerHTML = await viewModule.default();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
