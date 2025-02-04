document.addEventListener('DOMContentLoaded', () => {

    const boxFigure = document.querySelector('.box-container__figure')
    const btnRound = document.querySelector('.btn-round')
    const btnSquare = document.querySelector('.btn-square')
    const btnColor = document.querySelectorAll('.btn-color')
    const figureInsideText = document.querySelector('.box-container__figure-text')
    const figureTextForm = document.querySelector('.inside-text')
    const figureTextInput = document.querySelector('.text-input')
    const clearBtn = document.querySelector('.clear')

    //change figure
    let isShapeSelected = false
    btnRound.addEventListener('click', () => {
        boxFigure.classList.remove('square')
        boxFigure.classList.add('round')
        isShapeSelected = true
        boxFigure.style.background = ''
        figureInsideText.textContent = ''
        isColorSelected = false
    })

    btnSquare.addEventListener('click', () => {
        boxFigure.classList.remove('round')
        boxFigure.classList.add('square')
        isShapeSelected = true
        boxFigure.style.background = ''
        figureInsideText.textContent = ''
        isColorSelected = false
    })


    // change color
    let isColorSelected = false
    for (let btn of btnColor) {
        btn.addEventListener('click', () => {
            if (isShapeSelected) {
                const figureColor = btn.getAttribute('name')
                boxFigure.style.background = figureColor
                isColorSelected = true
            } else {
                alert('Выберите фигуру!')
            }
        })
    }

    //change text
    figureTextForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (isColorSelected) {
            if (figureTextInput.value !== '') {
                figureInsideText.textContent = figureTextInput.value
                figureTextInput.value = ''
            } else {
                alert('Введите текст!')
            }
        } else {
            alert('Цвет не был выбран')
        }

    })

    //clear all
    clearBtn.addEventListener('click', () => {
        boxFigure.classList.remove('square')
        boxFigure.classList.remove('round')
        boxFigure.style.background = ''
        figureInsideText.textContent = ''
        isShapeSelected = false
        isColorSelected = false
    })
})