import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import SearchBar from "../Components/SearchBar/SearchBar";
import ItemList from "../Components/ItemList";
import ComplexFilter from "../Components/ComplexFilter";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { fakeHotels } from "../Assets/fakeObject";

const SearchResult = () => {
  let { item } = useParams();
  const [topPicks, setTopPics] = React.useState("Our top pics");

  const handleChange = (event) => {
    setTopPics(event.target.value);
  };
  return (
    <section id="homepage" className="bg-white flex-1">
      <Navbar />
      <div className="Container flex flex-col gap-10">
        <SearchBar />
        <div className="flex flex-col lg:flex-row gap-3 items-start">
          <div className="w-full lg:w-1/4 h-full">
            <ComplexFilter />
          </div>
          <div className="flex w-full gap-3 flex-col">
            <h1 className="text-2xl font-bold">
              {item}: {fakeHotels.length} poperties found
            </h1>
            <FormControl className="w-fit">
              <InputLabel id="demo-simple-select-label">
                Our top pics
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={topPicks}
                label="Our top pics"
                onChange={handleChange}
              >
                <MenuItem value="Our top pics">Our top pics</MenuItem>
                <MenuItem value="Homes and apartments">
                  Homes and apartments
                </MenuItem>
                <MenuItem value="Price (lowest first)">
                  Price (lowest first)
                </MenuItem>
                <MenuItem value="Top reviewed">Top reviewed</MenuItem>
              </Select>
            </FormControl>
            <ItemList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
