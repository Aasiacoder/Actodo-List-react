import { Link } from 'react-router-dom'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function Signup(props) {

    const navigate = useNavigate()//when i click sigup btn next navigate (go to) Login page
    const users = props.users
    const setUsers = props.setUsers

    const [usernameInput, setusernameInput] = useState()
    const [userpasswrdInput, setuserpasswrdInput] = useState()

    const handleuserInput = (e) => {
        setusernameInput(e.target.value)
    }

    const handlepasswrdInput = (e) => {
        setuserpasswrdInput(e.target.value)
    }

    const addUsersBtn = () => {
        setUsers([...users, {username:usernameInput, password:userpasswrdInput}])
        navigate("/")//when i click signup btn then navigate to Login page
    }
    return (
        <div className="bg-black px-10 py-5">

            <div className="bg-[#efefef] p-10 border rounded-md">

                <h1 className="text-3xl font-medium">Hey! Hi</h1>
                <p>sign up here :)</p>

                <div className="flex flex-col gap-2 my-2">

                    <input type="text"
                        className="w-52 border border-black rounded-md p-1 bg-transparent"
                        placeholder="username"
                        onChange={handleuserInput} />

                    <input type="text"
                        className="w-52 border border-black rounded-md p-1 bg-transparent"
                        placeholder="password"
                        onChange={handlepasswrdInput} />

                    <input type="text"
                        className="w-52 border border-black rounded-md p-1 bg-transparent"
                        placeholder="conform password" />

                    <button className="bg-[#00CED1] text-white w-24 p-1 border rounded-md"
                        onClick={addUsersBtn}>
                        Sign Up
                    </button>
                    {/*When i click a login link it was take me to login page*/}
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>

                </div>
            </div>

        </div>
    )
}

export default Signup