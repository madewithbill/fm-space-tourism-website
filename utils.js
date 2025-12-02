const navLinks = Array.from(document.querySelectorAll('.nav-link'))

//nav menu highlight
navLinks.forEach(link => {
    if (link.pathname === window.location.pathname) {
        link.parentElement.classList.toggle('is-active')
    }
}
)

//mobile menu toggle
document.querySelector('button.hamburger').addEventListener('click', () => {
    document.getElementById('main-nav').classList.add('nav-transition')
    document.getElementById('main-nav').classList.add('is-open')
})

document.querySelector('button.mobile-close').addEventListener('click', () => {
    document.getElementById('main-nav').classList.remove('is-open')
    document.getElementById('main-nav').addEventListener('transitionend', () => document.getElementById('main-nav').classList.remove('nav-transition'), { once: true })
})

//global data fetch
async function getData() {
    const res = await fetch('./data/data.json')
    const data = await res.json()
    return data
}

export const data = await getData()

//transition utilities
export const transitionElements = Array.from(document.querySelectorAll('[data-transition]'))

export function fadeOut(el) {
    return el.animate({ opacity: 0 }, { duration: 500, fill: 'forwards' }).finished
}
export function fadeIn(el) {
    el.animate({ opacity: 1 }, { duration: 500, fill: 'forwards' })
}