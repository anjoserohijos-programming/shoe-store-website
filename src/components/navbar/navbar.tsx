import './navbar.css';
function NavBar() {
    return <div className="navigation-bar">
        <a href="/" className='logo-icon'><h1>ianshoes.</h1></a>
        <nav className='navigation-bar-buttons'>
            <ul>
                <li id='login-button'><a href="/login">Log In</a></li>
                <li id='get-started-button'><a href="/signup">Get Started</a></li>
            </ul>
        </nav>
    </div>
}
export default NavBar;