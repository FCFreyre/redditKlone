
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('link').del()
    .then(function () {
      // Inserts seed entries
      return knex('link').insert([
      {
        votes: 35,
        url: 'http://www.reddit.com',
        title: 'Actual Reddit'
      },
      {
        votes: 14,
        url: 'http://www.yahoo.com',
        title: 'Actual Yahoo'
      },
      {
        votes: -100,
        url: 'http://www.askjeeves.com',
        title: 'Ask Jeeves!'
      }
      ]);
    });
};
