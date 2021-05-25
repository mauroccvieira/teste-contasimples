import { Transaction } from "../domain/transaction";
import { TransactionType } from "../domain/transaction-type";
/**
 * Receba uma lista de {Transaction} e adicione em
 * todas as transações de cartão {TransactionType.CARD} uma taxa de 3% do valor.
 * Ao final retorne a lista completa (com todas as transações)
 *
 * Entrada:
 * ```ts
 *  [{
 *    "id": 1,
 *    "amount": 500,
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
 * Saida:
 * ```ts
 *  [{
 *    "id": 1,
 *    "amount": 515,
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
 */

function addFeeTransaction(transaction: Transaction, fee: number): Transaction {
  return { ...transaction, amount: transaction.amount * (1 + fee / 100) };
}
export default (data: Transaction[]) => {
  const FEE = 3;
  return data.map((t) =>
    t.type === TransactionType.CARD ? addFeeTransaction(t, FEE) : t
  );
};
