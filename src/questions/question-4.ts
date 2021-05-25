import { FindTransactionById } from "../integration/find-transaction-by-id";
import { Transaction } from "../domain/transaction";
/**
 * A função abaixo recebe uma lista de Ids de transações,
 * para cada uma delas, consulte o endpoint de detalhe
 * de te transação através da função FindTransactionById.
 * Retorne uma {Promise} com os detalhes das transações.
 *
 * ### Exemplo
 *
 * Entrada:
 * ```ts
 *  [1, 2]
 * ```
 *
 * Saida:
 *  [{
 *    "id": 1,
 *    "amount": 500,
 *    "createAt": "2021-01-10T00:00:00.000Z",
 *    "type": 1
 *  },
 *  {
 *    "id": 2,
 *    "amount": 50.0,
 *    "createAt": "2021-01-10T16:33:01.606Z",
 *    "type": 2
 *  }]
 * */
export default async (data: number[]): Promise<Transaction[]> => [];
