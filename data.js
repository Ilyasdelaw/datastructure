function sumOfDistinctElements(set1, set2) {
    let distinctElements = new Set(); // Create an empty Set to store distinct elements
  
    // Iterate through set1 and add its elements to the distinctElements Set
    for (let element of set1) {
      distinctElements.add(element);
    }
  
    // Iterate through set2 and add its elements to the distinctElements Set
    for (let element of set2) {
      distinctElements.add(element);
    }
  
    // Calculate the sum of distinct elements
    let sum = 0;
    for (let element of distinctElements) {
      sum += element;
    }
  
    return sum;
  }
  
  // Example usage:
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  const result = sumOfDistinctElements(set1, set2);
  console.log(result); // Output: 13 (distinct elements 1, 2, 3, 4, 7, 9)
  function dotProduct(v1, v2) {
    if (v1.length !== v2.length) {
      throw new Error("Vectors must have the same length");
    }
  
    let result = 0;
    for (let i = 0; i < v1.length; i++) {
      result += v1[i] * v2[i];
    }
  
    return result;
  }
  
  function areOrthogonal(vectors) {
    const n = vectors.length;
    let orthogonal = true;
  
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const result = dotProduct(vectors[i], vectors[j]);
        if (result !== 0) {
          orthogonal = false;
          break;
        }
      }
    }
  
    return orthogonal;
  }
  
  // Example usage:
  const v1 = [1, 0];
  const v2 = [0, -1];
  const v3 = [2, 2];
  const v4 = [0, 0];
  const vectors = [v1, v2, v3, v4];
  
  if (areOrthogonal(vectors)) {
    console.log("The vectors are orthogonal.");
  } else {
    console.log("The vectors are not orthogonal.");
  }
    