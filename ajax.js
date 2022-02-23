function sendData() {
  var xhr = new XMLHttpRequest();
  var url = "ajax.php";

  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  const data = "title=" + title + "&body=" + body;

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    const response = JSON.parse(this.responseText);
    const show = document.querySelector("#show");
    show.innerHTML = `
                <p>Judul Artikel : ${response.judul}</p>
                <p>Isi Artikel : ${response.isi}</p>`;
  };

  xhr.send(data);
  const show = document.querySelector("#show");
  show.innerHTML = `Processing`;
  return false;
}
