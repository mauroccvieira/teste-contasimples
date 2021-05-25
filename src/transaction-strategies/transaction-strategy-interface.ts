import { Transaction } from "../domain/transaction";
import { TransactionType } from "../domain/transaction-type";
import { Account } from "../domain/account";

export interface TransactionStrategyInterface {
  name: TransactionType;
  execute(transaction: Transaction, accountId: number): Promise<Account>;
}
