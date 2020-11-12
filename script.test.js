const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavoritecats.com'
];

describe('googlesearch', () => {
    it('this is a test', () => {
        googleSearch('testtest', dbMock);
    });
    
    
    it('is searching google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([])
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com'])
    });
    
    it('work with undefined or null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
    });
    
    it('does not return mire than 3 matches', () => {
    
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    })

})

