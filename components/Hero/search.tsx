'use client';
import AsyncSelect from 'react-select/async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import Select,{ components } from "react-select";
import Image from "next/image";
import { countries } from '../Common/Utils/countries';
import Order from '../Order';
import ProductList from '../Order/ProductList';
import { useState } from 'react';

  const formatOptionLabel = ({ value, label }) => (
    <div style={{ display: "flex"}}>
      <div style={{ marginLeft: "10px" }}>
        <Image
        src= {`http://45.119.87.103:8090/upload/2023-06-29/${value}.svg`}
        alt="author" width="40" height="40"
        />
      </div>
      <div style={{ marginLeft: "10px", display:'flex',alignItems:'center' }}>{label}</div>
    </div>
  );
const SearchLocation = () => {
  const [country, setCountry] = useState('');
      const customStyles = {
        dropdownIndicator: (base: any) => ({
          ...base,
        //   display: "none", // Custom colour
        }),
        indicatorSeparator: () => ({ display: "none" }),
        indicatorsContainer: () => ({
          padding: "8px",
          display: "flex",
        }),
        control: (baseStyles, state) => ({
          ...baseStyles,
          outLine: "red",
          boxShadow: "0 30px 35px -2px rgba(0,0,0,.15)",
          border: "none",
          height: "80px",
          borderRadius: "10px",
          flexDirection: "row-reverse",
          // "&:hover": {
          //     backgroundColor: '#e2e7ee',
          //   }
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          color:'black',
          backgroundColor: state.isSelected ? "#d5d9de70" : "",
          "&:hover": {
            backgroundColor: "#d5d9de70",
          },
        }),
        clearIndicator: (base: any) => ({
          ...base,
          position: "absolute",
          right: 0,
        }),
      };
      const ClearIndicator = (props) => {
        return (
          <components.ClearIndicator {...props}>
           <div className= "close-icon" ></div>
           {/* <div className= "search-icon-wr" ></div> */}
          </components.ClearIndicator>
        );
      };
      const DropdownIndicator = (props) => {
        return (
          <components.DropdownIndicator {...props}>
           <div className= "search-icon-wr" ></div>
          </components.DropdownIndicator>
        );
      };
    //   const CaretDownIcon = () => {
    //     return <FontAwesomeIcon icon="search" style={{padding: '10px'}}/>;
    //   };
    // <div className={props.selectProps.isClearable ?'close-icon': 'search-icon-wr'} ></div>
    return (
      <>
        <section className="relative z-20 mt-[-40px]">
          <div className="container">
          <Select
                formatOptionLabel={formatOptionLabel}
                options={countries}
                components={{ClearIndicator,DropdownIndicator}}
                styles={customStyles}
                isClearable
                placeholder={"Enter your nationality to begin"}
            />
         <ProductList country={country}/>
          </div>
           
        </section>
      </>
    );
    }
export default SearchLocation;