// // 1
// const numbers = [52, 31, 9, 85, 31, 45];
// let sum = 0;
// let i = 0
// while (i < numbers.length) {
//     sum += numbers[i]
//     i++
// }

// console.log(`Сумма чисел: ${sum}`); // 253

// // 2 
// const books = [
//   { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
//   { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
//   { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
//   { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
// ];

// for (let i = 0; i < books.length; i++) {
//   console.log(`Название: ${books[i].title}, Автор: ${books[i].author}, Кол-во стр: ${books[i].numberOfPages}, Жанр: ${books[i].genre}`)
//   console.log("Награды: ")
//   for (let j = 0; j < books[i].awards.length; j++) {
//     console.log(`- ${books[i].awards[j]}`)
//   }
//   console.log("----------------------")
// }

// // 3 
// function calculateAveragePages(array) {
//   let sumOfPages = 0;
//   for (let i = 0; i < array.length; i++) {
//     sumOfPages += array[i].numberOfPages
//   }

//   return sumOfPages / array.length
// }

// const books = [
//   { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
//   { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
//   { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
//   { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
// ];

// console.log(calculateAveragePages(books))

// // 4 
// function repeatString(str, n) {
//   let result = ""
//   for (let i = 0; i < n; i++) {
//     result += str
//   }
//   return result;
// }

// console.log(repeatString("hello", 3))


// // 5
// function calculateAverage(array) {
//   let sum = 0;
//   for (let num of array) {
//     sum += num
//   }

//   return sum / array.length
// }

// const nums = [10, 20, 30, 40, 50, 60]

// console.log(calculateAverage(nums))

// // 6 
// function countEvenNumbers(array) {
//   let even = 0;
//   for (let num of array) {
//     if (num % 2 === 0) {
//       even += 1
//     }
//   }

//   return even
// }

// const array = [10, 23, 2, 1, 5, 8]

// console.log(countEvenNumbers(array))
