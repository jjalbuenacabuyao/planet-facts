import Grid from "./components/Grid";
import { mercury } from "./constants";

export default function Home() {
  return (
    <main>
      <Grid planet={mercury} />
    </main>
  )
}
