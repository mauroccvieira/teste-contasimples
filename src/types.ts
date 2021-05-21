export enum TransactionType {
  PAYMENT,
  CARD,
  TRANSFEROUT,
  TRANSFERIN,
  RECHARGE_SLIP
}

export class Transaction {
  constructor(
    public id: number,
    public amount: number,
    public createAt: string,
    public type: TransactionType
  ) {}
}
