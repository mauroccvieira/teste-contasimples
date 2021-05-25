import { Account } from "../domain/account";

export function saveAccount(account: Account): Promise<Account> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(account);
    }, 1000);
  });
}
