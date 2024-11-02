let ota = document.getElementById('ota'); 
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((data) => getdata(data));

function getdata(params) {
    console.log(params); 

    params.map((item) => {
        let div = document.createElement(`div`);
        let h3 = document.createElement(`h3`);
        let tel = document.createElement(`p`);
        let address = document.createElement(`p`); 
        let email = document.createElement(`p`); 
        let website = document.createElement(`p`); 
        let username = document.createElement(`h4`);

        h3.innerHTML = `Ism: ` + item.name;
        username.innerHTML = `Username: ` + item.username;
        tel.innerHTML = `Tel: ` + item.phone;
        address.innerHTML = `Address: ` + item.address.street + ', ' + item.address.city; 
        email.innerHTML = `Email: ` + item.email;
        website.innerHTML = `Website: ` + item.website;

        div.appendChild(h3);
        div.appendChild(username);
        div.appendChild(tel);
        div.appendChild(address);
        div.appendChild(email);
        div.appendChild(website);
        div.classList.add('box'); 
        ota.appendChild(div);
    });
}
