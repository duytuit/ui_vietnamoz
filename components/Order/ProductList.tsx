import { FC, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { formatCurrencyV2 } from "../Common/Utils/Helper";
export interface productProps {
  serviceVisas?:any
  national?:any
}
export interface serviceVisasType {
  product: string;
  service: string;
  currencies: string;
}


const ProductList: FC<productProps> = ({ serviceVisas =null,national }) => {
  // const searchParams = useSearchParams();
  const [entry, setEntry] = useState(null);
  const [currency, setCurrency] = useState(true);
  console.log('serviceVisas',serviceVisas?.product?.rows);
  const handleEntry = (value)=>{
    setEntry(value)
  }
  const handleCurrency = ()=>{
    setCurrency(!currency)
   
  }
  localStorage.setItem('currency',currency ? 'USD':'VND');
  localStorage.setItem('exchange_rate',serviceVisas?.currencies?.rows[0]?.exchange_rate);
  localStorage.setItem('serviceVisas',JSON.stringify( serviceVisas));
  localStorage.setItem('national',JSON.stringify( national));
  localStorage.removeItem('register')
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
            <label htmlFor="single-entry" onClick={() => handleEntry(1)}>Single Entry</label>
            <input id="multiple-entry" name="radio-category" type="radio" />
            <label htmlFor="multiple-entry" onClick={() => handleEntry(2)}>Multiple Entry</label>
          </div>
            <div className="currency-switcher-wr ng-star-inserted xss:w-full lg:flex lg:w-auto lg:items-center lg:justify-center"  >
              <label className="currency-default"  htmlFor="currency-switcher">
                USD
                <label className="switcher" htmlFor="currency-switcher">
                   <input id="currency-switcher" type="checkbox" />
                   <div className="switcher__indicator" onClick={handleCurrency} ></div>
                <span>VND</span>
              </label>
              </label>
            </div>
          </div>
        </>
      ) : ('')}
      <div className="visa-packages-wr">
        {serviceVisas
          ? serviceVisas?.product?.rows.filter(item => entry ? item.type === entry : item.type > 0).map((value, index) => (
                <div key={index} className="card-wr ng-star-inserted dark:bg-[#1D2144] xss:!w-full lg:!w-[28%]">
                  <h1 className="product-name text-black dark:text-white">
                   {value.name}
                  </h1>
                  <h1 className="product-type">{value.type == 1 ? 'Single Entry Visa' : 'Multiple Entry Visa'}</h1>
                  <div className="card-line"></div>
                  <div className="product-price-wr">
                    <h1 className="product-price text-black dark:text-white">
                    {currency ? (value.price / serviceVisas?.currencies?.rows[0]?.exchange_rate).toFixed(2)  : formatCurrencyV2(value.price.toString())}
                    </h1>
                    <div className="currency">{currency ? 'USD' :'VND'}</div>
                  </div>
                  <p className="card-para text-black dark:text-white">
                    {value.descShort}
                  </p>
                  <Link
                    href={{
                      pathname: '/order',
                      query: { productId:value.id},
                    }}
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
