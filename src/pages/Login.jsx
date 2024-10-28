import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {
    
    const navigate = useNavigate()//useNavigate give one function, that function i stored in navigate variable 
    const [usernameInput, setusernameInput] = useState()
    const [userpasswrdInput, setuserpasswrdInput] = useState()
    const [registerUser, setregisterUser] = useState(true)

    const users = props.users

    const handleuserInput = (e) => {
        setusernameInput(e.target.value)
    }

    const handlepasswrdInput = (e) => {
        setuserpasswrdInput(e.target.value)
    }

    const checkUser = () => {

        let userfound = false// userfound false-not means

        console.log(users)
        users.forEach((item) => {
            if (item.username === usernameInput && item.password === userpasswrdInput) {

                console.log("Login Succesful")
                userfound = true//if user was found means login was successfull
                navigate("/landing", { state: {user:usernameInput}})//entered user name value vavigate to another page 
            }
        })
        
        if (userfound === false) {
            setregisterUser(false)//if user not found means registerUser give (red line you have to signup first)
            console.log("Login failed")//if user not found means not login it will give error go to signup first and then login
        }
    }
    return (
        <div className="bg-black px-10 py-5">

            <div className="bg-[#efefef] p-10 border rounded-md">

                <h1 className="text-3xl font-medium">Hey! Hi</h1>
                {registerUser ? <p>I help you manage your activities after you login :)</p> : <p className="text-red-500">Please Sign Up before you Login</p>}

                <div className="flex flex-col gap-2 my-2">

                    <input type="text"
                        className="w-52 border border-black rounded-md p-1 bg-transparent"
                        placeholder="username"
                        onChange={handleuserInput} />

                    <input type="text"
                        className="w-52 border border-black rounded-md p-1 bg-transparent"
                        placeholder="password"
                        onChange={handlepasswrdInput} />

                    <button className="bg-[#FF69B4] text-white w-24 p-1 border rounded-md"
                        onClick={checkUser}>
                        Login
                    </button>
                    {/*When i click a login link it was take me to login page*/}
                    <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>

                </div>
            </div>

        </div>
    )
}

export default Login