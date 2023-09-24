function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const closeBtn = document.querySelectorAll(".modal-close")
const formulaire = document.querySelector("form")
const modalContent = document.querySelector(".modal-body")
const modalSuccess = document.querySelector(".modal-body-success")
const modalBtnSuccess = document.querySelector(".modal-body-success-btn")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// launch modal close event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal))

// CLose modal
function closeModal() {
  modalbg.classList.remove('modal-open-animation');
  modalbg.classList.add('modal-close-animation');
  setTimeout(function() {
    modalbg.style.display = "none"
    modalSuccess.setAttribute("style", "display:none;")
  }, 600);
}

// launch modal form
function launchModal() {
  modalContent.setAttribute("style", "display:block;")
  modalbg.classList.remove('modal-close-animation');
  modalbg.classList.add('modal-open-animation');
  modalbg.style.display = "block"
}

function afficheInfosConsole(userData) {
  for (let i = 0; i < userData.length; i++) {
    console.log(userData[i])
  }
}

// VALIDATION FORM
formulaire.addEventListener("submit", (event) => {
  event.preventDefault()

  let userData = []
  let validForm = true

  // Vérifier si le Prénom est > 2 caractères
  const formDivFirstName = document.querySelector(".formData-first")
  const formValueFirstName = document.getElementById("first").value
  const regexName = new RegExp("^[a-zA-Z]{2,}$")
  if (!regexName.test(formValueFirstName)) {
    formDivFirstName.setAttribute("data-error-visible", "true")
    validForm = false
  } else {
    formDivFirstName.setAttribute("data-error-visible", "false")
    userData.push(formValueFirstName)
  }

  // Vérifier si le Nom est > 2 caractères
  const formDivLastName = document.querySelector(".formData-last")
  const formValueLastName = document.getElementById("last").value
  if (!regexName.test(formValueLastName)) {
    formDivLastName.setAttribute("data-error-visible", "true")
    validForm = false
  } else {
    formDivLastName.setAttribute("data-error-visible", "false")
    userData.push(formValueLastName)
  }

  // Vérifier L' email
  const formDivEmail = document.querySelector(".formData-mail")
  const formValueEmail = document.getElementById("email").value
  const regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]")
  if(!regexEmail.test(formValueEmail)) {
    formDivEmail.setAttribute("data-error-visible", "true")
    validForm = false
  } else {
    formDivEmail.setAttribute("data-error-visible", "false")
    userData.push(formValueEmail)
  }

  // Calculer l'age de l'utilisateur
  const formDivBirthdate = document.querySelector(".formData-birthdate")
  const formValueBirthdate = document.getElementById("birthdate").value
  const dateActuelle = new Date()
  const dateNaissance = new Date(formValueBirthdate)
  const ageUtilisateur = dateActuelle.getFullYear() - dateNaissance.getFullYear()

  if(ageUtilisateur < 18 || formValueBirthdate === "") {
    formDivBirthdate.setAttribute("data-error-visible", "true")
    validForm = false
  } else {
    formDivBirthdate.setAttribute("data-error-visible", "false")
    userData.push(formValueBirthdate)
  }

  // Vérifier Nb tournois
  const formDivNbTournois = document.querySelector(".formData-quantity")
  const formValueNbTournois = document.getElementById("quantity").value
  if (formValueNbTournois < 0 || formValueNbTournois > 99 || formValueNbTournois === "") {
    formDivNbTournois.setAttribute("data-error-visible", "true")
    validForm = false
  } else {
    formDivNbTournois.setAttribute("data-error-visible", "false")
    userData.push(formValueNbTournois)
  }

  // Choisir un tournois
  const formDivTournoi = document.querySelector(".formData-location")
  const formAllTournoi = document.querySelectorAll('input[name="location"]')
  let formTournoi = ""
  for (let i = 0; i < formAllTournoi.length; i++) {
    if (formAllTournoi[i].checked) {
      formTournoi = formAllTournoi[i].value
      break
    }
  }
  if (formTournoi === "") {
    formDivTournoi.setAttribute("data-error-visible", "true")
    validForm = false
  } else {
    formDivTournoi.setAttribute("data-error-visible", "false")
    userData.push(formTournoi)
  }

  // Accepter les conditions
  const formDivCondistionUsers = document.querySelector(".formData-conditions")
  const formCondistionUsers = document.getElementById("checkbox1")
  if (!formCondistionUsers.checked) {
    formDivCondistionUsers.setAttribute("data-error-visible", "true")
    validForm = false
  } else {
    formDivCondistionUsers.setAttribute("data-error-visible", "false")
  }
  
  // Message de validation du formulaire
  if(validForm){
    modalContent.setAttribute("style", "display:none;")
    modalSuccess.setAttribute("style", "display:flex;")

    afficheInfosConsole(userData)

    modalBtnSuccess.addEventListener("click", () => {
      modalSuccess.setAttribute("style", "display:none;")
    })
  }
})


