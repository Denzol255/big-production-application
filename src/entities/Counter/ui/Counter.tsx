import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
  lol?: number;
}

export const Counter: FC<CounterProps> = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div data-testid='counter'>
      <h1 data-testid='counter-value'>{counterValue}</h1>
      <Button
        theme={ButtonTheme.PRIMARY}
        data-testid='counter-increment'
        onClick={increment}
      >
        +
      </Button>
      <Button
        theme={ButtonTheme.PRIMARY}
        data-testid='counter-decrement'
        onClick={decrement}
      >
        -
      </Button>
    </div>
  );
};
