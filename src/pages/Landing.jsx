import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";

import { useLocation } from "react-router-dom"

function Landing ()
{
    const data = useLocation()
    //console.log(data)

    return (
    <section className="bg-black px-10 py-5">
    <div className="bg-[#efefef] p-10 border rounded-md">
      {/* Header */}
      <Header username={data.state.user}/>

      {/* Card */}
      <section className="flex justify-between gap-7 my-5 flex-wrap">
        <Card bgcolor={"#00CED1"} title={"23"} subtitle={"Chennai"} />
        <Card bgcolor={"#FF69B4"} title={"Decemeber"} subtitle={"09.30.17"} />
        <Card bgcolor={"#BA68C8"} title={"Build Using"} subtitle={"React"} />
      </section>
      
      {/*Todo Conatiner */}
      <TodoContainer />

    </div>
  </section>

    )
}

export default Landing