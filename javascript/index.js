let rulesButtonEl = document.getElementById("rulesButton")
let mainContainerEl = document.getElementById('mainContainer')
let mainContentEl = document.getElementById("mainContent")
let scoreCardEl = document.getElementById("scoreCard")
let scoreEl = document.getElementById("score")

let resetButtonEl = document.getElementById("resetButton")

let score

if(localStorage.getItem('score') === null){
    score = 0;
    localStorage.setItem('score', score)
}

score = localStorage.getItem('score')
scoreEl.textContent = score;


resetButtonEl.onclick = function(){
    score = 0
    localStorage.setItem('score',score)
    scoreEl.textContent = score;
}

score = parseInt(localStorage.getItem('score'))
scoreEl.textContent = score

rulesButtonEl.onclick = function(){
    let x = window.matchMedia("(max-width: 767px)")

    if(x.matches){
        mainContainerEl.classList.add("d-none")

        let rulesContainer = document.createElement('div')
        rulesContainer.classList.add("rules-container")
        document.querySelector('body').style.backgroundColor = "#ffffff"
        document.querySelector('body').appendChild(rulesContainer)

        rulesHeadingEl = document.createElement('h1')
        rulesContainer.appendChild(rulesHeadingEl)
        rulesHeadingEl.classList.add("rules-heading")
        rulesHeadingEl.textContent = "Rules"

        let rulesImageEl = document.createElement("img")
        rulesImageEl.src = "./images/image-rules.svg"
        rulesImageEl.classList.add("rules-image")
        rulesContainer.appendChild(rulesImageEl)

        let closeButtonEl = document.createElement("i")
        closeButtonEl.classList.add("fa-solid", "fa-xmark", "cross-button")
        closeButtonEl.id = "closeButton"
        rulesContainer.appendChild(closeButtonEl)

        closeButtonEl.addEventListener("click", function(){
            document.querySelector('body').style.backgroundColor = "#021a3d"
            mainContainerEl.classList.remove("d-none")
            rulesContainer.classList.add("d-none")
        })
    }
    else{
        let rulesmdContainer = document.createElement('div')
        rulesmdContainer.classList.add("rules-md-container")
        document.querySelector('body').appendChild(rulesmdContainer)

        let rulesmdMainContainerEl = document.createElement("div")
        rulesmdMainContainerEl.classList.add("rules-md-main-container")
        rulesmdContainer.appendChild(rulesmdMainContainerEl)

        rulesHeadingAndCloseIcon = document.createElement("div")
        rulesHeadingAndCloseIcon.classList.add("rules-heading-close-icon")
        rulesmdMainContainerEl.appendChild(rulesHeadingAndCloseIcon)

        rulesHeadingEl = document.createElement('h1')
        rulesHeadingAndCloseIcon.appendChild(rulesHeadingEl)
        rulesHeadingEl.classList.add("rules-heading-md")
        rulesHeadingEl.textContent = "Rules"

        let closeButtonEl = document.createElement("i")
        closeButtonEl.classList.add("fa-solid", "fa-xmark", "cross-button-md")
        closeButtonEl.id = "closeButton"
        rulesHeadingAndCloseIcon.appendChild(closeButtonEl)

        let rulesImageEl = document.createElement("img")
        rulesImageEl.src = "./images/image-rules.svg"
        rulesImageEl.classList.add("rules-md-image")
        rulesmdMainContainerEl.appendChild(rulesImageEl)

        closeButtonEl.addEventListener("click", function(){
            rulesmdContainer.classList.add("d-none")
        })
    }
}

let toChooseWindowEl = document.getElementById("toChooseWindow")
let paperEl = document.getElementById("paper")
let scissorEl = document.getElementById("scissor")
let rockEl = document.getElementById("rock")

let loadingWindowEl = document.getElementById("loadingWindow")
let myLoadingChoiceEl = document.getElementById("myLoadingChoice")
let myLoadingChoiceImageEl = document.getElementById("myLoadingChoiceImage")

