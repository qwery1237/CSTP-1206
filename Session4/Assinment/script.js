//const $ = document.getElementById; I don't understand why it gives me an error
const log = console.log;
const $ = (id) => document.getElementById(id);

const userList = [];

const updateUserInfo = () => {
    saveUserInfo();
    getUserInfo();
}
const saveUserInfo = () => {
    const studentName = $('studentName').value;
    const studentEmail = $('studentEmail').value;
    const studentId = $('studentId').value;
    userList.push({
        studentName,
        studentEmail,
        studentId
    });
    localStorage.setItem('userList',JSON.stringify(userList));
}
const getUserInfo = () => {
    const updatedUserList = JSON.parse(localStorage.getItem('userList'));
    studentTable.innerHTML = `
    <tr>
        <th>Student Name</th>
        <th>Student Email</th>
        <th>Student ID</th>
    </tr>
    `;
    updatedUserList.forEach(addUserInTable);
}
const addUserInTable = (user) => {
    studentTable.innerHTML += `<tr>
        <td>${user.studentName}</td>
        <td>${user.studentEmail}</td>
        <td>${user.studentId}</td>
    </tr>`;
}
const submitBtn = $('submit');
const studentTable = $('studentTable');
submitBtn.onclick = updateUserInfo;