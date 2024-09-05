import HomeBanner from "./components/home/banner";
import HomeDiscover from "./components/home/discover";
import HomeIntro from "./components/home/intro";
import HomeLogoList from "./components/home/list-logo";
import HomePricing from "./components/home/pricing";
import HomeVideo from "./components/home/video";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeLogoList />
      <HomeIntro />
      <HomeDiscover />
      <HomeIntro />
      <HomeVideo />
      <HomeIntro />
      <HomePricing />
      <HomeIntro />
    </>
  );
}
