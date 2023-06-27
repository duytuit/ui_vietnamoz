"use client";

import { after } from "node:test";
import { useEffect, useState } from "react";

const Accordion=(props) =>{
    const [isShowing, setIsShowing] = useState(false);
    const toggle = () => {
      setIsShowing(!isShowing);
    };
  return (
    <>
       <div className="ng-star-inserted">
            <button  className={`${isShowing ? "accordion_active active" : "accordion"}`} onClick={toggle}>
             {props.title}
            </button>
            <div className={`${isShowing ? "panel_on" : "panel"}`} >
              <div className="faq-answer bg-white"  dangerouslySetInnerHTML={{__html: props.content}}>
              </div>
            </div>
          </div>
    </>
  );
}
export default Accordion;
