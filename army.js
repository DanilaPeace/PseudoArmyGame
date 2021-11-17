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
  // The total amount of resources that the army took
  let controlSummOfResources = 0;

  // If there are not enough resources in the village 
  if (amountAllResources < carrying) return resources;

  // Filling the resulting array
  for (let index = 0; index < resources.length; index++) {
      let currentResourceAmount = resources[index];

      partOfResources = currentResourceAmount / amountAllResources;
      takingResources = Math.round(carrying * partOfResources);
      let freePlace = carrying - controlSummOfResources;

      // To avoid overflow at the end
      if (takingResources > freePlace && takingResources <= currentResourceAmount) {
          result.push(freePlace);
          controlSummOfResources += freePlace;
          resources[index] -= freePlace;
      } else {
          result.push(takingResources);
          controlSummOfResources += takingResources;
          resources[index] -= takingResources;
      }
  }
  
  //
  // Check the result
  // 

  // This is a check if the army still has place for resources from the village
  let i = 0;
  while (controlSummOfResources < carrying) {

      if (resources[i]) {
          // To distribute resources evenly
          result[i] += 1;
          controlSummOfResources +=1;
          resources[i] -= takingResources;
      }

      i++;
      if (i === resources.length) {
          i = 0;
      }
  }

  return result;
}