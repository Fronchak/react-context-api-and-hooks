import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { useCounterContext } from "../../contexts/CounterContext"

export const Home = () => {
  const [state, actions] = useCounterContext();

  console.log(state);

  return (
    <div>
      <Heading />
      <div>
        <Button onButtonClick={() => actions.increase()}>Increase counter</Button>
      </div>
    </div>
  )
}
