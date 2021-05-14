const ApiKey = 'HqAvKVtqkWGQusQ4RQzCOoRoaMsDjG3O'

const getData = {
    request(word) {
        return fetch(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=${ApiKey}&limit=50`)
                .then(response => response.json())
                .then((data) => {
                    return data;
                });
    }
}


export default getData;