import { TransactionType } from "./transaction-type";

export interface Receipt {
  accountId: number;
  amount: number;
  type: TransactionType;
  id: string;
}
