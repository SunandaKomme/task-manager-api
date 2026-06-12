const API = "http://localhost:5000/api";
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  localStorage.setItem("token", data.token);

  alert("Login Successful");

  getTasks();
}
async function createTask() {
  const title = document.getElementById("taskInput").value;
  const token = localStorage.getItem("token");

  const res = await fetch(`${API}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify({ title })
  });

  await res.json();

  getTasks();
}
async function getTasks() {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API}/tasks`, {
    headers: {
      "Authorization": token
    }
  });

  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerText = task.title;
    list.appendChild(li);
  });
}
window.onload = function() {
  const token = localStorage.getItem("token");

  if (token) {
    getTasks();
  }
};