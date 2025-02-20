const urlsArray = [
    "https://letterboxd.com/",
    "https://www.hltv.org/",
    "https://www.youtube.com/"
];

function fetchContent(url) {
    return fetch(url).then(response => response.text());
}

function fetchAllContents(urlsArray) {
    const promises = urlsArray.map(url => fetchContent(url));
    return Promise.all(promises);
}

fetchAllContents(urlsArray)
    .then(contents => {
        contents.forEach((content, index) => {
            console.log(`содержимое сайта ${index + 1}:`);
            console.log(content);
        });
    })
    .catch(error => {
        console.error('ошибка содержимого:', error);
    });
