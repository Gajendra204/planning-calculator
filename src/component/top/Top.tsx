import React, { useState } from "react";
import Select from "react-select";
import "./Top.css";
import statesData from "../../data/statesData.json" 

interface StateDistricts {
  states: {
    state: string;
    districts: string[];
  }[];
}

const stateDistricts: StateDistricts = statesData;

const Top: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [area, setArea] = useState<number>(5000); 

  
  const states = stateDistricts.states.map((item) => ({
    label: item.state,
    value: item.state,
  }));

  const districts =
    selectedState &&
    stateDistricts.states
      .find((item) => item.state === selectedState)
      ?.districts.map((district) => ({
        label: district,
        value: district,
      }));

  return (
    <div className="cost-calculator-container">
      <h2>Cost</h2>

     
      <div className="form-group">
        <label>Select State</label>
        <Select
          options={states}
          onChange={(option) => {
            setSelectedState(option?.value || null);
            setSelectedDistrict(null); 
          }}
          placeholder="Select State"
        />
      </div>

      <div className="form-group">
        <label>Select City</label>
        <Select
          options={districts || []}
          onChange={(option) => setSelectedDistrict(option?.value || null)}
          placeholder="Select City"
          isDisabled={!selectedState}
        />
      </div>

      <div className="form-group">
        <label>Area</label>
        <div>
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
          />
          <div className="unit-options">
            <label>
              <input
                type="radio"
                name="unit"
                value="Sq. Feet"
                defaultChecked
                style={{ marginRight: "5px" }}
              />
              Sq. Feet
            </label>
            <label>
              <input
                type="radio"
                name="unit"
                value="Sq. Meter"
                style={{ marginRight: "5px" }}
              />
              Sq. Meter
            </label>
          </div>
        </div>
      </div>

      <button className="next-button">Next →</button>
    </div>
  );
};

export default Top;
