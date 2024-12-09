// 1
const ul = document.createElement("ul")
const listItems = ["Введение в DOM", "Создание элементов", "Изменение атрибутов"]
const info = document.querySelector('#info')

for (let i = 0; i < listItems.length; i++){
    const li = document.createElement("li")
    li.textContent = listItems[i]
    ul.append(li)
}

info.append(ul)

// 2 
const link = document.createElement("a")
const header = document.getElementById("header")

link.textContent = "Мой профиль в Linkedin/Instagram/другая любая соц.сеть"
link.href = "https://www.instagram.com/"
link.target = "_blank"

header.append(link)

// 3 
const dynamicSection = document.createElement("section")

dynamicSection.className = "dynamic"

const sectionH2 = document.createElement('h2')
sectionH2.textContent = "Обучение JavaScript"
dynamicSection.append(sectionH2)

const sectionP = document.createElement('p')
sectionP.textContent = "Динамическое создание элементов позволяет улучшить интерфейс пользователя"
dynamicSection.append(sectionP)

const main = document.getElementById("main")
main.prepend(dynamicSection)

// 4
const infoPar = info.querySelector('p')
info.removeChild(infoPar)

// 5 
const footer = document.querySelector("#footer")

footer.innerHTML = ""
