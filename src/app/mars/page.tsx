"use client";

import Grid from "../components/Grid";
import { mars } from "../constants";
import PlanetContext from "../hooks/PlanetContext";

export default function Mars() {
  return (
    <PlanetContext.Provider value={mars}>
      <main>
        <Grid />
      </main>
    </PlanetContext.Provider>
  );
}
