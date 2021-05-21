import execute_exer1 from "../src/exercise-1";

//const initialFile = require("../InitialFile');
/**
 * lista vazia
 */
test("Teste A", () => {
  let code = execute_exer1([]);
  expect(code.length).toBe(0);
});

/**
 * 
 */
test("Teste B", () => {
  let code = execute_exer1([
    {
      id: 1,
      amount: 150.85,
      createAt: "2021-01-10T00:00:00.000Z",
      type: 2
    },
    {
      id: 2,
      amount: 150.85,
      createAt: "2021-01-10T00:00:00.000Z",
      type: 1
    }
  ]);
  expect(code.length).toBe(1);
});

test("Teste C", () => {
  let code = execute_exer1([
    {
      id: 1,
      amount: 150.85,
      createAt: "2021-01-10T00:00:00.000Z",
      type: 2
    },
    {
      id: 2,
      amount: 150.85,
      createAt: "2021-01-10T00:00:00.000Z",
      type: 2
    }
  ]);
  expect(code.length).toBe(0);
});
