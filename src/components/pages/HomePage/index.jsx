import { AboutSection } from "../../AboutSection"
import { BannerSection } from "../../BannerSection"
import { Footer } from "../../Footer"
import { FormSection } from "../../FormSection"
import { Header } from "../../Header"
import { RestaurantSection } from "../../RestaurantSection"


export const HomePage = () =>{
    return(
        <>
        <Header />
        <main>
            <BannerSection />
            <RestaurantSection />
            <AboutSection />
            <FormSection />
        </main>
        <Footer />   
        </>
    )
}