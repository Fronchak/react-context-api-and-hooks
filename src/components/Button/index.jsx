import P from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';
import './styles.css';

export const Button = ({ children, onButtonClick }) => {
  const [state, actions] = useCounterContext();
  return (
    <button className="btn" onClick={onButtonClick}>
      { children }
    </button>
  )
};

Button.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired
};
