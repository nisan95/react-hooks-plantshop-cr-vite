import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm }) {
  const visiblePlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul className="cards">
      {visiblePlants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}


export default PlantList;
