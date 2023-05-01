interface SourceAndContent {
  content: string;
  source: string;
}

interface PlanetImages {
  planet: string;
  internal: string;
  geology: string;
}

interface Planet {
  name: string;
  overview: SourceAndContent;
  structure: SourceAndContent;
  geology: SourceAndContent;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: PlanetImages;
}

export default Planet;