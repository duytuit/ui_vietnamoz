import { FC, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
export interface productProps {
  serviceVisas?:any
}
export interface serviceVisasType {
  product: string;
  service: string;
  currencies: string;
}
const ProductList: FC<productProps> = ({ serviceVisas =null }) => {
  const searchParams = useSearchParams();
  console.log('serviceVisas',serviceVisas?.product?.rows);
  
  return (
    <div className="mb-4 mt-4 w-full">
      { serviceVisas?.product?.rows.length > 0 ? (
        <>
          <h1 className="bp-h1 black dark:text-white">Select a visa type</h1>
           <h1 className="bp-h1 bp-h1-grey flex justify-center">
             No hidden fees! All taxes included.
           </h1>
          <div className="search-results-control ng-star-inserted dark:bg-[#1D2144] lg:!flex-row ">
          <div className="visa-type-switcher flex xss:w-full lg:flex lg:w-auto lg:items-center lg:justify-center">
            <input id="single-entry" name="radio-category" type="radio" />
            <label htmlFor="single-entry">Single Entry</label>
            <input id="multiple-entry" name="radio-category" type="radio" />
            <label htmlFor="multiple-entry">Multiple Entry</label>
          </div>
          <div className="currency-switcher-wr ng-star-inserted xss:w-full lg:flex lg:w-auto lg:items-center lg:justify-center">
            <label className="currency-default" htmlFor="currency-switcher">
              USD
            </label>
            <label className="switcher" htmlFor="currency-switcher">
              <input id="currency-switcher" type="checkbox" />
              <div className="switcher__indicator"></div>
              <span>VND</span>
            </label>
          </div>
          </div>
        </>
      ) : ('')}
      <div className="visa-packages-wr">
        {serviceVisas
          ? serviceVisas?.product?.rows.map((value, index) => (
                <div key={index} className="card-wr ng-star-inserted dark:bg-[#1D2144] xss:!w-full lg:!w-[28%]">
                  <h1 className="product-name text-black dark:text-white">
                   {value.name}
                  </h1>
                  <h1 className="product-type">{value.type == 1 ? 'Single Entry Visa' : 'Multiple Entry Visa'}</h1>
                  <div className="card-line"></div>
                  <div className="product-price-wr">
                    <h1 className="product-price text-black dark:text-white">
                    {value.price}
                    </h1>
                    <div className="currency">USD</div>
                  </div>
                  <p className="card-para text-black dark:text-white">
                    {value.descShort}
                  </p>
                  <Link
                    href={"/order"}
                    className="bp-btn bp-btn-pink btn-proceed w-button"
                  >
                    proceed
                  </Link>
                </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default ProductList;
