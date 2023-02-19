# 360

## Delivery Route Optimization

### nearest neighbors solution

The solution algortihm work by Choose the nearest city from a particular building as the next option, then move on, finding the closest unvisited building at each stage until all buildings are visted

![Screenshot from 2023-02-19 15-28-35](https://user-images.githubusercontent.com/103140237/219948515-7ff6ea7e-9067-4445-9d9b-6b3940be0722.png)

```
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
```

first, make a nice map with keys for each pair's distance and building name.

```
function delivery_route_optimization(buildings, start) {

// create map of the buildings
let points = {};
for (const build of buildings) {
//points with building name and distance of each pair
points[build.name] = build.distance;
}
```

the points become like this now it is easy to navigate each buildings

```
points = {
A: { B: 20, C: 12, D: 3 },
B: { A: 20, C: 3, D: 12 },
C: { A: 12, B: 3, D: 7 },
D: { A: 3, B: 12, C: 7 }
}
```

```
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
```