let loadedChoiceWindowEl = document.getElementById("loadedChoiceWindow")
let myLoadedChoiceEl = document.getElementById("myLoadedChoice")
let myLoadedChoiceImageEl = document.getElementById("myLoadedChoiceImage")
let houseChoiceEl = document.getElementById("houseChoice")
let houseChoiceImageEl = document.getElementById("houseChoiceImage")

let resultWindowEl = document.getElementById("resultWindow")
let myResultChoiceEl = document.getElementById("myResultChoice")
let myResultChoiceImageEl = document.getElementById("myResultChoiceImage")
let houseResultChoiceEl = document.getElementById("houseResultChoice")
let houseResultChoiceImageEl = document.getElementById("houseResultChoiceImage")

let resultEl = document.getElementById("result")
let playAgainButtonEl = document.getElementById("playAgainButton")

let randomNum;

playAgainButtonEl.onclick = function(){
    toChooseWindowEl.classList.remove("d-none")
    resultWindowEl.classList.add('d-none')
}

paperEl.addEventListener("click", function(){
    myLoadingChoiceImageEl.src = './images/icon-paper.svg'
    myLoadingChoiceEl.classList.remove("scissors-image-container")
    myLoadingChoiceEl.classList.remove("rock-image-container")
    myLoadingChoiceEl.classList.add("paper-image-container")

    toChooseWindowEl.classList.add("d-none")
    loadingWindowEl.classList.remove("d-none")

    setTimeout(function(){
        randomNum = Math.ceil(Math.random() * 3)
        if(randomNum === 1){
            myLoadedChoiceImageEl.src = './images/icon-paper.svg'
            myLoadedChoiceEl.classList.remove("scissors-image-container")
            myLoadedChoiceEl.classList.remove("rock-image-container")
            myLoadedChoiceEl.classList.add("paper-image-container")

            houseChoiceImageEl.src = './images/icon-paper.svg'
            houseChoiceEl.classList.remove("scissors-image-container")
            houseChoiceEl.classList.remove("rock-image-container")
            houseChoiceEl.classList.add("paper-image-container")

            loadingWindowEl.classList.add("d-none")
            loadedChoiceWindowEl.classList.remove("d-none")

            setTimeout(function(){
                myResultChoiceImageEl.src = "./images/icon-paper.svg"
                myResultChoiceEl.classList.remove("scissors-image-container")
                myResultChoiceEl.classList.remove("rock-image-container")
                myResultChoiceEl.classList.add("paper-image-container")

                houseResultChoiceImageEl.src = './images/icon-paper.svg'
                houseResultChoiceEl.classList.remove("scissors-image-container")
                houseResultChoiceEl.classList.remove("rock-image-container")
                houseResultChoiceEl.classList.add("paper-image-container")

                resultEl.textContent = "Draw"

                playAgainButtonEl.style.color = "#021a3d"

                loadedChoiceWindowEl.classList.add('d-none')
                resultWindowEl.classList.remove("d-none")

                scoreEl.textContent = score

            }, 300)
        }
        else if(randomNum === 2){
            myLoadedChoiceImageEl.src = './images/icon-paper.svg'
            myLoadedChoiceEl.classList.remove("scissors-image-container")
            myLoadedChoiceEl.classList.remove("rock-image-container")
            myLoadedChoiceEl.classList.add("paper-image-container")

            houseChoiceImageEl.src = './images/icon-scissors.svg'
            houseChoiceEl.classList.add("scissors-image-container")
            houseChoiceEl.classList.remove("rock-image-container")
            houseChoiceEl.classList.remove("paper-image-container")

            loadingWindowEl.classList.add("d-none")
            loadedChoiceWindowEl.classList.remove("d-none")

            setTimeout(function(){
                myResultChoiceImageEl.src = "./images/icon-paper.svg"
                myResultChoiceEl.classList.remove("scissors-image-container")
                myResultChoiceEl.classList.remove("rock-image-container")
                myResultChoiceEl.classList.add("paper-image-container")

                houseResultChoiceImageEl.src = './images/icon-scissors.svg'
                houseResultChoiceEl.classList.add("scissors-image-container")
                houseResultChoiceEl.classList.remove("rock-image-container")
                houseResultChoiceEl.classList.remove("paper-image-container")

                resultEl.textContent = "You Lose"

                playAgainButtonEl.style.color = "#ed0937"

                loadedChoiceWindowEl.classList.add('d-none')
                resultWindowEl.classList.remove("d-none")

                scoreEl.textContent = score
                
            }, 300)
        }
        else{
            myLoadedChoiceImageEl.src = './images/icon-paper.svg'
            myLoadedChoiceEl.classList.remove("scissors-image-container")
            myLoadedChoiceEl.classList.remove("rock-image-container")
            myLoadedChoiceEl.classList.add("paper-image-container")

            houseChoiceImageEl.src = './images/icon-rock.svg'
            houseChoiceEl.classList.remove("scissors-image-container")
            houseChoiceEl.classList.add("rock-image-container")
            houseChoiceEl.classList.remove("paper-image-container")

            loadingWindowEl.classList.add("d-none")
            loadedChoiceWindowEl.classList.remove("d-none")

            setTimeout(function(){
                myResultChoiceImageEl.src = "./images/icon-paper.svg"
                myResultChoiceEl.classList.remove("scissors-image-container")
                myResultChoiceEl.classList.remove("rock-image-container")
                myResultChoiceEl.classList.add("paper-image-container")

                houseResultChoiceImageEl.src = './images/icon-rock.svg'
                houseResultChoiceEl.classList.remove("scissors-image-container")
                houseResultChoiceEl.classList.add("rock-image-container")
                houseResultChoiceEl.classList.remove("paper-image-container")

                resultEl.textContent = "You Win"

                playAgainButtonEl.style.color = "#021a3d"

                loadedChoiceWindowEl.classList.add('d-none')
                resultWindowEl.classList.remove("d-none")

                score += 1
                localStorage.setItem('score', score)

                scoreEl.textContent = score
                
            }, 300)
        }
    }, 500)
})

