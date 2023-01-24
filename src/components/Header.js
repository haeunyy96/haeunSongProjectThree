// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import img from "../logo.png"

// const element = <FontAwesomeIcon icon={faCircleInfo} />


const Header = () => {
    return (
        <>
            {/* <nav>
                <button className="navButton">{element}</button>
            </nav> */}
            <header className="container">
                <img className="logo" src={img} alt="image of a poke bowl"/>
                <h1>
                    <span className='titleSpan'>What's for dinner?</span>
                </h1>
            </header>
        </>

    );
}

export default Header;