"use client";

import Grid from "../components/Grid";
import { jupiter } from "../constants";
import PlanetContext from "../hooks/PlanetContext";

export default function Jupiter() {
  return (
    <PlanetContext.Provider value={jupiter}>
      <main>
        <Grid />
      </main>
    </PlanetContext.Provider>
  );
}
