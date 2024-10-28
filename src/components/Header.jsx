function Header(props) {
    return (
        <section>
            <h1 className="text-3xl font-medium">Hello {props.username}!</h1>
            <p>I help you manage your activities :) </p>
        </section>
    )
}

export default Header