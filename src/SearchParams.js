import React, {useState} from "react";
import {ANIMALS} from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    // const [animal, setAnimal] = useState("Dog");
    // const [breed, setBreed] = useState("");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "All", ANIMALS);
    const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);
    return (
        <div className="search-params">
            <form action="">
                <h1>{location}</h1>
                <label htmlFor="location">
                    Location
                    <input type="text"
                           id="location"
                           value={location}
                           placeholder="Location"
                           onChange={e => setLocation(e.target.value)}
                    />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>
        </div>
    );

}

export default SearchParams;