import Banner from "@/components/ui/Banner";
import { FeaturesSection } from "@/components/ui/FeaturesSection";
import NewArrival from "@/components/ui/NewArrival";


const HomePage = () => {
    return (
        <div>
          <Banner></Banner>  
          <FeaturesSection></FeaturesSection>
          <NewArrival></NewArrival>
        </div>
    );
};

export default HomePage;