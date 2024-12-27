import { RestaurantList } from "./RestaurantList"
import RestaurantIcon from "../../assets/RestaurantIcon.svg"

export const RestaurantSection = () => {
    return(
        <section>
            <img src={RestaurantIcon} alt="Restaraunt Icon" />
            <h2>Restaurantes famosos</h2>
            <RestaurantList />
        </section>
    )
}