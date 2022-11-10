

const toggleButton =  document.getElementsByClassName('toggle-button')[0]
const navlinks = document.getElementsByClassName('links')[0]

toggleButton.addEventListener('click',() => {
    navlinks.classList.toggle('active')
})