function armyTakeResorces(resources, carrying) {
    let result = [];
  
    // Get the amount of all resouces it is 100%
    let amountAllResouces = resources.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  
    // Part of the resources of this type from the total amount of resources
    let partOfResouses;
    // Resources that take the army
    let takingResouse;
  
    // Filling the resulting array
    for (const currentResorceAmount of resources) {
      partOfResouses = currentResorceAmount / amountAllResouces;
  
      takingResouse = Math.round(carrying * partOfResouses);
  
      if (takingResouse > currentResorceAmount) {
        // Army will take all the resources of this type
        // if the village doesn't have enough resources of this type
        result.push(currentResorceAmount);
      } else {
        result.push(takingResouse);
      }
    }
  
    return result;
  }