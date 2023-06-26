import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          {/* <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
            </div>
          </div> */}
       <FontAwesomeIcon icon="moon" color="silver" size="3x" />
<FontAwesomeIcon icon="rocket" color="rebeccapurple" size="2x" />
        </div>
      </section>
    </>
  );
};

export default Hero;
