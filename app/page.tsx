import CountryCard from '@/components/country-card';
import Image from 'next/image';
import Link from 'next/link';

export type Country = {
  name: {
    common: string;
  };
  translations: {
    por: {
      common: string;
    };
  };
  flags: {
    svg: string;
    alt: string;
  };
  capital: string;
  region: string;
  subregion: string;
  population: number;
  languages?: {
    [key: string]: string;
  };
}

async function getCountries(): Promise<Country[]> {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return response.json();
}

export default async function Home() {
  const countries = await getCountries();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full container gap-2  p-10">
      {countries.map((country) => (
       // eslint-disable-next-line react/jsx-key
       <CountryCard name={country.name.common} ptName={country.translations.por.common} flag={country.flags.svg} flagAlt={country.flags.alt}/>
      ))}
    </section>
  );
}
