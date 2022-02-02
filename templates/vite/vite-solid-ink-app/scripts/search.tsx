import {
  render,
  Box,
  Text,
  createSignal,
  createEffect,
  useApp
} from "solid-ink";
import TextInput from "./components/text-input";
import { filter } from "fuzzaldrin";
import { globby } from "globby";
import SelectInput from "./components/select";

const SearchQuery = () => {
  const [searchQuery, setSearchQuery] = createSignal("");
  const [files, setFiles] = createSignal([] as string[]);

  createEffect(() => {
    globby(["**/*", "!node_modules"]).then(files => {
      setFiles(files);
    });
  });

  const searchResults = () =>
    filter(files(), searchQuery()).map(file => ({
      label: file,
      value: file
    }));

  const app = useApp();

  return (
    <Box flexDirection="column">
      <Box flexDirection="row">
        <Text>Search for file: </Text>{" "}
        <TextInput
          value={searchQuery()}
          onChange={setSearchQuery}
          focus={true}
          placeholder="place"
          showCursor={true}
          onSubmit={console.log}
        />
      </Box>
      <SelectInput
        items={searchResults().slice(5)}
        onSelect={() => app.exit()}
      />
    </Box>
  );
};

render(() => <SearchQuery />)
  .waitUntilExit()
  .then(e => {
    console.log("ereee");
    process.exit();
  })
  .catch(e => console.error(e));
