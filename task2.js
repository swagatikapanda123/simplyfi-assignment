let visited = {
  Amsterdam: 1,
  Kiev: 1,
  Zurich: 1,
  Prague: 1,
  Berlin: 1,
  Barcelona: 1,
};

let routes = {
  Paris: ["Skopje"],
  Zurich: ["Amsterdam"],
  Prague: ["Zurich"],
  Barcelona: ["Berlin"],
  Kiev: ["Prague"],
  Skopje: ["Paris"],
  Amsterdam: ["Barcelona"],
  Berlin: ["Kiev", "Amsterdam"],
};

function getRoute(start) {
  let res = [];

  let stack = [...routes[start]];

  while (Object.keys(visited).length != 0 && stack.length != 0) {
    if (visited[start]) {
      res.push(start);
      delete visited[start];
    }

    start = stack.shift();
    stack.push(...routes[start]);
  }

  console.log(res);
}

getRoute("Kiev");
