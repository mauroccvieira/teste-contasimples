import question from "../src/questions/question-3";
import { TransactionType } from "../src/types";

test("Apenas cartões", () => {
  let code = question([
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
  let code = question([
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
