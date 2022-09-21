import Navbar from "../components/Navbar"
import axios from "axios";
const app = document.getElementById('app')

window.handleLogin = (event)=>{
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    axios.post("http://localhost:3000/login", {email, password})
    .then(res => {
        localStorage.setItem("userData", JSON.stringify(res.data));
        window.location.href = "/";
    })
    .catch(err => {
        console.error(err);
        alert(err.response.data);
    })

}

export default function Login(){
    document.title = "Login Page"
    app.innerHTML = `
    ${Navbar()}
    <div class="bg-slate-100 w-screen min-h-screen p-6">
        <h1>Login</h1>
        <form class="flex flex-col gap-4 font-light max-w-[300px] mx-auto" autocomplete="off" onsubmit="handleLogin(event)">
            <div class="flex flex-col gap-2">
                <label for='email'>email</label>
                <input type='email' id='email' required class="h-10 px-3 rounded-lg" />
            </div>

            <div class="flex flex-col gap-2">
                <label for='password'>password</label>
                <input type='password' id='password' required class="h-10 px-3 rounded-lg" />
            </div>

            <button type="submit" class="h-10 text-white bg-orange-500 hover:bg-orange-400 w-[30%] ml-auto rounded-lg">Login</button>
        </form>
    </div>
    `
}