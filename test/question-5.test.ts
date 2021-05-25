import question from "../src/questions/question-5";

test("Teste 5.A", async () => {
  let code = await question(
    {
      id: 2,
      amount: 50.0,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 1,
    },
    24
  );
  expect(!!code).toBeTruthy();
});
