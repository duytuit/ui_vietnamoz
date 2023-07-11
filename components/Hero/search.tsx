'use client';
import AsyncSelect from 'react-select/async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import Select,{ components } from "react-select";
import Image from "next/image";
import { countries } from '../Common/Utils/countries';
import ProductList from '../Order/ProductList';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCategory, fetchServiceVisas } from './api';
import { toast } from 'react-toastify';

const formatOptionLabel = ({ value, name ,slug ,id,sdfdsfdsfsdfds}) => (
  <div style={{ display: "flex" }}>
    <div style={{ marginLeft: "10px" }}>
      <Image
        src={`/client/upload/2023-07-10/${slug}.svg`}
        alt="author"
        width="40"
        height="40"
      />
    </div>
    <div
      style={{ marginLeft: "10px", display: "flex", alignItems: "center" }}
    >
      {name}
    </div>
  </div>
);
const SearchLocation = () => {
  const [country, setCountry] = useState({
     projectId:2,
     categoryId:1,
     remark:'usd',
     name:null,
  });
  const { data: serviceVisas, isLoading : isLoading_ServiceVisas } = useQuery(['ServiceVisas',country],()=> fetchServiceVisas(country));
  const [categories, setCategories] = useState({
    projectId:2
  });
  const { data: list_categories,isLoading:isLoading_Categories } = useQuery(['Categories',categories],()=> fetchCategory(categories));
    // console.log('list_categories',list_categories);
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
      const getServiceVisa = async (event)=>{
        // const category = list_categories.find( item =>item.slug === event.value);
        // if(category){
        // }
        if(event){
          setCountry({...country,categoryId:event.id,name:event.name});
        }
      }
      
    return (
      <>
        <section className="relative z-20 mt-[-40px]">
          <div className="container">
          <Select
                formatOptionLabel={formatOptionLabel}
                options={list_categories}
                getOptionLabel ={(option) => `${option.name}`}
                getOptionValue ={(option) => `${option.id}`}
                components={{ClearIndicator,DropdownIndicator}}
                styles={customStyles}
                isClearable
                placeholder={"Enter your nationality to begin"}
                onChange={getServiceVisa}
            />
            {
              serviceVisas ? (<ProductList serviceVisas={serviceVisas} national={country}/>) :('')
            }
          </div>
           
        </section>
      </>
    );
    }
export default SearchLocation;