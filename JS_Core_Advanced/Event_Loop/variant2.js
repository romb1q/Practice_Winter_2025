function fetchWithTimeout(url, timeout, callback) {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchPromise = fetch(url, { signal })
        .then(response => {
            if (!response.ok) {
                throw new Error(`ошибка HTTP: ${response.status}`);
            }
            return response.json();
        });

    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            controller.abort();
            reject(new Error('Request timed out'));
        }, timeout);
    });

    Promise.race([fetchPromise, timeoutPromise])
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

fetchWithTimeout('https://randomuser.me/api/', 1, (error, data) => {  // Error: Request timed ou    тк таймаут в 1 мс
    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log(data);
    }
})
