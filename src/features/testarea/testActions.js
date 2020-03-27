import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants';

export const incrimentCounter = () => {
  return {
    type: INCREMENT_COUNTER
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  };
};
