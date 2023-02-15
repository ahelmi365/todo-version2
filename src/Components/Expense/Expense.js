import { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type === "buy") return { money: state.money - 10 };
  if (action.type === "sell") return { money: state.money + 10 };
  if (action.type === "reset") return { money: 0 };
};

export default function Expense() {
  const initialState = { money: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="expense-container">
      <h1>Wallet: {state.money}</h1>
      <div className="expense-use">
        <button onClick={() => dispatch({ type: "buy" })}>
          Buy Ingredients
        </button>
        <button onClick={() => dispatch({ type: "sell" })}>Sell a Meal</button>
        <button onClick={() => dispatch({ type: "reset" })}>
          Reset Walled
        </button>
      </div>
    </div>
  );
}
