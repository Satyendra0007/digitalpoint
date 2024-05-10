const showNavItem = () => {
  const navitem = document.getElementById('navitem')
  if (navitem.style.top === "0px") {
    navitem.style.top = "-100%"
    document.body.classList.remove("stop-scrolling");
  }
  else {

    navitem.style.top = "0px"
    document.body.classList.add("stop-scrolling");
  }
}

const showLoginModal = () => {
  const loginModal = document.getElementById('login-modal')
  if (loginModal.style.display === "block") {
    loginModal.style.display = "none"
    document.body.classList.remove("stop-scrolling");
  }
  else {

    loginModal.style.display = "block"
    document.body.classList.add("stop-scrolling");
  }

}

const showSignUpModal = () => {
  const signUpModal = document.getElementById('signUp-modal')
  if (signUpModal.style.display === "block") {
    signUpModal.style.display = "none"
    document.body.classList.remove("stop-scrolling");
  }
  else {

    signUpModal.style.display = "block"
    document.body.classList.add("stop-scrolling");
  }
}


console.log("working")
