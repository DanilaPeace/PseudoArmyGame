function armyTakeResorces(resources, carrying) {
  let result = [];

  // Get the amount of all resouces
  let amountAllResources = resources.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  // Part of the resources of this type from the total amount of resources
  let partOfResources;
  // Resources that take the army
  let takingResources;
  // Resources that the army has already taken
  let takedRes = 0;

  // Filling the resulting array
  for (let index = 0; index < resources.length; index++) {
    let currentResorceAmount = resources[index];
    partOfResources = currentResorceAmount / amountAllResources;
    takingResources = Math.round(carrying * partOfResources);

    if (takingResources > currentResorceAmount) {
      // Army will take all the resources of this type
      // Because the village doesn't have resources equal to'takingResources'
      result.push(currentResorceAmount);
      takedRes += currentResorceAmount;
    } else if (
        index === resources.length - 1) {
      result.push(carrying - takedRes);
    } else {
      result.push(takingResources);
      takedRes += takingResources;
    }
  }

  return result;
}

let error = 0;
for (let i = 0; i < 500; i++) {
  let res = armyTakeResorces([1, 200, 102, 1, 3, 1], i);
  let controlSumm = res.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  if (i === controlSumm) {
    error++;
  }
  console.log(`${i === controlSumm} ${i} == ${controlSumm} ${res}`);
}
console.log("ERROR:", error);
