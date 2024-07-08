import AddCountryForm from "@/components/AddCountryForm";
import DisplayContries from "@/components/DisplayContries";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center">
        <AddCountryForm />
      </div>
      <DisplayContries />
    </main>
  );
}
