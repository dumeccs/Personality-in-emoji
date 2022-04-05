const emojiCollection = []
const emojiInput =  document.querySelector('#emoji-input')


const addToEndBtn= document.querySelector('#push-btn')
const addToBeginningBtn = document.querySelector('#unshift-btn')
const removeFromBeginningBtn = document.querySelector('#shift-btn')
const removeFromEndBtn = document.querySelector('#pop-btn')



const emojiPresentation = document.querySelector('#emoji-container')

function render(collection){
    let collector = ""
    for(let i = 0; i < collection.length; i++){
        collector += collection[i]
    }
    emojiPresentation.textContent = collector
}

addToEndBtn.addEventListener('click', addToEnd)
function addToEnd(){
    emojiCollection.push(emojiInput.value)
    emojiInput.value = ""
    render(emojiCollection)
}


addToBeginningBtn.addEventListener('click',addToBeginning)

function addToBeginning(){
    emojiCollection.unshift(emojiInput.value)
    emojiInput.value=""
    render(emojiCollection)
}


removeFromBeginningBtn.addEventListener('click',removeFromBeginning)
removeFromEndBtn.addEventListener('click',removeFromEnd)

function removeFromBeginning(){
    emojiCollection.shift(emojiInput.value)
    emojiInput.value=""
    render(emojiCollection)
}

function removeFromEnd(){
    emojiCollection.pop(emojiInput.value)
    emojiInput.value=""
    render(emojiCollection)
}