import { Account } from "../domain/account";

export function getAccount(accountId: number): Promise<Account> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        new Account(accountId, "Pedro de Paula", getRandomBalance(), "ACTIVE")
      );
    }, 1000);
  });
}

function getRandomBalance(): number {
  return Math.round(Math.random() * 500);
}
