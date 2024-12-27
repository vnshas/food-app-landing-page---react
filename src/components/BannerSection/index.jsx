import BannerImg from "../../assets/FoodBanner.png"


export const BannerSection = () =>{
    return(
        <section>
            <div>
                <h1>
                Descubra o melhor
                aplicativo de comida
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus tempor ullamcorper. Vivamus porta lorem eu quam ultricies, non imperdiet erat elementum.</p>
                <a href="#"></a>
            </div>
            <img src={BannerImg} alt="Banner comidas" />
        </section>
    ) 
}