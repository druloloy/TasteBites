function setWebConfig() {
    const descriptionMeta = document.createElement('meta');
    descriptionMeta.setAttribute('name', 'description');
    descriptionMeta.setAttribute('content', webConfig.description);

    document.head.appendChild(descriptionMeta);

    const logo = document.querySelector('.logo');
    const brand = document.querySelector('.brand');

    console.log('working');
    logo.querySelector('h1').textContent = webConfig.name;
    brand.querySelector('h1').textContent = webConfig.name;
    brand.querySelector('p').textContent = webConfig.description;
}

window.addEventListener('DOMContentLoaded', () => {
    setWebConfig();
});
