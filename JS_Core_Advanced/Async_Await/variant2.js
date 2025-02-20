async function fetchRandomUser() {
    try {
        let response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error(`ошибка HTTP: ${response.status}`);
        }
        let data = await response.json();
        return data.results[0];
    } catch (error) {
        console.error('Ошибка при загрузке данных с randomuser.me:', error);
        throw error;
    }
}

async function fetchUserData(city) { // город  
    try {
        let response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error(`ошибка HTTP: ${response.status}`);
        }
        let data = await response.json();
        return { city, additionalData: data.results[0] };
    } catch (error) {
        console.error('Ошибка при выполнении второго запроса:', error);
        throw error;
    }
}

async function fetchSequentialData() {
    try {
        let userData = await fetchRandomUser();
        console.log('Данные пользователя:', userData);
        
        let city = userData.location.city;
        
        let additionalData = await fetchUserData(city);
        console.log('Дополнительные данные:', additionalData);
        
        return { user: userData, additionalData };
    } catch (error) {
        console.error('Ошибка при выполнении последовательных запросов:', error);
    }
}

fetchSequentialData().then(result => {
    console.log('Окончательный результат:', result);
});
