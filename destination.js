import { data } from './utils.js'
import { transitionElements } from './utils.js'
import { fadeIn } from './utils.js'
import { fadeOut } from './utils.js'

const planetImg = document.getElementById('planet-img')
const planetNav = document.getElementById('planet-nav')
const planetName = document.getElementById('planet-name')
const planetDesc = document.getElementById('planet-desc')
const planetDist = document.getElementById('planet-dist')
const planetTravel = document.getElementById('planet-travel-time')

//destinations
let currentPlanetIndex = 0

const planetNavLinks = () => {
    let navHTML = ''
    data.destinations.forEach(planet => {
        navHTML += `<li><button id=${data.destinations.indexOf(planet)} class='tab-links'>${planet.name}</button></li>`
    })
    return navHTML
}
planetNav.innerHTML = planetNavLinks()

document.getElementById('0').parentElement.classList.add('is-active')
const navList = Array.from(document.querySelectorAll('.tab-links'))
navList.forEach(link => {
    link.addEventListener('click', async (e) => {
        await Promise.all(transitionElements.map(element => fadeOut(element)))
        currentPlanetIndex = data.destinations.findIndex(planet => {
            return planet.name.toLowerCase() === e.target.innerText.toLowerCase()
        })
        setPlanetData()
        transitionElements.forEach(element => fadeIn(element))
        navList.forEach(link => link.parentElement.classList.remove('is-active'))
        link.parentElement.classList.add('is-active')

    })
})





function setPlanetData() {
    planetImg.src = data.destinations[currentPlanetIndex].images.webp
    planetImg.alt = data.destinations[currentPlanetIndex].name
    planetName.textContent = data.destinations[currentPlanetIndex].name
    planetDesc.textContent = data.destinations[currentPlanetIndex].description
    planetDist.textContent = data.destinations[currentPlanetIndex].distance
    planetTravel.textContent = data.destinations[currentPlanetIndex].travel
}

setPlanetData()
