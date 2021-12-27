import { useParams } from "../../../Router";

export default function () {
  const params = useParams();
  console.log("d", params.all);
  return <h2>Something went wrong.</h2>;
}
