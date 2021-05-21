import { Transaction } from "../types";
/**
 * A Conta Simples cobra uma taxa de 3% em todas as transações feitas pelos cartões.
 * Receba uma lista de transações do tipo {Transaction} e obtenha o total somado da
 * taxa de todas as transações.
 *
 * ### Exemplo
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
 * Saida: 15
 * */
export default (data: Transaction[]) => {
  return data;
};
