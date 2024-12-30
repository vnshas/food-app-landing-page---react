import Logo from "../../assets/Logo.svg"
import styles from "./styles.module.css"


export const Header = () =>{
    return(
        <header>
            <div className="container">
                <div className={styles.logoBox}><img src={Logo} alt="Logo food app" /></div>
            </div>
        </header>
    )
}