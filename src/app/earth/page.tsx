"use client";

import Grid from "../components/Grid";
import { earth } from "../constants";
import PlanetContext from "../hooks/PlanetContext";

export default function Earth() {
  return (
    <PlanetContext.Provider value={earth}>
      <main>
        <Grid />
      </main>
    </PlanetContext.Provider>
  );
}
