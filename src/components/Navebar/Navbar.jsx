
import style from "./navbar.module.css"

function Navbar( {name,age,count} ){

    return(
    <>
    <nav>
        <a href="#">home</a>
        <a href="#">about</a>
        <a href="#">contact us</a>
    </nav>

    <h2 className={style.test}>hello word {name}</h2>
    </>);
};

export default Navbar;


