import { Account } from "../domain/account";
import { Receipt } from "../domain/receipt";
import { TransactionType } from "../domain/transaction-type";

export function sendNotification(
  accountId: number,
  type: TransactionType,
  amount: number
): Promise<Receipt> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        accountId,
        type,
        amount,
        id: "asda2-123as12-asdasd123",
      });
    }, 1000);
  });
}
