"use client";

import Grid from "../components/Grid";
import { venus } from "../constants";
import PlanetContext from "../hooks/PlanetContext";

export default function Venus() {
  return (
    <PlanetContext.Provider value={venus}>
      <main>
        <Grid />
      </main>
    </PlanetContext.Provider>
  );
}
