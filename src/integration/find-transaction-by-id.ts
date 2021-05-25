import { data } from "../input";
import { Transaction } from "../domain/transaction";

export function FindTransactionById(id: number): Promise<Transaction> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const transaction = data.find((f) => f.id === id);
      !transaction
        ? reject(new Error("Transação não encontrada"))
        : resolve(transaction);
    }, 1000);
  });
}
