import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing"
import { useState } from "react";

//Tailwind css color code apply here like bg-[#efefef]
const App = () => {
  const [users, setUsers] = useState(
      [
          { username: "Aasia", password: "123" },
          
      ]
  )
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Login users={users} setUsers={setUsers}/>}></Route>
                  <Route path='/signup' element={<Signup users={users} setUsers={setUsers}/>}></Route>
                  <Route path='/landing' element={<Landing />}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  )

}

export default App;