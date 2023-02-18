const buildings = [
  {
    name: "A",
    distance: { B: 20, C: 12, D: 3 }
  },
  {
    name: "B",
    distance: { A: 20, C: 3, D: 12 }
  },
  {
    name: "C",
    distance: { A: 12, B: 3, D: 7 }
  },
  {
    name: "D",
    distance: { A: 3, B: 12, C: 7 }
  }
];

function delivery_route_optimization(buildings, start) {
  let points = {};
  for (const build of buildings) {
    points[build.name] = build.distance;
  }

  let visted = {};
  visted[start.name] = 1;
  let optimaize_route = [start.name];
  let i = 1;

  while (i < Object.keys(points).length) {
    let current = start.name;
    let nextBuild = null;
    let maxDistance = Number.POSITIVE_INFINITY;

    for (const build in points[current]) {
      if (!visted[build]) {
        if (points[current][build] < maxDistance) {
          maxDistance = points[current][build];
          nextBuild = build;
        }
      }
    }

    current = nextBuild;
    visted[nextBuild] = 1;
    optimaize_route.push(nextBuild);

    i++;
  }

  return optimaize_route;
}

let s = {
  name: "A",
  distance: { B: 20, C: 12, D: 3 }
};

let route = delivery_route_optimization(buildings, s);

console.log(route);
