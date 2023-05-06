"use client";

import Grid from "../components/Grid";
import { neptune } from "../constants";
import PlanetContext from "../hooks/PlanetContext";

export default function Neptune() {
  return (
    <PlanetContext.Provider value={neptune}>
      <main>
        <Grid />
      </main>
    </PlanetContext.Provider>
  );
}