scissorEl.addEventListener("click", function(){
    myLoadingChoiceImageEl.src = './images/icon-scissors.svg'
    myLoadingChoiceEl.classList.add("scissors-image-container")
    myLoadingChoiceEl.classList.remove("rock-image-container")
    myLoadingChoiceEl.classList.remove("paper-image-container")

    toChooseWindowEl.classList.add("d-none")
    loadingWindowEl.classList.remove("d-none")

    setTimeout(function(){
        randomNum = Math.ceil(Math.random() * 3)
        if(randomNum === 1){
            myLoadedChoiceImageEl.src = './images/icon-scissors.svg'
            myLoadedChoiceEl.classList.add("scissors-image-container")
            myLoadedChoiceEl.classList.remove("rock-image-container")
            myLoadedChoiceEl.classList.remove("paper-image-container")

            houseChoiceImageEl.src = './images/icon-paper.svg'
            houseChoiceEl.classList.remove("scissors-image-container")
            houseChoiceEl.classList.remove("rock-image-container")
            houseChoiceEl.classList.add("paper-image-container")

            loadingWindowEl.classList.add("d-none")
            loadedChoiceWindowEl.classList.remove("d-none")

            setTimeout(function(){
                myResultChoiceImageEl.src = "./images/icon-scissors.svg"
                myResultChoiceEl.classList.add("scissors-image-container")
                myResultChoiceEl.classList.remove("rock-image-container")
                myResultChoiceEl.classList.remove("paper-image-container")

                houseResultChoiceImageEl.src = './images/icon-paper.svg'
                houseResultChoiceEl.classList.remove("scissors-image-container")
                houseResultChoiceEl.classList.remove("rock-image-container")
                houseResultChoiceEl.classList.add("paper-image-container")

                resultEl.textContent = "You Win"

                playAgainButtonEl.style.color = "#021a3d"

                loadedChoiceWindowEl.classList.add('d-none')
                resultWindowEl.classList.remove("d-none")

                score += 1
                localStorage.setItem('score', score)

                scoreEl.textContent = score

            }, 300)
        }
        else if(randomNum === 2){
            myLoadedChoiceImageEl.src = './images/icon-scissors.svg'
            myLoadedChoiceEl.classList.add("scissors-image-container")
            myLoadedChoiceEl.classList.remove("rock-image-container")
            myLoadedChoiceEl.classList.remove("paper-image-container")

            houseChoiceImageEl.src = './images/icon-scissors.svg'
            houseChoiceEl.classList.add("scissors-image-container")
            houseChoiceEl.classList.remove("rock-image-container")
            houseChoiceEl.classList.remove("paper-image-container")

            loadingWindowEl.classList.add("d-none")
            loadedChoiceWindowEl.classList.remove("d-none")

            setTimeout(function(){
                myResultChoiceImageEl.src = "./images/icon-scissors.svg"
                myResultChoiceEl.classList.add("scissors-image-container")
                myResultChoiceEl.classList.remove("rock-image-container")
                myResultChoiceEl.classList.remove("paper-image-container")

                houseResultChoiceImageEl.src = './images/icon-scissors.svg'
                houseResultChoiceEl.classList.add("scissors-image-container")
                houseResultChoiceEl.classList.remove("rock-image-container")
                houseResultChoiceEl.classList.remove("paper-image-container")

                resultEl.textContent = "Draw"

                playAgainButtonEl.style.color = "#021a3d"

                loadedChoiceWindowEl.classList.add('d-none')
                resultWindowEl.classList.remove("d-none")

                scoreEl.textContent = score
                
            }, 300)
        }
        else{
            myLoadedChoiceImageEl.src = './images/icon-scissors.svg'
            myLoadedChoiceEl.classList.add("scissors-image-container")
            myLoadedChoiceEl.classList.remove("rock-image-container")
            myLoadedChoiceEl.classList.remove("paper-image-container")

            houseChoiceImageEl.src = './images/icon-rock.svg'
            houseChoiceEl.classList.remove("scissors-image-container")
            houseChoiceEl.classList.add("rock-image-container")
            houseChoiceEl.classList.remove("paper-image-container")

            loadingWindowEl.classList.add("d-none")
            loadedChoiceWindowEl.classList.remove("d-none")

            setTimeout(function(){
                myResultChoiceImageEl.src = "./images/icon-scissors.svg"
                myResultChoiceEl.classList.add("scissors-image-container")
                myResultChoiceEl.classList.remove("rock-image-container")
                myResultChoiceEl.classList.remove("paper-image-container")

                houseResultChoiceImageEl.src = './images/icon-rock.svg'
                houseResultChoiceEl.classList.remove("scissors-image-container")
                houseResultChoiceEl.classList.add("rock-image-container")
                houseResultChoiceEl.classList.remove("paper-image-container")

                resultEl.textContent = "You Lose"

                playAgainButtonEl.style.color = "#ed0937"

                loadedChoiceWindowEl.classList.add('d-none')
                resultWindowEl.classList.remove("d-none")

                scoreEl.textContent = score
                
            }, 300)
        }
    }, 500)
})

