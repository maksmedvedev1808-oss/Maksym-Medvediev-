function fetchWithTimeout(url, timeout) {
    return Promise.race([
        fetch(url),
        new Promise((_, reject) =>
            setTimeout(() => reject("Request timeout"), timeout)
        )
    ]);
}

async function getData() {
    let results = await Promise.allSettled([
        fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 2000),
        fetchWithTimeout("https://jsonplaceholder.typicode.com/users/1", 2000)
    ]);

    for (let res of results) {
        if (res.status === "rejected" && res.reason === "Request timeout") {
            console.log("Request timeout");
            return;
        }
    }

    console.log("Усі запити виконані");
}

getData();
