import Loader from "@/components/Loader";
import { useCountriesQuery } from "@/graphql/generated/schema";
import { CountryWithContinent } from "@/types";
import { useRouter } from "next/router";
import React from "react";

export default function CountryDetails() {
  const { query } = useRouter();
  const { data, loading } = useCountriesQuery();

  const country = data?.countries.find(
    (country: CountryWithContinent) =>
      country.id === parseInt(query.id as string)
  );

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <div className="flex flex-col items-center mt-10 gap-4">
          <p className="text-8xl mb-4">{country?.emoji}</p>
          <p className="text-xs text-gray-700">
            Name: {country?.name} {country?.code && `(${country?.code})`})
          </p>
          <p className="text-xs text-gray-700">
            Continent: {country?.continent?.name}
          </p>
        </div>
      )}
    </>
  );
}
