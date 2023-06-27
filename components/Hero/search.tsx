'use client';
import AsyncSelect from 'react-select/async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import Select,{ components } from "react-select";
import Image from "next/image";

export interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }
  
  export const colourOptions: readonly ColourOption[] = [
    { value: 'ocean', label: "Ocean" , color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];
  
  // let bigOptions = [];
  // for (let i = 0; i < 10000; i++) {
  // 	bigOptions = bigOptions.concat(colourOptions);
  // }
  const options = [
    { value: "Abe", label: "Abe", customAbbreviation: "https://www.dubaivisa.com/assets/flags/LC.svg" },
    { value: "John", label: "John", customAbbreviation: "https://www.dubaivisa.com/assets/flags/LC.svg" },
    { value: "Dustin", label: "Dustin", customAbbreviation: "https://www.dubaivisa.com/assets/flags/LC.svg" }
  ];
  
  const formatOptionLabel = ({ value, label, customAbbreviation }) => (
    <div style={{ display: "flex"}}>
      <div style={{ marginLeft: "10px" }}>
        <Image
        src= {customAbbreviation}
        alt="author" width={40} height={40}
        />
      </div>
      <div style={{ marginLeft: "10px", display:'flex',alignItems:'center' }}>{label}</div>
    </div>
  );

const SearchLocation = () => {
    const filterColors = (inputValue: string) => {
        return colourOptions.filter((i) =>
          i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
      };
      
      const loadOptions = (
        inputValue: string,
        callback: (options: ColourOption[]) => void
      ) => {
        setTimeout(() => {
          callback(filterColors(inputValue));
        }, 1000);
      };
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
                // defaultValue={options[0]}
                formatOptionLabel={formatOptionLabel}
                options={options}
                components={{ClearIndicator,DropdownIndicator}}
                styles={customStyles}
                isClearable
                placeholder={"Enter your nationality to begin"}
            />
          </div>
        </section>
      </>
    );
    }
export default SearchLocation;