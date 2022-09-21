import Navbar from "../components/Navbar"

const app = document.getElementById('app')

export default function About(){
    document.title = 'About Page'
    app.innerHTML = `
    ${Navbar()}
    <div class="bg-slate-100 w-screen min-h-screen p-6">
        <h1>About</h1>
    </div>
    `
}