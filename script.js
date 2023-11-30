function addTask() {
    const taskName = document.getElementById('taskName').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (taskName.trim() !== '') {
        const table = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow(table.rows.length);

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        cell1.innerHTML = taskName;
        cell2.innerHTML = date;
        cell3.innerHTML = time;
        cell4.innerHTML = '<button onclick="deleteTask(this)">Delete</button>';

        resetFields();
    } else {
        alert('Task name cannot be empty!');
    }
}

function deleteTask(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function resetFields() {
    document.getElementById('taskName').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
}
