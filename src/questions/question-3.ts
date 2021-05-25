import { Transaction } from "../domain/transaction";
/**
 * A Conta Simples cobra uma taxa de 3% em todas as transações feitas pelos cartões. 
 * Receba uma lista de transações do tipo {Transaction}, com as taxas já adicionadas, e obtenha a receita da conta simples.
 *
 * ### Exemplo
 *
 * Entrada:
 * ```ts
 *  [{
 *    "id": 1,
 *    "amount": 103,
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
 * Saida: 3
 * */
export default (data: Transaction[]) => {
  return data;
};
