import {
  useAddCountryMutation,
  useCountriesQuery,
} from "@/graphql/generated/schema";

export default function AddCountryForm() {
  const [createCountry] = useAddCountryMutation();
  const { refetch } = useCountriesQuery();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());

    createCountry({ variables: { data: formJSON } })
      .then(() => refetch())
      .catch(console.error);

    e.currentTarget.reset();
  };

  return (
    <form
      className="flex gap-20 outline outline-1 outline-gray-300 mt-6 w-max p-3 rounded-sm bg-gray-100"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-1 text-sm font-light">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="outline outline-1 outline-gray-400 rounded-sm"
        />
      </div>

      <div className="flex flex-col gap-1 text-sm font-light">
        <label htmlFor="emoji">Emoji</label>
        <input
          type="text"
          name="emoji"
          id="emoji"
          className="outline outline-1 outline-gray-400 rounded-sm"
        />
      </div>

      <div className="flex flex-col gap-1 text-sm font-light">
        <label htmlFor="code">Code</label>
        <input
          type="text"
          name="code"
          id="code"
          className="outline outline-1 outline-gray-400 rounded-sm"
        />
      </div>

      <button className="bg-red-400 text-white p-3 rounded text-xs">Add</button>
    </form>
  );
}
