import Banner from "@/components/ui/Banner";
import { FeaturesSection } from "@/components/ui/FeaturesSection";
import NewArrival from "@/components/ui/NewArrival";
import { NewsletterSection } from "@/components/ui/NewsletterSection";
import { ShopTheEdit } from "@/components/ui/ShopTheEdit";
import Testimonials from "@/components/ui/Testimonials";


const HomePage = () => {
    return (
        <div>
          <Banner></Banner>  
          <FeaturesSection></FeaturesSection>
          <ShopTheEdit></ShopTheEdit>
          <NewArrival></NewArrival>
          <Testimonials></Testimonials>
          <NewsletterSection></NewsletterSection>
        </div>
    );
};

export default HomePage;