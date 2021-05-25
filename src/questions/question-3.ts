import { Transaction } from "../domain/transaction";
import { TransactionType } from "../domain/transaction-type";
/**
 * A Conta Simples cobra uma taxa de 3% em todas as transações feitas pelos cartões.
 * Receba uma lista de transações do tipo {Transaction}, com as taxas já adicionadas, e obtenha a receita da conta simples.
 *
 * ### Exemplo
 *
 * Entrada:
 * ```ts
 *  [{
 *    "id": 1,
 *    "amount": 103,
 *    "createAt": "2021-01-10T00:00:00.000Z",
 *    "type": 1
 *  },
 *  {
 *    "id": 2,
 *    "amount": 50.0,
 *    "createAt": "2021-01-10T16:33:01.606Z",
 *    "type": 2
 *  }]
 * ```
 *
 * Saida: 3
 * */

function getFeeAmount(amount: number, FEE: number) {
  return (amount * FEE) / (100 + FEE);
}
export default (data: Transaction[]) => {
  const FEE = 3;
  return data.reduce(
    (ac, current) =>
      current.type === TransactionType.CARD
        ? getFeeAmount(current.amount, FEE) + ac
        : ac,
    0
  );
};
