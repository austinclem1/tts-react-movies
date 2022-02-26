class MovieData {
  constructor({ title, description, year, genre }) {
    this.title = title;
    this.description = description;
    this.year = year;
    this.genre = genre;
  }
}

const collection1 = [
  new MovieData({
    title: 'Death at a Funeral',
    description:
      'A 2007 British black comedy film directed by Frank Oz. The screenplay by Dean Craig focuses on a family attempting to resolve a variety of problems, whilst they attend the funeral of the patriarch.',
    year: 2007,
    genre: 'Comedy',
  }),
  new MovieData({
    title: 'The Naked Gun: From the Files of Police Squad!',
    description:
      'A 1988 American crime comedy film directed by David Zucker and released by Paramount Pictures. The film stars Leslie Nielsen as the bumbling police lieutenant Frank Drebin. Priscilla Presley, Ricardo Montalbán, George Kennedy, and O. J. Simpson also star in supporting roles.',
    year: 1988,
    genre: 'Comedy',
  }),
  new MovieData({
    title: "Wayne's World",
    description:
      "A 1992 American comedy film directed by Penelope Spheeris. It was produced by Lorne Michaels and written by Mike Myers and Bonnie & Terry Turner. Based on the Saturday Night Live sketch Wayne's World, it stars Myers in his feature film debut as Wayne Campbell and Dana Carvey as Garth Algar, a pair of rock music fans who broadcast a public-access television show. It also features Tia Carrere, Rob Lowe, Lara Flynn Boyle, Brian Doyle-Murray, Chris Farley, Ed O'Neill, Ione Skye, Meat Loaf, and Alice Cooper in supporting roles.",
    year: 1992,
    genre: 'Comedy',
  }),
];

const collection2 = [
  new MovieData({
    title: 'Blade Runner',
    description:
      "A 1982 science fiction film directed by Ridley Scott, and adapted by Hampton Fancher and David Peoples. Starring Harrison Ford, Rutger Hauer, Sean Young, and Edward James Olmos, it is an adaptation of Philip K. Dick's 1968 novel Do Androids Dream of Electric Sheep? The film is set in a dystopian future Los Angeles of 2019, in which synthetic humans known as replicants are bio-engineered by the powerful Tyrell Corporation to work on space colonies. When a fugitive group of advanced replicants led by Roy Batty (Hauer) escapes back to Earth, burnt-out cop Rick Deckard (Ford) reluctantly agrees to hunt them down.",
    year: 1982,
    genre: 'Sci-Fi',
  }),
  new MovieData({
    title: 'Serenity',
    description:
      'A 2005 American space Western film written and directed by Joss Whedon in his feature directorial debut. The film is a continuation of Whedon\'s short-lived 2002 Fox television series Firefly and stars the same cast, taking place after the events of the final episode. Set in 2517, Serenity is the story of the crew of Serenity, a "Firefly-class" spaceship. The captain and first mate are veterans of the Unification War, having fought on the losing Independent side against the Alliance. Their lives of smuggling and cargo-running are interrupted by a psychic passenger who harbors a dangerous secret.',
    year: 2005,
    genre: 'Sci-Fi',
  }),
  new MovieData({
    title: 'Alien',
    description:
      "A 1979 science fiction horror film directed by Ridley Scott and written by Dan O'Bannon. Based on a story by O'Bannon and Ronald Shusett, it follows the crew of the commercial space tug Nostromo, who encounter the eponymous Alien, an aggressive and deadly extraterrestrial set loose on the ship. The film stars Tom Skerritt, Sigourney Weaver, Veronica Cartwright, Harry Dean Stanton, John Hurt, Ian Holm, and Yaphet Kotto.",
    year: 1979,
    genre: 'Sci-Fi',
  }),
];

const movieCollections = [collection1, collection2];

export { MovieData, movieCollections };
