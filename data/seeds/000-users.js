
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{
        "id": 1,
        "username": "user1", 
        "password": "$2a$10$L4JX51J.yW4NyyqFaskIx.3UvrAyd0AK3zwZu/8NiiJQhLMcmbQTW"
      }, {
        "id": 2,
        "username": "user2",
        "password": "$2a$10$L0M.fB2Nyi1B3QR0JagtN.uV1JuFsGEj7MGxo9HZlUmAz2N.i4B9."
      }, {
        "id": 3,
        "username": "user3",
        "password": "$2a$10$uVIZU/    Sqaa44oHEnF7tcFOdB.SDu40kGKtWWiLSQ7aDUBoaZAMD9."
      }, {
        "id": 4,
        "username": "user4",
        "password":     "$2a$10$VsHMDkBB1E6.kBqv1jCPHuwEFTH6AD9B9BRnN5gXuVDetlqOjISO2"
      }, {
        "id": 5,
        "username": "user5",
        "password": "$2a$10$7nYS5o7yiunutPVtIz/   LYecLQSU3TS5EGrVdAIi0KP8WZzFHS5f8W"
      }]);
    });
};