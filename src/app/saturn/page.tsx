"use client";

import Grid from "../components/Grid";
import { saturn } from "../constants";
import PlanetContext from "../hooks/PlanetContext";

export default function Saturn() {
  return (
    <PlanetContext.Provider value={saturn}>
      <main>
        <Grid />
      </main>
    </PlanetContext.Provider>
  );
}
