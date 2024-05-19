'use client';
import React, { useState, useEffect } from 'react';
import SearchBar from "./components/searchbar";
import Select from "./components/select";
import { fetchCountries } from './action';
import CountryCard from "./components/country-card";

const CountriesPage: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const loadCountries = async () => {
      const data: Country[] = await fetchCountries();
      setCountries(data);
      setFilteredCountries(data);
    };
    loadCountries();
  }, []);

  useEffect(() => {
    const result = countries.filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCountries(result);
  }, [searchQuery, countries]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="my-8 mx-8 lg:mx-16 flex justify-between items-center gap-8 flex-wrap">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Select />
      </div>
      <div className="mx-8 my-8 lg:mx-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {filteredCountries.map((country: Country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountriesPage;
