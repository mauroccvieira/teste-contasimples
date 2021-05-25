export class Account {
  constructor(
    public id: number,
    public ownerName: string,
    private balance = 0,
    public status: "ACTIVE" | "BLOCKED" | "CANCELED" = "ACTIVE"
  ) {}

  debit(amount: number) {
    if (!this.canMakeATransaction()) {
      throw new Error("Conta impedida de realizar transações");
    }
    if (amount > this.balance) {
      this.balance -= amount;
    }
  }

  credit(amount: number) {
    if (!this.canMakeATransaction()) {
      throw new Error("Conta impedida de realizar transações");
    }
    this.balance += amount;
  }

  private canMakeATransaction() {
    return this.status === "ACTIVE";
  }
}
