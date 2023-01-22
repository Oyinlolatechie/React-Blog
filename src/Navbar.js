

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1 className="title">OyinlolaTechie</h1>

        <div className="links">
            <a href="/Home">Home</a>
            
            <a href="/Create" style={{
                color: "white",
                background: "#f1356d",
                borderRadius: "8px"
            }}>New Blog</a>
        </div>
        </nav>
     );
}
 
export default Navbar;