const dro = require("./deliveryRouteOptimization");

const buildings = [
  {
    name: "A",
    distance: { B: 20, C: 12, D: 3 },
  },
  {
    name: "B",
    distance: { A: 20, C: 3, D: 12 },
  },
  {
    name: "C",
    distance: { A: 12, B: 3, D: 7 },
  },
  {
    name: "D",
    distance: { A: 3, B: 12, C: 7 },
  },
];

test("test 1", () => {
  let res = dro(buildings, buildings[0]);

  expect(res).toBeDefined();
  expect(res[0]).toBe(buildings[0].name);
  expect(res[res.length - 1]).toBe(res[0]);
  expect(res).toEqual(expect.arrayContaining(["A", "D", "C", "B", "A"]));
});
