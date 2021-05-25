import question from "../src/questions/question-4";

test("Teste 4.A", async () => {
  let code = await question([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ]);
  expect(code).toMatchObject([
    {
      id: 1,
      amount: 150.85,
      createAt: "2021-01-10T00:00:00.000Z",
      type: 1,
    },
    {
      id: 2,
      amount: 50.0,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 1,
    },
    {
      id: 3,
      amount: 25.0,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 2,
    },
    {
      id: 4,
      amount: 90.5,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 0,
    },
    {
      id: 5,
      amount: 3500.85,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 4,
    },
    {
      id: 6,
      amount: 350.0,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 1,
    },
    {
      id: 7,
      amount: 160.0,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 0,
    },
    {
      id: 8,
      amount: 250.0,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 0,
    },
    {
      id: 9,
      amount: 450.44,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 2,
    },
    {
      id: 10,
      amount: 200.0,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 1,
    },
    {
      id: 11,
      amount: 150.85,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 1,
    },
    {
      id: 12,
      amount: 150.0,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 1,
    },
    {
      id: 13,
      amount: 40.0,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 2,
    },
    {
      id: 14,
      amount: 49.54,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 0,
    },
    {
      id: 15,
      amount: 154.0,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 1,
    },
    {
      id: 16,
      amount: 1200.0,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 1,
    },
    {
      id: 17,
      amount: 20.0,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 4,
    },
    {
      id: 18,
      amount: 350.0,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 1,
    },
    {
      id: 19,
      amount: 190.0,
      createAt: "2021-01-10T16:33:01.606Z",
      type: 0,
    },
  ]);
});
