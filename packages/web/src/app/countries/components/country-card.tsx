import Link from 'next/link';
import React from 'react';

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className="w-full max-w-sm shadow-lg rounded-lg bg-white dark:bg-geo-blue transition duration-300 hover:shadow-xl">
      <div className="w-full h-48 overflow-hidden rounded-t-lg">
        <Link href={`/countries/${country.alpha3Code}`}>
          <img
            src={country.flags.svg}
            alt={country.name}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <div className="p-4 space-y-2">
        <h1 className="text-lg font-bold">{country.name}</h1>
        <p className="text-sm">{country.region}</p>
        <p className="text-sm">{country.subregion}</p>
        <p className="text-sm">{country.population.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CountryCard;
