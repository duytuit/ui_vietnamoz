import { FC, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
export interface countryProps {
  country?: string;
}
const ProductList: FC<countryProps> = ({ country = null }) => {
  const searchParams = useSearchParams();
  console.log("searchParams", searchParams);
  return (
    <div className="mb-4 mt-4 w-full">
      <h1 className="bp-h1 black dark:text-white">Select a visa type</h1>
      <h1 className="bp-h1 bp-h1-grey flex justify-center">
        No hidden fees! All taxes included.
      </h1>
      <div className="search-results-control ng-star-inserted dark:bg-[#1D2144]">
        <div className="visa-type-switcher flex">
          <input id="single-entry" name="radio-category" type="radio" />
          <label htmlFor="single-entry">Single Entry</label>
          <input id="multiple-entry" name="radio-category" type="radio" />
          <label htmlFor="multiple-entry">Multiple Entry</label>
        </div>
        <div className="currency-switcher-wr ng-star-inserted">
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
      <div className="visa-packages-wr">
      <div className="card-wr ng-star-inserted dark:bg-[#1D2144]">
            <h1 className="product-name dark:text-white text-black">48 hours transit visa</h1>
            <h1 className="product-type">Single Entry Visa</h1>
            <div className="card-line"></div>
            <div className="product-price-wr">
              <h1 className="product-price dark:text-white text-black">100</h1>
              <div className="currency">USD</div>
            </div>
            <p className="card-para dark:text-white text-black">
              Connecting Flight Air Ticket Required Processing Time 2 to 4
              working days
            </p>
            <Link href={'/order'} className="bp-btn bp-btn-pink btn-proceed w-button">proceed</Link>
          </div>
      </div>
    </div>
  );
};

export default ProductList;