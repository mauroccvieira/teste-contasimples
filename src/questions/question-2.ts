import { Transaction } from "../domain/transaction";
/**
 * Receba uma lista de {Transaction} e adicione em todas as transações uma taxa de 3% no valor delas.
 * Ao final retorne a lista completa (com todas as transações)
 *
 * Entrada:
 * ```ts
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
 * ```
 *
 * Saida:
 * ```ts
 *  [{
 *    "id": 1,
 *    "amount": 515,
 *    "createAt": "2021-01-10T00:00:00.000Z",
 *    "type": 1
 *  },
 *  {
 *    "id": 2,
 *    "amount": 50.0,
 *    "createAt": "2021-01-10T16:33:01.606Z",
 *    "type": 2
 *  }]
 * ```
 *
 */
export default (data: Transaction[]) => {
  return data;
};
