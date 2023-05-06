"use client";

interface Props {
  title: string;
  value: string;
}

const PlanetInfoContainer = ({ title, value }: Props) => {
  return (
    <li className="flex items-center justify-between border border-gray px-6 py-3 uppercase md:flex-1 md:flex-col md:items-start md:gap-2 md:p-4 lg:p-6">
      <h2 className="text-xs leading-none opacity-70 tracking-widest">{title}</h2>
      <span className={`font-antonio font-medium text-xl leading-none md:text-2xl lg:text-4xl`}>
        {value}
      </span>
    </li>
  );
};

export default PlanetInfoContainer;
