import Button from "@mui/material/Button";
import { useFetchAllPokemon } from "./api/usePokemon";

const App = () => {
  const { data } = useFetchAllPokemon();
  console.log("Data", data);

  return (
    <Button variant="contained" sx={{ mt: "20px" }}>
      Hello World
    </Button>
  );
};

export default App;
