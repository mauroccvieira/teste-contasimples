import { Transaction } from "../domain/transaction";
import { TransactionType } from "../domain/transaction-type";
import { getAccount } from "../integration/get-account";
import { saveAccount } from "../integration/save-account";
import { sendNotification } from "../integration/send-notification";
import { TransactionStrategyInterface } from "./transaction-strategy-interface";
import { Account } from "../domain/account";

export class TransactionPayment implements TransactionStrategyInterface {
  name: TransactionType.PAYMENT;
  async execute(transaction: Transaction, accountId: number): Promise<Account> {
    const account = await getAccount(accountId);
    account.credit(transaction.amount);
    await saveAccount(account);
    await sendNotification(account.id, transaction.type, transaction.amount);
    return account;
  }
}