rockEl.addEventListener("click", function(){
    myLoadingChoiceImageEl.src = './images/icon-rock.svg'
    myLoadingChoiceEl.classList.remove("scissors-image-container")
    myLoadingChoiceEl.classList.add("rock-image-container")
    myLoadingChoiceEl.classList.remove("paper-image-container")

    toChooseWindowEl.classList.add("d-none")
    loadingWindowEl.classList.remove("d-none")

    setTimeout(function(){
        randomNum = Math.ceil(Math.random() * 3)
        if(randomNum === 1){
            myLoadedChoiceImageEl.src = './images/icon-rock.svg'
            myLoadedChoiceEl.classList.remove("scissors-image-container")
            myLoadedChoiceEl.classList.add("rock-image-container")
            myLoadedChoiceEl.classList.remove("paper-image-container")

            houseChoiceImageEl.src = './images/icon-paper.svg'
            houseChoiceEl.classList.remove("scissors-image-container")
            houseChoiceEl.classList.remove("rock-image-container")
            houseChoiceEl.classList.add("paper-image-container")

            loadingWindowEl.classList.add("d-none")
            loadedChoiceWindowEl.classList.remove("d-none")

            setTimeout(function(){
                myResultChoiceImageEl.src = "./images/icon-rock.svg"
                myResultChoiceEl.classList.remove("scissors-image-container")
                myResultChoiceEl.classList.add("rock-image-container")
                myResultChoiceEl.classList.remove("paper-image-container")

                houseResultChoiceImageEl.src = './images/icon-paper.svg'
                houseResultChoiceEl.classList.remove("scissors-image-container")
                houseResultChoiceEl.classList.remove("rock-image-container")
                houseResultChoiceEl.classList.add("paper-image-container")

                resultEl.textContent = "You Lose"

                playAgainButtonEl.style.color = "#ed0937"

                loadedChoiceWindowEl.classList.add('d-none')
                resultWindowEl.classList.remove("d-none")

                scoreEl.textContent = score

            }, 300)
        }
        else if(randomNum === 2){
            myLoadedChoiceImageEl.src = './images/icon-rock.svg'
            myLoadedChoiceEl.classList.remove("scissors-image-container")
            myLoadedChoiceEl.classList.add("rock-image-container")
            myLoadedChoiceEl.classList.remove("paper-image-container")

            houseChoiceImageEl.src = './images/icon-scissors.svg'
            houseChoiceEl.classList.add("scissors-image-container")
            houseChoiceEl.classList.remove("rock-image-container")
            houseChoiceEl.classList.remove("paper-image-container")

            loadingWindowEl.classList.add("d-none")
            loadedChoiceWindowEl.classList.remove("d-none")

            setTimeout(function(){
                myResultChoiceImageEl.src = "./images/icon-rock.svg"
                myResultChoiceEl.classList.remove("scissors-image-container")
                myResultChoiceEl.classList.add("rock-image-container")
                myResultChoiceEl.classList.remove("paper-image-container")

                houseResultChoiceImageEl.src = './images/icon-scissors.svg'
                houseResultChoiceEl.classList.add("scissors-image-container")
                houseResultChoiceEl.classList.remove("rock-image-container")
                houseResultChoiceEl.classList.remove("paper-image-container")

                resultEl.textContent = "You Win"

                playAgainButtonEl.style.color = "#021a3d"

                loadedChoiceWindowEl.classList.add('d-none')
                resultWindowEl.classList.remove("d-none")

                score += 1
                localStorage.setItem('score', score)
                scoreEl.textContent = score
                
            }, 300)
        }
        else{
            myLoadedChoiceImageEl.src = './images/icon-rock.svg'
            myLoadedChoiceEl.classList.remove("scissors-image-container")
            myLoadedChoiceEl.classList.add("rock-image-container")
            myLoadedChoiceEl.classList.remove("paper-image-container")

            houseChoiceImageEl.src = './images/icon-rock.svg'
            houseChoiceEl.classList.remove("scissors-image-container")
            houseChoiceEl.classList.add("rock-image-container")
            houseChoiceEl.classList.remove("paper-image-container")

            loadingWindowEl.classList.add("d-none")
            loadedChoiceWindowEl.classList.remove("d-none")

            setTimeout(function(){
                myResultChoiceImageEl.src = "./images/icon-rock.svg"
                myResultChoiceEl.classList.remove("scissors-image-container")
                myResultChoiceEl.classList.add("rock-image-container")
                myResultChoiceEl.classList.remove("paper-image-container")

                houseResultChoiceImageEl.src = './images/icon-rock.svg'
                houseResultChoiceEl.classList.remove("scissors-image-container")
                houseResultChoiceEl.classList.add("rock-image-container")
                houseResultChoiceEl.classList.remove("paper-image-container")

                resultEl.textContent = "Draw"

                playAgainButtonEl.style.color = "#021a3d"

                loadedChoiceWindowEl.classList.add('d-none')
                resultWindowEl.classList.remove("d-none")

                scoreEl.textContent = score
                
            }, 300)
        }
    }, 500)
})