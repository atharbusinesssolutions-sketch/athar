// Mobile menu toggle
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');

btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
});

// Close the menu after tapping a link
nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', false);
    }
});
