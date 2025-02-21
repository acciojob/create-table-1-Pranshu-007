function insert_Row() {
    let table = document.getElementById("sampleTable");

    // Get the number of columns from the first row (assuming the table is not empty)
    let columnCount = table.rows[0].cells.length;

    // Insert a new row at the top
    let newRow = table.insertRow(0);

    // Dynamically insert cells based on column count
    for (let i = 0; i < columnCount; i++) {
        let cell = newRow.insertCell(i);
        cell.textContent = `New Cell${i + 1}`;
    }
}
