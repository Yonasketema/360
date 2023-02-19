function delivery_route_optimization(buildings, start) {
  // create map of the buildings
  let points = {};
  for (const build of buildings) {
    //points with building name and distance of each pair
    points[build.name] = build.distance;
  }

  //store all visted buildings
  let visted = {};
  visted[start.name] = 1;
  //final route
  let optimaize_route = [start.name];
  let i = 1;

  while (i < Object.keys(points).length) {
    // current building
    let current = start.name;
    // the next nearest building
    let nextBuild = null;
    let maxDistance = Number.POSITIVE_INFINITY;

    for (const build in points[current]) {
      //finding the nearest unvisited building
      if (!visted[build]) {
        if (points[current][build] < maxDistance) {
          maxDistance = points[current][build];
          nextBuild = build;
        }
      }
    }

    //assign the next closest building
    current = nextBuild;
    visted[nextBuild] = 1;
    optimaize_route.push(nextBuild);

    i++;
  }
  optimaize_route.push(start.name);
  return optimaize_route;
}

module.exports = delivery_route_optimization;
