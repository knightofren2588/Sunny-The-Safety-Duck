function handleClick() {

const list = document.querySelector('ul')
const input = document.querySelector('input')

const listItem = document.createElement('li')
const btn = document.createElement('button')

listItem.innerText = input.value
btn.innerText = 'X'

input.value = ''

btn.addEventListener('click', () => {
    listItem.remove()
})

list.appendChild(listItem);
listItem.appendChild(btn);
}

document.querySelector('button').addEventListener('click', handleClick)