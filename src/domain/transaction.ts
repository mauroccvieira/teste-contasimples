import { TransactionType } from "./transaction-type";

export class Transaction {
  constructor(
    public id: number,
    public amount: number,
    public createAt: string,
    public type: TransactionType
  ) {}
}
