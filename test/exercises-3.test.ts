import execute_exer3 from "../src/exercise-3";
import { TransactionType } from "../src/types";

//const initialFile = require("../InitialFile');

test("Apenas cartões", () => {
  let code = execute_exer3([
    {
      id: 1,
      amount: 100,
      createAt: "2021-01-10T00:00:00.000Z",
      type: TransactionType.CARD
    },
    {
      id: 2,
      amount: 100,
      createAt: "2021-01-10T00:00:00.000Z",
      type: TransactionType.CARD
    }
  ]);
  expect(code).toBe(6);
});

test("Apenas misturados", () => {
  let code = execute_exer3([
    {
      id: 1,
      amount: 100,
      createAt: "2021-01-10T00:00:00.000Z",
      type: TransactionType.CARD
    },
    {
      id: 2,
      amount: 100,
      createAt: "2021-01-10T00:00:00.000Z",
      type: TransactionType.PAYMENT
    }
  ]);
  expect(code).toBe(3);
});
