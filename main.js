import About from "./src/pages/About"
import Home from "./src/pages/Home"
import Login from "./src/pages/Login"
import Register from "./src/pages/Register"

const app = document.getElementById('app')
const page = window.location.pathname
const userData = localStorage.getItem('userData')

switch(page){
  case "/":
    Home()
    break

  case '/register':
    userData ? Home() : Register()
    break

  case '/login':
    userData ? Home() : Login()
    break

  case '/about':
    About()
    break

  default :
    app.innerHTML += `<h1>Page not found</h1>`
}