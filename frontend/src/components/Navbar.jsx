import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { A11yContext } from '../context/a11y-context';

export default function Navbar () {
    const {expanded, onToggle} = useContext(A11yContext)

    const hamburgerIcon = <svg height="50" viewBox="0 0 24 24" width="53" aria-hidden="true">
                        <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z" fill="currentColor"></path>
                        </svg>
    const closeIcon = <svg width="50" height="50" viewBox="0 0 1024 1024" aria-hidden="true">
                        <path d="M777.856 280.192l-33.92-33.952-231.872 231.872-231.84-231.872-33.984 33.888 231.872 231.904-231.84 231.84 33.888 33.984 231.904-231.904 231.84 231.872 33.952-33.888-231.872-231.904z" fill="currentColor"/></svg>

    const headerStyle = {
        "--padding-block": "1rem 0"
    }
    
    return (
        <header className="centered-column" style={headerStyle}>
            <a href="/">
                <img src="/images/logo.png" alt="Back to Fringe homepage" height="89" width="68"/>
            </a>
            <nav className='site-navigation' aria-labelledby='nav-label'>
                <span id='nav-label' hidden>Site</span>

                <button onClick={onToggle} className='nav-toggle' aria-expanded={expanded}>
                    { expanded ?  closeIcon : hamburgerIcon }
                    <span className='sr-only'>{expanded ? "Close Navigation" : "Open Navigation" }</span>
                </button>
                <div role='group' className='nav-content' aria-label='Navigation'>
                    <ul role='list' >
                        <li><NavLink to="/" >Trending</NavLink></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};
