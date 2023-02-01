import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const [rangeValue, setRangeValue] = useState(600);

  const { register, getValues } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-8 mt-12">
        <div className="col-span-8">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Prompt</label>
              <textarea
                className="w-full border focus:outline-none px-2 py-1"
                rows={4}
                {...register("prompt")}
              />
            </div>

            <div className="text-end mt-2">
              <button
                className="bg-blue-500 px-4 py-2 text-white uppercase text-sm"
                onClick={() => {
                  const values = getValues();
                  const valueWithRange = { ...values, range: rangeValue };
                  console.log(valueWithRange);
                }}
              >
                Generate
              </button>
            </div>
          </form>
          <div className="mt-6">
            <label>Content</label>
            <textarea
              className="w-full border focus:outline-none px-2 py-1"
              rows={20}
            />
          </div>
        </div>
        <div className="col-span-4 bg-gray-100 p-6 mt-6">
          <div>
            <span className="inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm w-full">
              <button
                className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative w-1/2"
                title="Edit Product"
              >
                Options
              </button>

              <button
                className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative w-1/2"
                title="Delete Product"
              >
                More Options
              </button>
            </span>
          </div>

          {/* radio item */}
          <div className="mt-6">
            <p className="font-medium text-sm">Radio item title</p>
            <div className="grid grid-cols-2 gap-1 mt-2">
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="technology"
                  {...register("type")}
                />
                <label htmlFor="html" className="text-sm">
                  Technology
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="marketing"
                  name="fav_language"
                  value="marketing"
                  {...register("type")}
                />
                <label htmlFor="marketing" className="text-sm">
                  Marketing
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="development"
                  name="fav_language"
                  value="development"
                  {...register("type")}
                />
                <label htmlFor="development" className="text-sm">
                  Development
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="others"
                  name="fav_language"
                  value="HTML"
                  {...register("type")}
                />
                <label htmlFor="others" className="text-sm">
                  Others
                </label>
              </div>
            </div>
          </div>

          {/* dropdown item */}

          <div className="mt-4">
            <label htmlFor="countries" className="font-medium text-sm">
              Select an option
            </label>
            <select
              {...register("options")}
              id="countries"
              className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            >
              <option value="option 1">Option 1</option>
              <option value="option 2">Option 2</option>
              <option value="option 3">Option 3</option>
              <option value="option 4">Option 4</option>
            </select>
          </div>

          {/* checkbox item */}
          <div className="mt-4">
            <p className="font-medium text-sm">Checkbox item title</p>
            <div className="grid grid-cols-2 gap-1 mt-2">
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  id="option1"
                  name="option1"
                  value="Bike"
                  {...register("extra")}
                />
                <label htmlFor="option1" className="text-sm">
                  Option 1
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  id="option2"
                  name="option2"
                  value="car"
                  {...register("extra")}
                />
                <label htmlFor="option2" className="text-sm">
                  Option 2
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  id="option3"
                  name="option3"
                  value="cycle"
                  {...register("extra")}
                />
                <label htmlFor="option3" className="text-sm">
                  Option 3
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  id="option4"
                  name="option4"
                  value="truck"
                  {...register("extra")}
                />
                <label htmlFor="option4" className="text-sm">
                  Option 4
                </label>
              </div>
            </div>
          </div>

          {/* range */}
          <div className="mt-4">
            <label
              htmlFor="range"
              className="font-medium text-sm flex items-center justify-between"
            >
              <span>Max word count</span>
              <span className="border p-0.5 px-2">{rangeValue}</span>
            </label>
            <input
              type="range"
              name="price"
              min="300"
              value={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
              max="1500"
              className="w-full h-2 bg-blue-100 appearance-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
