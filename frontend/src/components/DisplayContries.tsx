import { useCountriesQuery } from "@/graphql/generated/schema";
import CountryCard from "./CountryCard";
import Loader from "./Loader";

export default function DisplayContries() {
  const { data, loading } = useCountriesQuery();

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <div className="flex justify-center gap-2 mt-10">
          {data?.countries.map((country) => (
            <CountryCard key={country.name + country.id} country={country} />
          ))}
        </div>
      )}
    </>
  );
}
