import { Country } from "@/types";
import { useRouter } from "next/router";

export default function CountryCard({
  country: { emoji, name, id },
}: {
  country: Country;
}) {
  const router = useRouter();
  return (
    <div
      className="outline outline-1 outline-gray-200 rounded-sm px-3.5 py-1.5 flex flex-col items-center cursor-pointer"
      onClick={() => router.push(`/country/${id}`)}
    >
      <p className="text-xs">{name}</p>
      <p>{emoji}</p>
    </div>
  );
}
