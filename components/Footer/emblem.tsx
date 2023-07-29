"use client"
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

const Emblem = () => {
 
  const _scrollTop =()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  
  }
  return (
    <>
     <div className="ng-tns-c4-5 pt-16 md:pt-20 lg:pt-24">
          <div className="VietNam-time dark:text-black">
            <div className="ml-9">VietNam Local Time - {  moment(new Date()).format('HH:mm')}</div>
          </div>
          <div className="cta-wr dark:bg-black">
            <div className="bp-container">
            <div className="container mx-auto flex flex-wrap px-2 py-4">
              <div className="h-full p-4 xss:w-full lg:w-1/2 lg:flex lg:justify-center lg:items-center">
                <div className="cta-column">
                    <h1 className="black dark:text-white text-[22px] font-[400]">
                    Want your VN Visa by {new Date().toDateString()}?
                    </h1>
                    <h1 className="bp-h1 pink">Apply within 5 Hrs 41 Mins</h1>
                  </div>
              </div>
              <div className="h-full p-4 xss:w-full lg:w-1/2 lg:flex lg:justify-center lg:items-center">
              <a onClick={_scrollTop} className="flex justify-center py-3 px-7 cursor-pointer text-base font-bold border-[1px] rounded-[2rem] text-white hover:opacity-70 dark:text-white btn-cta">
                  apply now &nbsp;&nbsp; <FontAwesomeIcon icon={faCheck} height={25} width={25} />
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default Emblem;
