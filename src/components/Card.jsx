function Card (props) {//bgcolor, title, subtitle values will be passing through here using props
    return (
        <div style={{backgroundColor:props.bgcolor}} className="px-10 py-5 border rounded-md text-center flex-grow">
          <h1 className="font-medium text-2xl">{props.title}</h1>
          <p>{props.subtitle}</p>
        </div>
    )
}

export default Card