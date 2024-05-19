import React from 'react';
import { fetchCountry, fetchCountries } from '../action';

interface ParamsProps {
    params: {
        code: string;
    };
}

const CountryPage: React.FC<ParamsProps> = async ({ params }) => {
    const countryInfo: Country = await fetchCountry(params.code);

    // Function to fetch country name by code
    const getBorderCountryName = (code: string, countries: any[]) => {
        const country = countries.find((c) => c.alpha3Code === code);
        return country ? country.name : code;
    };

    const allCountries: Country[] = await fetchCountries(); // Fetch all countries to get names for border countries

    return (
        <div className="container mx-auto px-8 lg:px-16 py-8 min-h-screen">
            <button className="mb-16 mt-6 bg-gray-200 text-gray-700 py-2 px-4 rounded shadow hover:bg-gray-300">
                &larr; Back
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <img src={countryInfo.flags.svg} alt={countryInfo.name} className="w-[85%] h-auto rounded-none shadow" />
                </div>
                <div className="flex flex-col justify-center space-y-4 text-gray-800 dark:text-gray-100">
                    <h1 className="text-4xl font-bold mb-4">{countryInfo.name}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <p>
                                <span className="font-semibold">Native Name: </span>
                                {countryInfo.nativeName}
                            </p>
                            <p>
                                <span className="font-semibold">Population: </span>
                                {countryInfo.population.toLocaleString()}
                            </p>
                            <p>
                                <span className="font-semibold">Region: </span>
                                {countryInfo.region}
                            </p>
                            <p>
                                <span className="font-semibold">Sub Region: </span>
                                {countryInfo.subregion}
                            </p>
                            <p>
                                <span className="font-semibold">Capital: </span>
                                {countryInfo.capital}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p>
                                <span className="font-semibold">Top Level Domain: </span>
                                {countryInfo.topLevelDomain.join(', ')}
                            </p>
                            <p>
                                <span className="font-semibold">Currencies: </span>
                                {countryInfo.currencies.map((currency) => `${currency.name} (${currency.symbol})`).join(', ')}
                            </p>
                            <p>
                                <span className="font-semibold">Languages: </span>
                                {countryInfo.languages.map((language) => `${language.name} (${language.nativeName})`).join(', ')}
                            </p>
                        </div>
                    </div>
                    {countryInfo.borders && countryInfo.borders.length > 0 && (
                        <div>
                            <span className="font-semibold block sm:hidden">Border Countries: </span>
                            <div className="flex flex-wrap mt-2 items-center">
                                <span className="font-semibold hidden sm:block mr-4">Border Countries: </span>
                                {countryInfo.borders.map((border) => (
                                    <span key={border} className="bg-geo-blue text-geo-white py-1 px-2 m-1 rounded shadow">
                                        {getBorderCountryName(border, allCountries)}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CountryPage;
