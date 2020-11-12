const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
    return fetch('https://swapi.co/api/people')
        .then(response => response.json())
        .then(data => {
            return {
                count : data.count,
                result : data.results
            }
        });
}


const getPeople = async (fetch) => {
    const getRequest = await fetch('https://swapi.co/api/people')
          data      = await getRequest.json();
            return {
                count : data.count,
                result : data.results
            }
        };


module.exports = {
    getPeoplePromise,
    getPeople
}