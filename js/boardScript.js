var listNo = 0;

function addTask() {
    const taskTitleEl = document.getElementById("tasktitle");
    const taskContentEl = document.getElementById("taskcontent");
    const taskNameEl = document.getElementById("taskname");
    const trEl = document.createElement("tr");

    let taskT = taskTitleEl.value;
    let taskW = taskContentEl.value;
    let taskN = taskNameEl.value;

    let html = `<td>${++listNo}</td>
                <td>${taskT}</td>
                <td>${taskW}</td>
                <td>${taskN}</td>
                <td><input type="checkbox"></td>`
    trEl.innerHTML = html;
    document.querySelector("#list table").appendChild(trEl);
    taskInputEl.value = "";
}