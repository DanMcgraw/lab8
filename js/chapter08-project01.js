/* add loop and other code here */
document.addEventListener('DOMContentLoaded', function() {
removeOldRows();
for(i=filenames.length-1;i>=0;i--)
  outputCartRow(filenames[i] ,titles[i] ,quantities[i] ,prices[i] ,calculateTotal(quantities[i] ,prices[i]));
  var body = document.getElementsByTagName("body")[0];
  updatePrices();
}, false);
