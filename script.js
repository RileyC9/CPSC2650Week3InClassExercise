let button = document.getElementById("btn");
let result = document.getElementById("result");
let content;

const fetchHandler = async () => {
  let data = await fetch("https://meowfacts.herokuapp.com/",{
    method: 'GET'
  });
  let fetchData = await data.json();
  content = document.createTextNode(fetchData.data[0]);
  console.log(data);
  console.log(fetchData);
  result.appendChild(content);
}

button.addEventListener("click", fetchHandler);