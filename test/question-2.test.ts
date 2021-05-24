import question from "../src/questions/question-2";
import { TransactionType } from "../src/types";

test("Teste 2.A", () => {
  let code = question([
    {
      id: 1,
      amount: 100,
      createAt: "2021-01-10T00:00:00.000Z",
      type: TransactionType.CARD,
    },
  ]);
  expect(code[0].amount).toBe(103);
});

test("Teste 2.B", () => {
  let code = question([
    {
      id: 1,
      amount: 150.85,
      createAt: "2021-01-10T00:00:00.000Z",
      type: TransactionType.PAYMENT,
    },
    {
      id: 2,
      amount: 150.85,
      createAt: "2021-01-10T00:00:00.000Z",
      type: TransactionType.CARD,
    },
  ]);
  expect(code.find((t) => t.id === 1).amount).toBe(150.85);
});
