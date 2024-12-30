import { RestaurantList } from "./RestaurantList"
import RestaurantIcon from "../../assets/RestaurantIcon.svg"
import styles from "./style.module.css"

export const RestaurantSection = () => {
    return(
        <section className={`${styles.restaurantSection} section-green section-padding`}>
            <div className="container">
                <img src={RestaurantIcon} alt="Restaraunt Icon" />
                <h2 className="title md white">Restaurantes famosos</h2>
                <RestaurantList />
            </div>
        </section>
    )
}