function cloneDeep(object) {
  if (typeof object !== "object") {
    return object;
  }

  const cloneObject = {};

  Object.entries(object).forEach(([key, value]) => {
    cloneObject[key] = cloneDeep(value);
  });

  return cloneObject;
}

let objects = {
  id_1: {
    id: 1,
    name: "John",
    age: 23,
  },
  id_2: {
    id: 2,
    name: "Samuel",
    age: 21,
  },
  id_3: {
    id: 3,
    name: "marvin",
    age: 26,
  },
  id_4: {
    id: 4,
    name: "james",
    age: 28,
  },
};

const cloned = cloneDeep(objects);

console.log(cloned);
