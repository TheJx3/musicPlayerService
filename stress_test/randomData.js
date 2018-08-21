'use strict';

module.exports = {
  generateRandomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const artist = `${Faker.name.firstName()} ${Faker.name.lastName()}`;
  const title = `${Faker.lorem.word()} ${Faker.lorem.word()}`;
  const url = Faker.image.imageUrl();
  const songId = Faker.random.number({min:1, max:10000000});
  // add variables to virtual user's context:
  userContext.vars.artist = artist;
  userContext.vars.title = title;
  userContext.vars.songId = songId;
  userContext.vars.url = url;
  // continue with executing the scenario:
  return done();
}