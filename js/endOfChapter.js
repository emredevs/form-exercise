let userForm = document.querySelector("#userForm");
userForm.addEventListener("submit", formHandle);
const alertDOM = document.querySelector("#alert");
const alertFuntion = (
  title,
  massage,
  className = "warning"
) => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${massage}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

function formHandle(event) {
  event.preventDefault();
  const USER_NAME = document.querySelector("#username");
  const SCORE = document.querySelector("#score");
  console.log(
    "kullanici adi: " + USER_NAME.value + " not bilgisi: " + SCORE.value
  );
  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value);
    USER_NAME.value = "";
    SCORE.value = "";
    alertDOM.innerHTML = alertFuntion(
      "baslik bilgisi",
      "islem basarili",
      "success"
    );
  } else
    alertDOM.innerHTML = alertFuntion(
      "baslik bilgisi",
      "eksik bilgi",
      "danger"
    );
}

let userListDOM = document.querySelector("#userList");
const addItem = (userName, score) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `${userName} <span class="badge bg-primary rounded-pill">${score}</span> `;
  liDOM.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  userListDOM.append(liDOM);
};
