import { FindTransactionById } from "../integration/find-transaction-by-id";
import { Transaction } from "../domain/transaction";
import { getAccount } from "../integration/get-account";
import { sendNotification } from "../integration/send-notification";
import { saveAccount } from "../integration/save-account";
import { Account } from "../domain/account";
/**
 * A função abaixo é responsável por receber uma
 * transação e realizar o devido processamento.
 *
 * Melhore o código através da aplicação de design patterns e outras técnicas.
 *
 * Você pode criar outras classes ou alterar as já existentes.
 * */
export default async (
  transaction: Transaction,
  accountId: number
): Promise<Account> =>
  getAccount(accountId).then(async (account) => {
    if (transaction.type === 0) {
      account.debit(transaction.amount);
      await saveAccount(account);
      await sendNotification(account.id, transaction.type, transaction.amount);
    } else if (transaction.type === 1) {
      account.debit(transaction.amount);
      await saveAccount(account);
      await sendNotification(account.id, transaction.type, transaction.amount);
    } else if (transaction.type === 2) {
      account.debit(transaction.amount);
      await saveAccount(account);
      await sendNotification(account.id, transaction.type, transaction.amount);
    } else if (transaction.type === 3) {
      account.debit(transaction.amount);
      await saveAccount(account);
      await sendNotification(account.id, transaction.type, transaction.amount);
    } else if (transaction.type === 4) {
      account.credit(transaction.amount);
      await saveAccount(account);
      await sendNotification(account.id, transaction.type, transaction.amount);
    } else if (transaction.type === 5) {
      account.credit(transaction.amount);
      await saveAccount(account);
      await sendNotification(account.id, transaction.type, transaction.amount);
    }
    return account;
  });
