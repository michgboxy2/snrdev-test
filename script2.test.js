const fetch = require('node-fetch');
const swapi = require('./script2');


it('calls swapi to get people', (done) => {
    expect.assertions(1);

    swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87);
        done();
    })
})

it('calls swapi to get people with a promise', () => {
    expect.assertions(2);
    return swapi.getPeoplePromise(fetch).then(data => {
        
        expect(data.count).toEqual(87);
        expect(data.result.length).toBeGreaterThan(5);
    })
})


it('getPeople returns count and result', () => {
    const mockFetch = jest.fn()
                          .mockReturnValue(Promise.resolve({      //mocking a database fetch
                              json : () => Promise.resolve({
                                  count : 87,
                                  results : [0,1,2,3,4,5]
                              })
                          }))
    expect.assertions(4);
    return swapi.getPeoplePromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1); //test the number of times the mockfetch got called
        expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
        expect(data.count).toEqual(87);
        expect(data.result.length).toBeGreaterThan(5);
    })
})