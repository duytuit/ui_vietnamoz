import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Emblem = () => {
  return (
    <>
     <div className="ng-tns-c4-5 pt-16 md:pt-20 lg:pt-24">
          <div className="VietNam-time">
            <div>VietNam Local Time - 1:18 PM</div>
          </div>
          <div className="cta-wr">
            <div className="bp-container">
              <div className="cta-sub-wr">
                <div className="cta-column">
                  <h1 className="bp-h1 black">
                    Want your VN Visa by Wednesday, 28 Jun 2023?
                  </h1>
                  <h1 className="bp-h1 pink">Apply within 5 Hrs 41 Mins</h1>
                </div>
                <a className="flex py-3 px-7 cursor-pointer text-base font-bold border-[1px] rounded-[2rem] text-white hover:opacity-70 dark:text-white btn-cta">
                  apply now &nbsp;&nbsp; <FontAwesomeIcon icon={faCheck} height={25} width={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default Emblem;
