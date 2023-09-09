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
const closeBtn = document.querySelector(".close")
const formulaire = document.querySelector("form")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// CLose modal
closeBtn.addEventListener("click", () => {
  modalbg.style.display = "none"
});

// launch modal form
function launchModal() {
  modalbg.style.display = "block"
}

// VALIDATION FORM
formulaire.addEventListener("submit", (event) => {
  event.preventDefault()

  // Vérifier si le Prénom est > 2 caractères
  const formDivFirstName = document.querySelector(".formData-first")
  const formValueFirstName = document.getElementById("first").value
  if (formValueFirstName.length < 2) {
    formDivFirstName.setAttribute("data-error-visible", "true")
  } else {
    formDivFirstName.setAttribute("data-error-visible", "false")
  }

  // Vérifier si le Nom est > 2 caractères
  const formDivLastName = document.querySelector(".formData-last")
  const formValueLastName = document.getElementById("last").value
  if (formValueLastName.length < 2) {
    formDivLastName.setAttribute("data-error-visible", "true")
  } else {
    formDivLastName.setAttribute("data-error-visible", "false")
  }

  // Vérifier L' email
  const formDivEmail = document.querySelector(".formData-mail")
  const formValueEmail = document.getElementById("email").value
  let regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+")
  if(!regexEmail.test(formValueEmail)) {
    formDivEmail.setAttribute("data-error-visible", "true")
  } else {
    formDivEmail.setAttribute("data-error-visible", "false")
  }

  // Vérifier date de naissance
  const formDivBirthdate = document.querySelector(".formData-birthdate")
  const formValueBirthdate = document.getElementById("birthdate").value
  let regexBirthdate = new RegExp("^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$")
  if(!regexBirthdate.test(formValueBirthdate)) {
    formDivBirthdate.setAttribute("data-error-visible", "true")
  } else {
    formDivBirthdate.setAttribute("data-error-visible", "false")
  }

  // Vérifier Nb tournois
  const formDivNbTournois = document.querySelector(".formData-quantity")
  const formValueNbTournois = document.getElementById("quantity").value
  if (formValueNbTournois < 0 || formValueNbTournois > 99 || formValueNbTournois === "") {
    formDivNbTournois.setAttribute("data-error-visible", "true")
  } else {
    formDivNbTournois.setAttribute("data-error-visible", "false")
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
  } else {
    formDivTournoi.setAttribute("data-error-visible", "false")
  }

  // Accepter les conditions
  const formDivCondistionUsers = document.querySelector(".formData-conditions")
  const formCondistionUsers = document.getElementById("checkbox1")
  if (!formCondistionUsers.checked) {
    formDivCondistionUsers.setAttribute("data-error-visible", "true")
  } else {
    formDivCondistionUsers.setAttribute("data-error-visible", "false")
  }

})


