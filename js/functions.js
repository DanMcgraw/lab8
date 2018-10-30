/* define functions here */
function calculateTotal(qty, prc) {
  return parseInt(qty) * parseInt(prc);
}

function rowsWithImage() {
  var table = document.getElementsByClassName("table-fill")[0];
  var newTable = document.createElement("TABLE");
  for (i = 0; i < table.rows.length; i++)
    if (table.rows[i].cells[0].innerHTML.includes("img")) {
      var row = table.rows[i].cloneNode(true);
      newTable.appendChild(row);
    }
  return newTable;
}

function removeOldRows() {
  var table = document.getElementsByClassName("table-fill")[0];
  var iMax = rowsWithImage().rows.length;
  for (i = 0; i < iMax; i++)
    table.deleteRow(1);
}

function determineSubTotal() {
  var rows = rowsWithImage().rows;
  var iMax = rows.length;
  var subTotal = 0;

  for (i = 0; i < iMax; i++)
    subTotal += formatMoney(rows[i].cells[4].innerHTML);
  return subTotal;
}

function updatePrices() {
  var table = document.getElementsByClassName("table-fill")[0];
  var rows = rowsWithImage().rows;
  var iMax = rows.length;
  var subTotal = determineSubTotal();
  var tax = subTotal*0.10;
  var shipping = 40;
  if(subTotal>1000)
  shipping = 0;
  var total = subTotal+shipping+tax;
  table.rows[iMax + 1].cells[1].innerHTML= formatMoney(subTotal);
  table.rows[iMax + 2].cells[1].innerHTML= formatMoney(tax);
  table.rows[iMax + 3].cells[1].innerHTML= formatMoney(shipping);
  table.rows[iMax + 4].cells[1].innerHTML= formatMoney(total);
}

function formatMoney(input){
  input = input.toString();
  if(input.indexOf("$") > -1) {
    return parseFloat(input.substr(1).slice(0, -3));
  } else {
    return "$"+parseFloat(input).toFixed(2);
  }
}

function outputCartRow(file, title, quantity, price, total) {
  var table = document.getElementsByClassName("table-fill")[0];
  var row = table.insertRow(1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  cell1.innerHTML = "<img src=\"images/" + file + "\" alt=\"thumb\">";
  cell2.innerHTML = title;
  cell3.innerHTML = quantity;
  cell3.classList.add('center');
  cell4.innerHTML = formatMoney(price);
  cell4.classList.add('right');
  cell5.innerHTML = formatMoney(total);
  cell5.classList.add('right');

}
