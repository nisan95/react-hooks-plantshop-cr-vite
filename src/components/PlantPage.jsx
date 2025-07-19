import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleAddPlant(newPlant) {
    setPlants(prevPlants => [...prevPlants, newPlant]);
  }

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((error) => {
      console.error("Error fetching plants:", error)});

  }, []);

  

  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={plants} searchTerm={searchTerm} />
    </main>
  );
}
export default PlantPage;
