const clock = document.querySelector("h2#clock");


function getClock() {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const secondes = String(date.getSeconds()).padStart(2, "0");
    clock.innerText =`${hours}:${minutes}:${secondes}`;
}

// setInterval(sayHello, 5000); 5초마다 
//setTimeout(sayHello, 5000);
//.padStart(2,"0"); -> 1자리이면 앞에 0을 넣어줌
//.padEnd(2,"0"); -> 뒤에 0을 넣어줌

getClock();
setInterval(getClock, 1000);

