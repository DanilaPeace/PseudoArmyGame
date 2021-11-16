function armyTakeResorces(resources, carrying) {
  let result = [];

  // Get the amount of all resources
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
      index === resources.length - 1 &&
      0 < (carrying - takedRes) &&
      (carrying - takedRes) <= currentResorceAmount) {

      result.push(carrying - takedRes);
    } else {
      result.push(takingResources);
      takedRes += takingResources;
    }
  }

  return result;
}