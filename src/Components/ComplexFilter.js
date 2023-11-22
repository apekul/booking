import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const ComplexFilter = () => {
  const [value, setValue] = useState([100, 200]);
  const [filters, setFilters] = useState({
    rating: 5,
    fun_things_to_do: {
      hiking: false,
      walking_tours: false,
      bike_tours: false,
      tennis_court: false,
    },
    meals: {
      self_catering: false,
      breakfast_included: false,
    },
    property_type: {
      hotels: false,
      houses_and_apartments: false,
    },
    reservation_policy: {
      free_cancelation: false,
      book_without_credit_card: false,
    },
  });

  const handleChange = (event, newValue) => setValue(newValue);
  const handleCheck = (event, key) => {
    setFilters({
      ...filters,
      [key]: { ...filters[key], [event.target.name]: event.target.checked },
    });
  };

  return (
    <div className="border rounded-md h-full">
      <p className="border-b p-2 font-bold">Filter by:</p>
      <div className="p-3 border-b">
        <p className="font-bold text-sm">Your budget (per night)</p>
        <p>
          ${value[0]} - ${value[1]}
        </p>
        <Slider
          className="mt-2"
          value={value}
          max={500}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </div>
      {Object.keys(filters).map((v, i) => (
        <div key={i} className="p-3 border-b">
          <p className="font-bold text-sm">
            {v[0].toUpperCase() + v.slice(1).replace(/_/g, " ")}
          </p>
          <div>
            {Object.keys(filters[v]).map((check, index) => (
              <FormGroup key={index}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters[v][check]}
                      onChange={(event) => handleCheck(event, v)}
                      name={check}
                      style={{ paddingTop: "5px", paddingBottom: "5px" }}
                    />
                  }
                  label={
                    <span className="text-sm">
                      {check[0].toUpperCase() +
                        check.slice(1).replace(/_/g, " ")}
                    </span>
                  }
                />
              </FormGroup>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComplexFilter;
