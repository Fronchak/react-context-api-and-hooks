import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { useCounterContext } from "../../contexts/CounterContext"

export const Home = () => {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions.asyncError()
      .then((resolve) => console.log(resolve))
      .catch((error) => console.log(error.name, ':', error.message));
  };

  console.log(state);

  return (
    <div>
      <Heading />
      <div>
        <Button onButtonClick={() => actions.increase()}>Increase counter</Button>
        <Button onButtonClick={() => actions.decrease()}>Decrease counter</Button>
        <Button onButtonClick={() => actions.reset()}>Reset counter</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>Set counter to 10</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>Set counter to 100</Button>
        <Button onButtonClick={() => actions.asyncIncrease()}>Async Increase</Button>
        <Button onButtonClick={handleError}>Async Error</Button>
      </div>
    </div>
  )
}
