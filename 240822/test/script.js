
const xhr = new XMLHttpRequest();
const result = document.querySelector("#result")

xhr.open("Get","object.json");
xhr.send();

xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.responseText) {
    // result.innerHTML = `${}`
  }
}

