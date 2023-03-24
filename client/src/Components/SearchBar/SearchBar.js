import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import "@fontsource/inter";
import "./style.css";

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [isFilterSection, setIsFilterSection] = useState(false);
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };
  
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };

    const onFilterClick = () =>{
      if(isFilterSection){
        setIsFilterSection(false);
      }
      else{
        setIsFilterSection(true);
      }
    };
  
    return (
      <main className="search">
        <div className="searchInputs">
          <button 
            className='filterIcon' 
            onClick={onFilterClick}>
              {
                isFilterSection ? (
                  <FilterListOffIcon id="filterBtn"/>
                ) : (
                  <FilterListIcon id = "filterBtn"/>
                )
              }
          </button>
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 5).map((value, key) => {
              return (
                <a className="dataItem" href={value.link} target="_blank">
                  <p>{value.title} </p>
                </a>
              );
            })}
          </div>
        )}
        {isFilterSection && (
          <div className="filterSection">
            <p>LOCATION</p>
            <p>GENRE</p>
            <p>CONTENT RATING</p>
          </div>
        )}
      </main>
    );
  }
  
  export default SearchBar;