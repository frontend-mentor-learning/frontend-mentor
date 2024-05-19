'use server';
import { promises as fs } from 'fs';
import path from 'path';

export const fetchCountries = async () => {
    const dataPath = path.join(process.cwd(), '/src/app/countries/data/data.json');
    const response = await fs.readFile(dataPath, 'utf8');
    return JSON.parse(response);
}

export const fetchCountry = async (alpha3Code: string): Promise<Country> => {
    const dataPath = path.join(process.cwd(), '/src/app/countries/data/data.json');
    const response = await fs.readFile(dataPath, 'utf8');
    const countries:Country[] = JSON.parse(response);
    return countries.find((country) => country.alpha3Code.toLowerCase() === alpha3Code.toLowerCase()) as Country;
}
