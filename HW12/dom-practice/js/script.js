document.addEventListener('DOMContentLoaded', () => {
    // //////////////////////////////////////////////////// 1
    const books = [
        {
            title: "Python для анализа данных, 3-е издание",
            price: "$34.96",
            image: "https://itbook.store/img/books/9781098104030.png",
            url: "https://itbook.store/books/9781098104030"
        },
        {
            title: "Проектирование программ на С++",
            price: "$48.99",
            image: "https://itbook.store/img/books/9781098113162.png",
            url: "https://itbook.store/books/9781098113162"
        },
        {
            title: "Руководство по Flutter и Dart",
            price: "$42.99",
            image: "https://itbook.store/img/books/9781098119515.png",
            url: "https://itbook.store/books/9781098119515"
        },
        {
            title: "Справочник по Raspberry Pi",
            price: "$14.99",
            image: "https://itbook.store/img/books/9781098130923.png",
            url: "https://itbook.store/books/9781098130923"
        }
    ];

    const booksWrapper = document.querySelector('.books')
    let html = ''
    for (let book of books) {
        html +=
            `
         <a href="${book.url}" class="books-item">
          <div class="books-img">
            <img src="${book.image}" alt="">
          </div>
          <div class="books-info">
            <h6 class="books-title">${book.title}</h6>
            <span class="books-price">${book.price}</span>
          </div>
        </a>
        `
    }
    booksWrapper.innerHTML = html

    // //////////////////////////////////////////////////// 2
    const testimonials = document.querySelector('.testimonials')
    const testimonialsContainer = document.querySelector('.testimonials-container')
    const testimonialsItems = document.querySelectorAll('.testimonials-item')
    const testimonialsBtns = document.querySelectorAll('.testimonials-btn')
    const testimonialsLeftBtn = testimonialsBtns[0]
    const testimonialsRightBtn = testimonialsBtns[1]

    let sliderIndex = 0
    const testimonialsWidth = testimonials.offsetWidth //800

    function moveSlider(sliderIndex) {
        testimonialsContainer.style.marginLeft = `-${sliderIndex * testimonialsWidth}px`
    }

    function moveRight() {
        if (sliderIndex !== testimonialsItems.length - 1) {
            sliderIndex++
            moveSlider(sliderIndex)
        }

    }

    function moveLeft() {
        if (sliderIndex !== 0) {
            sliderIndex--
            moveSlider(sliderIndex)
        }

    }

    testimonialsLeftBtn.addEventListener('click', moveLeft)
    testimonialsRightBtn.addEventListener('click', moveRight)

    // //////////////////////////////////////////////////// 3
    const supportForm = document.querySelector('.support-form')
    const inputName = document.querySelector('input[name="name"]')
    const inputEmail = document.querySelector('input[name="email"]')
    const inputMessage = document.querySelector('textarea[name="message"]')


    function validateInput(input, errorMessage) {
        if (input.value.trim() === '') {
            input.classList.add('error')
            input.nextElementSibling.textContent = `${errorMessage} отсутствует. Заполните все поля`
            return false
        } else {
            input.classList.remove('error')
            input.nextElementSibling.textContent = ``
            return true
        }
    }

    supportForm.addEventListener('submit', (e)=> {
        e.preventDefault();
        const nameIsValid = validateInput(inputName, 'Имя')
        const emailIsValid = validateInput(inputEmail, 'Почта')
        const messageIsValid = validateInput(inputMessage, 'Сообщение')

        if (nameIsValid && emailIsValid && messageIsValid) {
            alert('Message sent!')
            supportForm.reset() // все инпуты в форме пустые
        }
    })

    // //////////////////////////////////////////////////// 4
    const navLinks = document.querySelectorAll('.nav-link')
    for (let link of navLinks) {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const sectionId = link.getAttribute('href')
            document.querySelector(sectionId).scrollIntoView({
                behavior: 'smooth'
            })
        })
    }



})