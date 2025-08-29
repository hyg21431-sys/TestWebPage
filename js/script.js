var listNo = 0;

function addTask() {
    const taskInputEl = document.getElementById("taskInput");
    const trEl = document.createElement("tr");
    let task = taskInputEl.value;
    
    if(task == "") {
        alert("할 일을 입력해주세요.");
        taskInputEl.focus();
        return;
    }

    let html = `<td class="align-center">${++listNo}</td><td onclick="textevent(this)"">${task}</td><td class="align-center"><input type="checkbox"></td>`;
    trEl.innerHTML = html;
    document.querySelector("table").appendChild(trEl);
    taskInputEl.value = "";
}

function delTask() {
    const checkList = document.querySelectorAll("td > [type='checkbox']");
    const tableEl = document.querySelector("table");

    for(let i = 0; i < checkList.length; i++) {
        if(checkList[i].checked) {
            tableEl.removeChild(checkList[i].parentElement.parentElement);
        }
    }
    document.querySelector("th > [type='checkbox']").checked = false;
}

function checkAll(ckbx) {
    let check = ckbx.checked;
    const checkbox = document.querySelectorAll("td > [type='checkbox']");

    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = check;
    }
}

function inputkey(e) {
    console.log(e.key);
    if(e.key == 'Enter') addTask();
}

function textevent(tdEl) {
    tdEl.classList.toggle("tdfont");
}