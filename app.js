// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build a table function
function buildTable(data) {
    tbody.html("");

    //Next, loop through each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //Append a row to the table body
        let row = tbody.append("tr");
        
        //Loop thfough each field in the dataRow and add
        //each vale as a (to the) table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cett = row.append("td");
            cell.text(val);element => {
            }
        );
    });
}
