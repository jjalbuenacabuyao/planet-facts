import { createContext, useContext } from "react";
import Planet from "../types/Planet";

const PlanetContext = createContext<Planet | null>(null);

export const usePlanetContext = () => {
  const context = useContext(PlanetContext);
  if (!context) {
    throw new Error("The component must be a child of the Grid component.")
  }

  return context;
}

export default PlanetContext;