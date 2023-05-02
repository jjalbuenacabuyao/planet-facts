"use client";

import Grid from "./components/Grid";
import { mercury } from "./constants";
import PlanetContext from "./hooks/PlanetContext";

export default function Home() {
  return (
    <PlanetContext.Provider value={mercury}>
      <main>
        <Grid />
      </main>
    </PlanetContext.Provider>
  );
}
