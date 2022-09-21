import Navbar from "../components/Navbar"

const app = document.getElementById('app')

export default function Home(){
    document.title = "Home Page"
    app.innerHTML = `
    ${Navbar()}
    <div class="bg-slate-100 w-screen min-h-screen p-6">
        <h1>Home</h1>
    </div>
    
    `
}