const projectId = document.querySelector("#projectgrid")
const dataProject = document.querySelector(".data")
const modalContainer = document.querySelector(".project-modal")
const closebtn = document.querySelector(".closebtn")
const body = document.querySelector("body")

dataProject.addEventListener('click', () => {
  modalContainer.style = "display: block"
  body.style = "overflow: hidden;"
})

closebtn.addEventListener("click", () => {
    modalContainer.style = "display: none" 
    body.style = "overflow: scroll;" 
})