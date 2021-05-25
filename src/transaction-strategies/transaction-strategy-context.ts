import { Transaction } from "../domain/transaction";
import { TransactionType } from "../domain/transaction-type";
import { TransactionCard } from "./transaction-card";
import { TransactionPayment } from "./transaction-payment";
import { TransactionStrategyInterface } from "./transaction-strategy-interface";

export class TransactionStrategyContext {
  private pickedStrategy: TransactionStrategyInterface;
  strategies: TransactionStrategyInterface[];

  constructor() {
    this.strategies = [new TransactionCard(), new TransactionPayment()];
  }

  execute(transaction: Transaction, accountId: number) {
    return this.pickedStrategy.execute(transaction, accountId);
  }

  setStrategy(transactionType: TransactionType) {
    let strategy = this.strategies.find((f) => f.name === transactionType);
    if (!this.strategies) this.getDefaultStrategy();
    this.pickedStrategy = strategy;
    return this;
  }

  getDefaultStrategy(): TransactionStrategyInterface {
    throw new Error("There's isnt a default strategy");
  }
}
