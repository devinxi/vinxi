import { render } from "solid-ink";
import SelectInput from "./components/select";

const SearchQuery = () => {
  const handleSelect = (item: any) => {
    console.log(item);
    // `item` = { label: 'First', value: 'first' }
  };

  const items = [
    {
      label: "First",
      value: "first"
    },
    {
      label: "Second",
      value: "second"
    },
    {
      label: "Third",
      value: "third"
    }
  ];

  return <SelectInput items={items} onSelect={handleSelect} />;
};

render(() => <SearchQuery />)
  .waitUntilExit()
  .then(console.log);
