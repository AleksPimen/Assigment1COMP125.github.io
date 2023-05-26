// this command will invoke the function when visitor opens the webpage
window.onload = function() {createTable();};
// this funnction is resposnisble for creating the table and adding numbers
function createTable() {
    // get the users input in this case its the rows
    var rows = parseInt(document.getElementById('rows').value);
    // get the users input in this case its the columns
    var columns = parseInt(document.getElementById('columns').value);
  
    // get the table element using the id provided in the html
    var table = document.getElementById('multiplication-table');
  
    // this line clears previous table so that after the user generates new table they won't overlap
    table.textContent = '';
  
    // Creating table rows
    for (var i = 1; i <= rows; i++) {
      // this line creates tr for all the rows
      var row = document.createElement('tr');
  // creating table collumns
      for (var j = 1; j <= columns; j++) {
        // this line creates td for each of the columns of the table
        var cell = document.createElement('td');
        // this code times number of rows and collumns and writes the values and what they equal incide each cell of the table
        cell.textContent = i + "x" + j + "=" + (i * j);
        // this code adds each individual cell created to the table
        row.appendChild(cell);
        // this code adds each individual row created to the table
        table.appendChild(row);
      }  
    }
  }
  