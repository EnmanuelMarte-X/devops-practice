fetch("http://localhost:8000/api/hello")
  .then(res => res.json())
  .then(data => {
    document.getElementById("msg").innerText = data.message;
  })
  .catch(err => {
    document.getElementById("msg").innerText = "Error";
    console.error(err);
  });
