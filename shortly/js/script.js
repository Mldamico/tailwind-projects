const errMsg = document.getElementById('err-msg')
const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

const navToggle = () => {
  menuBtn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}

menuBtn.addEventListener('click', navToggle)



function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
    '((\\d{1,3}\\.){3}\\d{1,3}))' +
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
    '(\\?[;&a-z\\d%_.~+=-]*)?' +
    '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return !!pattern.test(str)
}


const formSubmit = (e) => {

  e.preventDefault()
  if (input.value === '') {
    errMsg.innerHTML = "Cannot be empty. Please enter an URL."
    input.classList.add('border-red')
  } else if (!validURL(input.value)) {
    errMsg.innerHTML = "Please enter a valid URL"
    input.classList.add('border-red')
  } else {
    input.classList.remove('border-red')
    alert("Success")
  }
}

linkForm.addEventListener('submit', formSubmit)