import Navbar from "../components/Navbar"
import axios from "axios"

const app = document.getElementById('app')

window.handleRegister = (event)=>{
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;
    let password2 = event.target.password2.value;

    //validator
    if(!email || !password || !password2){
        return alert("Silakan Lengkapi data");
    }

    if(password !== password2){
        return alert("password harus sama")
    }

    if(password.length < 6){
        return alert("Password minimal 6 char")
    }

    axios.post('http://localhost:3000/register', {email, password})
    .then(res => {
        alert("Registrasi Berhasil");
        window.location.href = "/login";
    })
    .catch(err =>{
        alert("Terjadi Kesalahan");
        console.error(err);
    })

}

export default function Register(){
    document.title = 'Register Page'
    app.innerHTML = `
    ${Navbar()}
    <div class="bg-slate-100 w-screen min-h-screen p-6">
        <h1>register</h1>
        <form class="flex flex-col gap-4 font-light max-w-[300px] mx-auto" autocomplete="off" onsubmit="handleRegister(event)">
            <div class="flex flex-col gap-2">
                <label for='email'>email</label>
                <input type='email' id='email' required class="h-10 px-3 rounded-lg" />
            </div>

            <div class="flex flex-col gap-2">
                <label for='password'>password</label>
                <input type='password' id='password' required class="h-10 px-3 rounded-lg" />
            </div>

            <div class="flex flex-col gap-2">
                <label for='password2'>repeat password</label>
                <input type='password' id='password2' required class="h-10 px-3 rounded-lg" />
            </div>

            <button type="submit" class="h-10 text-white bg-orange-500 hover:bg-orange-400 w-[30%] ml-auto rounded-lg">Register</button>
        </form>
    </div>
    `
}