import ImageGrid from "../components/ImageGrid";
import PhoneRepair from "../components/PhoneRepair";
import SkinProtection from "../components/SkinProtection";
import Footer from "../components/footer";
import HomeHeader from "../components/homeHeader";
import ServiceComponent from "../components/vodafoneCash";

const HomePage = () => {
  return (
    <>
      <HomeHeader></HomeHeader>
      <SkinProtection></SkinProtection>
      <PhoneRepair></PhoneRepair>
      <ServiceComponent></ServiceComponent>
      <ImageGrid></ImageGrid>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
