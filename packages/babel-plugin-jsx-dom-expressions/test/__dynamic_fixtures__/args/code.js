const el = <mesh args={1} />;
const el1 = () => <mesh args={1} />;
const el2 = props => <mesh args={props.args} />;
const el3 = props => <mesh args={1} color={props.color} />;

<Mesh>
  <>
    <geometry args={[props.width, props.height]} />
    <geometry args={[props.width, props.height]} />
  </>
</Mesh>;

<Mesh>
  <>
    <geometry args={[props.width, props.height]} />
  </>
</Mesh>;
<Mesh>
  <geometry args={[props.width, props.height]} />
</Mesh>;
