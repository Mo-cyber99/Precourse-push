const {
  isSweetEnough,
  shoutNames,
  isShrekCharacter,
} = require('../problem-solving/refactoring');

describe('shoutNames', () => {
  it('returns all names uppercased', () => {
    let names = ['Carrie', 'Diya', 'Kyle', 'Christian'];
    let expected = ['CARRIE', 'DIYA', 'KYLE', 'CHRISTIAN'];
    expect(shoutNames(names)).toEqual(expected);

    names = ['Maddie', 'Bethan', 'Andrea', 'Jade'];
    expected = ['MADDIE', 'BETHAN', 'ANDREA', 'JADE'];
    expect(shoutNames(names)).toEqual(expected);
  });
});

describe('isSweetEnough', () => {
  it('returns true when all foods are sweet', () => {
    const foodArray = [
      { name: 'chocolate', flavour: 'sweet' },
      { name: 'banana', flavour: 'sweet' },
      { name: 'barfi', flavour: 'sweet' },
    ];
    expect(isSweetEnough(foodArray)).toBe(true);
  });
  it('returns false when no foods are sweet', () => {
    const foodArray = [
      { name: 'samosa', flavour: 'savoury' },
      { name: 'lemon', flavour: 'sour' },
      { name: 'olive', flavour: 'bitter' },
    ];
    expect(isSweetEnough(foodArray)).toBe(false);
  });
  it('returns false when not all foods are sweet', () => {
    const foodArray = [
      { name: 'stollen', flavour: 'sweet' },
      { name: 'cranberries', flavour: 'sour' },
      { name: 'mince pie', flavour: 'sweet' },
    ];
    expect(isSweetEnough(foodArray)).toBe(false);
  });
});

describe('isShrekCharacter', () => {
  it('returns empty array if no characters are from the movie, Shrek.', () => {
    const characters = [
      { name: 'Cedric Diggory', movie: 'Harry Potter and the Goblet of Fire' },
      { name: 'Elle Woods', movie: 'Legally Blonde' },
      { name: 'Paddington Bear', movie: 'Paddington 2' },
    ];

    expect(isShrekCharacter(characters)).toEqual([]);
  });
  it('returns all characters if all characters are from the movie, Shrek.', () => {
    const characters = [
      {
        name: 'Shrek',
        movie: 'Shrek',
      },
      { name: 'Lord Farquaad', movie: 'Shrek' },
      { name: 'Magic Mirror', movie: 'Shrek' },
    ];

    expect(isShrekCharacter(characters)).toEqual([
      {
        name: 'Shrek',
        movie: 'Shrek',
      },
      { name: 'Lord Farquaad', movie: 'Shrek' },
      { name: 'Magic Mirror', movie: 'Shrek' },
    ]);
  });
  it('returns some characters if some characters are from the movie, Shrek.', () => {
    const characters = [
      {
        name: 'Cher',
        movie: 'Clueless',
      },
      {
        name: 'Hans Gruber',
        movie: 'Die Hard',
      },
      {
        name: 'Donkey',
        movie: 'Shrek',
      },
      {
        name: 'Lola',
        movie: 'Shark Tale',
      },
    ];
    const expected = [
      {
        name: 'Donkey',
        movie: 'Shrek',
      },
    ];

    expect(isShrekCharacter(characters)).toEqual(expected);
  });
  it('returns any characters from the Shrek franchise.', () => {
    const characters = [
      { name: 'Fiona', movie: 'Shrek' },
      { name: 'Fairy Godmother', movie: 'Shrek 2' },
      { name: 'Cookie', movie: 'Shrek 4' },
      { name: 'Puss In Boots', movie: 'Shrek 2' },
      { name: 'Han Solo', movie: 'Star Wars: A New Hope' },
    ];
    const expected = [
      { name: 'Fiona', movie: 'Shrek' },
      { name: 'Fairy Godmother', movie: 'Shrek 2' },
      { name: 'Cookie', movie: 'Shrek 4' },
      { name: 'Puss In Boots', movie: 'Shrek 2' },
    ];

    expect(isShrekCharacter(characters)).toEqual(expected);
  });
});
