// 1
document.title = "Маргулан Жумабек"

// 2
const header = document.getElementById('header')
const h1 = header.querySelector('.site-title')

h1.textContent = "Изучение JavaScript"

// 3    
const menuLinks = document.querySelectorAll('.menu-link')

for (let link of menuLinks) {
    console.log(link.textContent)
}

// 4
const featuresList = document.querySelector('.features-list')
const features = featuresList.querySelectorAll('li')
features[1].innerHTML = "Поддержка <b>API</b>"



