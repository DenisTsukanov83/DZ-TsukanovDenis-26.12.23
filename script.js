
// task-1
document.querySelector('.task-1-btn').addEventListener('click', () => {
    let value1;
    let promise1 = new Promise((resolve, reject) => {
        resolve(value1 = document.querySelector('.task-value-1').value);
    });
    promise1.then(() => {
        document.querySelector('.task-result-1').textContent = value1;
    });
});

// task-2
document.querySelector('.task-2-btn').addEventListener('click', () => {

    let promise2 = new Promise((resolve, reject) => {
        if(false) {
            resolve('Успех');
        } else {
            reject('Ошибка');
        }
    });
    promise2.catch((value) => {
        document.querySelector('.task-result-2').textContent = value;
    });
});

// task-3

function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(document.querySelector('.task-value-3').value);
        }, 3000);
    });
}

document.querySelector('.task-3-btn').addEventListener('click', () => {
    task3().then((value) => {
        document.querySelector('.task-result-3').textContent = value;
    });
});

// task-4

function success() {
    return new Promise((resolve, reject) => {
        resolve('Успех!')
    });
}

function failure() {
    return new Promise((resolve, reject) => {
        reject('Неудача!');
    });
}

document.querySelector('.task-4-btn').addEventListener('click', () => {
    success().then((value) => {
        document.querySelector('.task-result-4').textContent += `sucess: ${value}`;
    });
    
    failure().catch((value) => {
        document.querySelector('.task-result-4').textContent += `  failure: ${value}`;
    });
});

// task-5

async function getWeather(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2a0f08b173805303f97e6c81f81d80a`
    await fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = JSON.stringify(data)
        alert(weather);
    })
    .catch(console.error);
}

document.querySelector('.task-5-btn').addEventListener('click', () => {
    getWeather(document.querySelector('.task-value-5').value);
});


// task-6

async function getServerFile() {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(data => {
        alert(JSON.stringify(data))
    });
    
}

document.querySelector('.task-6-btn').addEventListener('click', () => {
    getServerFile();
});
