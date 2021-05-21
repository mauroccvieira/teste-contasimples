import question from "../src/questions/question-1";
import { TransactionType } from "../src/types";

test("Valor da transação subiu corretamente", () => {
  let code = question([
    {
      id: 1,
      amount: 100,
      createAt: "2021-01-10T00:00:00.000Z",
      type: TransactionType.CARD
    }
  ]);
  expect(code[0].amount).toBe(103);
});

test("Lista de transações misturadas", () => {
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
  expect(code.find((t) => t.id === 1).amount).toBe(150.85);
});
