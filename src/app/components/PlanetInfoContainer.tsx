"use client";

interface Props {
  title: string;
  value: string;
}

const PlanetInfoContainer = ({title, value}: Props) => {
  return (
    <div>
      <span>{title}</span>
      <span>{value}</span>
    </div>
  )
}

export default PlanetInfoContainer