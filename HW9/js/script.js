// // 1 
// const dayTime = prompt('Введите время суток (утро, день, вечер)').toLowerCase()

// if (dayTime) {
//     if (typeof dayTime ==='string') {
//         if (dayTime === 'утро') {
//             alert('Предлагаю вам выпить кофе!')
//         } else if (dayTime === 'день') {
//             alert('Предлагаю вам пить чай!')
//         } else if (dayTime === 'вечер') {
//             alert('Предлагаю вам пить горячий шоколад!')
//         } else {
//             alert('Введенное время суток не соответствует утро, день, вечер.')
//         }
//     } else {
//         alert('Введите корректное время суток в формате строки.')
//     }
// } else {
//     alert('Время суток не введено')
// }

// // 2 
// const name = prompt('Введите ваше имя')
// const age = prompt('Введите ваш возраст')
// const subject = prompt('Введите предмет')
// const grade = prompt('Введите вашу оценку')

// const student = {
//     name: name,
//     age: age,
//     subject: subject,
//     grade: grade
// }

// alert(student.name + ' ' + student.age + ' ' + student.subject + ' ' + student.grade)
// console.log(student)

// // 3 
// const movies = [
//     { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
//     { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
//     { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
//     { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
//     { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
// ];

// console.log(movies[1].director);
// console.log(movies[3].genre)

// // 4
// const shopList = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"]

// shopList.unshift("кефир")
// // shopList.splice(0, 0, "кефир")

// shopList.pop()
// // shopList.splice(shopList.length - 1, 1)

// shopList.splice(2, 1, "мясо", "сыр")
// console.log(shopList)
