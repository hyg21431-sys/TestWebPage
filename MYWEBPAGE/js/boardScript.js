var postNo = 0;

function addTask() {
    const taskTitleEl = $("#tasktitle");
    const taskContentEl = $("#taskcontent");
    const taskNameEl = $("#taskname");

    const today = new Date();
    const date = today.getFullYear() + '-' +
                String(today.getMonth() + 1).padStart(2,'0') + '-' +
                String(today.getDate()).padStart(2,'0');    

    let taskT = taskTitleEl.val();
    let taskW = taskContentEl.val();
    let taskN = taskNameEl.val();

    if(taskT == "") {
        alert("제목을 입력해주세요.");
        taskTitleEl.focus();
        return;
    }if(taskW == "") {
        alert("내용을 입력해주세요.");
        taskContentEl.focus();
        return;
    }if(taskN == "") {
        alert("작성자를 입력해주세요.");
        taskNameEl.focus();
        return;
    }

    postNo++;

    let tr = $("<tr>");
    let html = `<td class="align-center" id="no${postNo}">${postNo}</td>
                <td class="align-center mouse-over" onclick="openRead(this)">${taskT}</td>
                <td class="align-center">${taskW}</td>
                <td class="align-center">${taskN}</td>
                <td class="align-center">${date}</td>
                <td><input type="checkbox"></td>`;
    tr.html(html);

    $("#list table").append(tr);

    taskTitleEl.val("");
    taskContentEl.val("");
    taskNameEl.val("");

    $("#inputForm").hide();
}

function delTask() {
    $("td > input[type='checkbox']").each(function() {
        if($(this).is(":checked")) {
            $(this).closest("tr").remove();
        }
    });
    $("th > input[type='checkbox']").prop("checked", false);
}

function checkAll(ckbx) {
    let check = $(ckbx).prop("checked");
    $("td > input[type='checkbox']").prop("checked", check);
}

function inputkey(e) {
    if(e.key == 'Enter') addTask();
}

$(document).ready(function() {
    $('[value="글쓰기"]').on('click',
        function () {
            $("#inputForm").show();
    });
});

function closeWrite() {
    $("#inputForm").hide();
}

function openRead(tiEl) {
    const titleEl = $(tiEl); 

    const windowDiv = $("#readForm");
    const saveBtn = $("#save-button");

    let no = titleEl.prev().text();
    let title = titleEl.text();
    let content = titleEl.next().text();
    let name = titleEl.next().next().text();
    let date = titleEl.next().next().next().text();

    $("#read-no").text(no);
    $("#read-title").text(title);
    $("#read-content").text(content);
    $("#read-name").text(name);
    $("#read-date").text(date);

    saveBtn.hide();
    windowDiv.show();
}

function closeRead() {
    $("#readForm").hide();
}

function edit_post() {
    const titleEl = $("#read-title");
    const contentEl = $("#read-content");
    const saveBtn = $("#save-button");
    const editBtn = $("#edit-button");

    if(titleEl.find("input").length > 0) {
        alert("이미 수정 중입니다.");
        return;
    }

    const titleText = titleEl.text();
    const contentText = contentEl.text();

    titleEl.html(`<input type="text" id="edit-title" value="${titleText}" id="edit_title">`);
    contentEl.html(`<input type="text" id="edit-content" value="${contentText}" id="edit_content">`);

    saveBtn.show();
    editBtn.hide();
}

function save_post() {
    const windowDiv = $("#readForm");
    const saveBtn = $("#save-button");
    const editBtn = $("#edit-button");

    const titleEl = $("#read-title");
    const contentEl = $("#read-content");

    let title = $("#edit-title").val();
    let content = $("#edit-content").val();

    let postNoId = "no" + $("#read-no").text();

    const titleListEl = $(`[id=${postNoId}]`).next();
    const contentListEl = titleListEl.next();

    titleListEl.text(title);
    contentListEl.text(content);

    saveBtn.hide();
    editBtn.show();
    windowDiv.hide();
}