import { TransactionType } from "../src/domain/transaction-type";
import question from "../src/questions/question-3";


test("Teste 3.A", () => {
  let code = question([
    {
      id: 1,
      amount: 103,
      createAt: "2021-01-10T00:00:00.000  Z",
      type: TransactionType.CARD
    },
    {
      id: 2,
      amount: 103,
      createAt: "2021-01-10T00:00:00.000Z",
      type: TransactionType.CARD
    }
  ]);
  expect(code).toBe(6);
});

test("Teste 3.B", () => {
  let code = question([
    {
      id: 1,
      amount: 103,
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
