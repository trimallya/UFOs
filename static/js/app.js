// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build table
function buildTable(data) {
    // Clear out any existing data
    tbody.html("");

    // Loop through each object in the data and append a row and cells for each value in row
    data.forEach((dataRow) => {
        // Append a row to table body
        let row = tbody.append("tr");

        // Loop through each field in dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
};

function handleClick() {
    // Grab datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check if date was entered and filter data using date
    if (date) {
        // Apply `filter` to table data to only keep rows where `datetime`===filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild table using filtered data
    // @NOTE: If no date entered, filteredData will just be original tableData
    buildTable(filteredData);
};

// Attach an event to listen for form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build table when page loads
buildTable(tableData);