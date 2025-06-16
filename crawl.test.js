const {normalizeURL} = require('./crawl');
const {test, expect} = require('@jest/globals');



// https://harizibam.me -> boot.dev
// http://harizibam.me -> boot.dev
// https://Harizibam.me -> boot.dev
// These are same, so that we have to normalize it


test('NormalizeUrl',() => {
    const input = 'https://harizibam.me/path';
    const actual = normalizeURL(input);
    const expected = 'harizibam.me/path';
    expect(actual).toEqual(expected);
});

test('NormalizeUrl strip protocol',() => {
    const input = 'https://harizibam.me/path';
    const actual = normalizeURL(input);
    const expected = 'harizibam.me/path';
    expect(actual).toEqual(expected);
});

test('normalizeURL capitals', () => {
    const input = 'https://HarizibAm.me/path';
    const actual = normalizeURL(input);
    const expected = 'harizibam.me/path';
    expect(actual).toEqual(expected);
});


test('normalizeURL strip http', () => {
    const input = 'http://harizibAm.me/path';
    const actual = normalizeURL(input);
    const expected = 'harizibam.me/path';
    expect(actual).toEqual(expected);
});