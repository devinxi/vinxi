import { Box, Text, Component } from "solid-ink";
import figures from "figures";

export interface Props {
  isSelected?: boolean;
}

const Indicator: Component<Props> = props => (
  <Box marginRight={1}>
    {props.isSelected ? <Text color="blue">{figures.pointer}</Text> : <Text> </Text>}
  </Box>
);

export default Indicator;
