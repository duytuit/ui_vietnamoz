import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="bp-container">
            <h1 className="banner-h1">
              The fastest way to get your <br /> VietNam Visa approval
            </h1>
            <div className="banner-text-wr ng-tns-c5-3 ng-star-inserted">
              <h1 className="banner-h2 ng-trigger ng-trigger-bannerText">
                Get VN Visa approval in 12 hours with Express Service
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
