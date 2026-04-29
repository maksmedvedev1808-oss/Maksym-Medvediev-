function getRandomNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 100) + 1;
            resolve(num);
        }, 1000);
    });
}

async function processNumber() {
    try {
        let num = await getRandomNumber();

        if (num < 50) {
            let result = await Promise.resolve(num + 20);
            console.log("Результат:", result);
        } else {
            await Promise.reject("Занадто велике число!");
        }
    } catch (error) {
        console.log("Оброблено помилку");
    }
}

processNumber();
