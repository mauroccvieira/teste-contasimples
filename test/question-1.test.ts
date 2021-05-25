import question from "../src/questions/question-1";
import { TransactionType } from "../src/domain/transaction";

test("Teste A", () => {
  let code = question([]);
  expect(code.length).toBe(0);
});

test("Teste B", () => {
  let code = question([
    {
      id: 1,
      amount: 150.85,
      createAt: "2021-01-10T00:00:00.000Z",
      type: TransactionType.PAYMENT
    },
    {
      id: 2,
      amount: 150.85,
      createAt: "2021-01-10T00:00:00.000Z",
      type: TransactionType.CARD
    }
  ]);
  expect(code.length).toBe(1);
});

test("Teste C", () => {
  let code = question([
    {
      id: 1,
      amount: 150.85,
      createAt: "2021-01-10T00:00:00.000Z",
      type: TransactionType.RECHARGE_SLIP
    },
    {
      id: 2,
      amount: 150.85,
      createAt: "2021-01-10T00:00:00.000Z",
      type: TransactionType.RECHARGE_SLIP
    }
  ]);
  expect(code.length).toBe(0);
});
