import { data } from './utils.js'
import { transitionElements } from './utils.js'
import { fadeIn } from './utils.js'
import { fadeOut } from './utils.js'

const techImg = document.getElementById('tech-img')
const techNav = document.getElementById('tech-nav')
const techName = document.getElementById('tech-name')
const techDesc = document.getElementById('tech-desc')

// technology
let currentTechIndex = 0

const techNavLinks = () => {
    let navHTML = ''
    data.technology.forEach(tech => {
        navHTML += `<li><button class='tech-nav-btn' id='${data.technology.indexOf(tech)}'>${data.technology.indexOf(tech) + 1}</button></li>`
    })
    return navHTML
}
techNav.innerHTML = techNavLinks()

document.getElementById('0').classList.add('is-active')
const navList = Array.from(document.querySelectorAll('.tech-nav-btn'))
navList.forEach(link => {
    link.addEventListener('click', async (e) => {
        await Promise.all(transitionElements.map(element => fadeOut(element)))
        currentTechIndex = Number(e.target.id)
        await setTechData()
        transitionElements.forEach(element => fadeIn(element))
        navList.forEach(link => link.classList.remove('is-active'))
        link.classList.add('is-active')
    })
})

async function setTechData() {
    const imgLoad = new Image()
    imgLoad.src = data.technology[currentTechIndex].images.portrait
    await imgLoad.decode()
    techImg.src = imgLoad.src
    techImg.alt = `${data.technology[currentTechIndex].name} sample image.`
    techName.textContent = data.technology[currentTechIndex].name
    techDesc.textContent = data.technology[currentTechIndex].description
}

setTechData()