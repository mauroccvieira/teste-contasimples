import { FindTransactionById } from "../integration/find-transaction-by-id";
import { Transaction } from "../domain/transaction";
import { getAccount } from "../integration/get-account";
import { sendNotification } from "../integration/send-notification";
import { saveAccount } from "../integration/save-account";
import { Account } from "../domain/account";
import { TransactionStrategyContext } from "../transaction-strategies/transaction-strategy-context";
import { TransactionType } from "../domain/transaction-type";
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
  new TransactionStrategyContext()
    .setStrategy(transaction.type)
    .execute(transaction, accountId);
