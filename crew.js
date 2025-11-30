import { data } from './data/data.js'
import { transitionElements } from './utils.js'
import { fadeIn } from './utils.js'
import { fadeOut } from './utils.js'

const crewImg = document.getElementById('crew-img')
const crewNav = document.getElementById('crew-nav')
const crewName = document.getElementById('crew-name')
const crewBio = document.getElementById('crew-bio')
const crewRole = document.getElementById('crew-role')


// crew
let currentCrewIndex = 0

const crewNavLinks = () => {
    let navHTML = ''
    data.crew.forEach(member => {
        navHTML += `<li><button class='crew-nav-btn' id=${data.crew.indexOf(member)}></button></li>`
    })
    return navHTML
}
crewNav.innerHTML = crewNavLinks()

document.getElementById('0').classList.add('is-active')
const navList = Array.from(document.querySelectorAll('.crew-nav-btn'))
navList.forEach(link => {
    link.addEventListener('click', async (e) => {
        await Promise.all(transitionElements.map(element => fadeOut(element)))
        currentCrewIndex = Number(e.target.id)
        setCrewData()
        transitionElements.forEach(element => fadeIn(element))
        navList.forEach(link => link.classList.remove('is-active'))
        link.classList.add('is-active')
    })
})

function setCrewData() {
    crewImg.src = data.crew[currentCrewIndex].images.webp
    crewImg.alt = data.crew[currentCrewIndex].name
    crewName.textContent = data.crew[currentCrewIndex].name
    crewBio.textContent = data.crew[currentCrewIndex].bio
    crewRole.textContent = data.crew[currentCrewIndex].role
}

setCrewData()