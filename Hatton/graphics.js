
var setOfSpendings = {};
var cnt = 0;

function addSpending(nameSpending, costSpending) {
  cnt++;
  setOfSpendings[cnt] = {name:nameSpending, cost:costSpending};
  return cnt;
}

function delSpending(id) {
  delete setOfSpendings[id];
}

function drawSpendings(canvId) {
  let ctx = document.getElementById(canvId);
  let arrLabels=[], arrData=[];

  for(i in setOfSpendings) {
    var z = setOfSpendings[i];
    arrLabels.push(z.name),arrData.push(z.cost);
  }
  

   new Chart(ctx, {
   type: 'polarArea',
   data: {
     labels: arrLabels,
     datasets: [{
       data: arrData,
       borderWidth: 1
     }]
   },
   options: {
     scales: {
       y: {
         beginAtZero: true
       }
     }
   }
  });
}


