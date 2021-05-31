const fetchUsers = async () => 
    await (await fetch('/.netlify/functions/checkNumbers')).json();

fetchUsers().then((res) => {
    numbersList = document.querySelector("#numbers");
    
    res.numbers.forEach(element => {
       const li = document.createElement('li');
       li.innerHTML = element;
       numbersList.appendChild(li); 
    });
})