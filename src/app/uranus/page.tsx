"use client";

import Grid from "../components/Grid";
import { uranus } from "../constants";
import PlanetContext from "../hooks/PlanetContext";

export default function Uranus() {
  return (
    <PlanetContext.Provider value={uranus}>
      <main>
        <Grid />
      </main>
    </PlanetContext.Provider>
  );
}
