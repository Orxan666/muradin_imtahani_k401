// 1-cu sual 1cisidir
// function calculatePassingGrade(midterm1, midterm2, finalExam) {
//     let passingGrade = (midterm1 * 0.3) + (midterm2 * 0.3) + (finalExam * 0.4);
//     if (passingGrade >= 61) {
//       return "Passed with a grade of " + passingGrade;
//     } else {
//       return "Failed with a grade of " + passingGrade;
//     }
//   }
  
//   // Example usage
//   let midterm1 = 90;
//   let midterm2 = 55;
//   let finalExam = 75;
//   let result = calculatePassingGrade(midterm1, midterm2, finalExam);
//   console.log(result);
//   ----------------------
// 1-ci sual 2-cisidir
// function finalScore(midterm1, midterm2) {
//     let midtermsTotal = (midterm1 + midterm2) * 0.3;
//     let remainingScore = 61 - midtermsTotal;
//     let finalScore = remainingScore / 0.4;
    
//     if (finalScore <= 100 && finalScore >= 0) {
//       return finalScore;
//     } else {
//       return 0;
//     }
//   }
//   console.log(

//       finalScore(40,60)

//   );
// ---------------------------------------------------------
// buda 3cu sualdi
// function findSpeed(coordinates) {
//   let totalDistance = 0;
//   let totalTime = 0;
  
//   for (let i = 0; i < coordinates.length - 1; i++) {
//     let currentCoordinate = coordinates[i];
//     let nextCoordinate = coordinates[i + 1];

//     let distance = Math.sqrt(
//       Math.pow(nextCoordinate[0] - currentCoordinate[0], 2) +
//       Math.pow(nextCoordinate[1] - currentCoordinate[1], 2) +
//       Math.pow(nextCoordinate[2] - currentCoordinate[2], 2)
//     );

//     totalDistance += distance;
//     totalTime += currentCoordinate[3] + distance;
//   }

//   return totalDistance / totalTime;
// }

// let coordinates = [[7,3,15,2],[15,14,-23,0],[23,35,42,7],[15,-14,23,0],[22,-46 ,12,0],[19,45,-35,4],[2,4,5,0],[17,-15,2,0],[3,-4,9,0],[ 5,8,-19,3],[5,1,4,2],[7,14,16,0]];

// console.log(findSpeed(coordinates));

// buda 4-cu sualdi
// function findShortestRoute(cargoCenter, customers) {
//   let distances = [];
//   for (let i = 0; i < customers.length; i++) {
//     let customer = customers[i];
//     let distance = Math.sqrt(
//       Math.pow(cargoCenter[0] - customer[0], 2) +
//       Math.pow(cargoCenter[1] - customer[1], 2)
//     );
//     distances.push({ index: i, distance });
//   }

//   distances.sort((a, b) => a.distance - b.distance);

//   let result = [];
//   for (let i = 0; i < distances.length; i++) {
//     result.push(customers[distances[i].index]);
//   }

//   return result;
// }

// let cargoCenter = [-4, 8];
// let customers = [[-2,7],[5,0],[7,-1],[8,3],[5,-1],[4,5],[2,8], [7,6],[4,1],[5,-2]];

// console.log(findShortestRoute(cargoCenter, customers));
