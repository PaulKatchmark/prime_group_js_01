var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

for (var i = 0; i < employees.length; i++) {
    console.log(getEmployee(employees[i]));
}

function getEmployee (employee) {
  var bonusArray = [];
  bonusArray[0] = employee[0];
  var percent = percentage(employee);
  bonusArray[1] = (percent * 100) + '%';
  var bonus = employee[2] * percent;
  bonusArray[2] = parseInt(employee[2]) + bonus;
  bonusArray[3] = parseInt(bonus);
  document.write('<h2>' + bonusArray[0] + '</h2>' + '<ul><li>Bonus Percentage: ' +
    bonusArray[1] + '</li><li>Adjusted Annual Compensation: $' + bonusArray[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
    '</li><li> Total Bonus: $' + bonusArray[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</li></ul>')
  return bonusArray;
}

function percentage (arr){
  var rating = arr[3];
  var salary = arr[2];
  var id = arr[1];
  var precent = 0;

  if (rating <= 2) {
    return percent;
  } else if (rating === 3) {
    percent = 0.04
  } else if (rating === 4) {
    percent = 0.06;
  } else if (rating === 5) {
    percent = .1;
  }

if (id.length <= 4) {
    percent += 0.05;
 }
if (salary > 65000) {
  percent -= 0.01;
}
if (percent > 0.13) {
  percent = 0.13;
}
return percent;
}
