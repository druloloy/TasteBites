function openNavPage() {
    var navPage = document.querySelector('.nav-page');
    navPage.classList.add('active');
    console.log('working');
}

function closeNavPage() {
    var navPage = document.querySelector('.nav-page');
    navPage.classList.remove('active');
}
