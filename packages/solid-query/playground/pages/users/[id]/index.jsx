import { useData } from "solid-app-router";

export default function Main() {
  const { user } = useData(1);
  const { theme } = useData(2);

  return (
    <div>
      Welcome {user()?.name} {theme}
    </div>
  );
}
