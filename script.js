function insert_Row() {
    let table = document.getElementById("sampleTable");
    let columnCount = table.rows[0].cells.length;
    let newRow = table.insertRow(0);

    for (let i = 0; i < columnCount; i++) {
        let cell = newRow.insertCell(i);
        cell.textContent = `New Cell${i + 1}`;
    }
}
