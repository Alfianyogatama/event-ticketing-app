"use strict";
const { hashPassword } = require("./../helper/hash");
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("organizers", [
      {
        name: "Tortor Nunc Commodo Corporation",
        phoneNumber: "1-446-802-8767",
        email: "dolor.egestas.rhoncus@google.org",
        address: "893-3551 Ligula. St.",
        logoUrl: "https://naver.com",
        password: hashPassword("123456"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Duis Ac Ltd",
        phoneNumber: "1-892-646-2969",
        email: "condimentum.donec@icloud.ca",
        address: "Ap #280-3493 Adipiscing Street",
        logoUrl: "https://cnn.com",
        password: hashPassword("123456"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mauris Aliquam Institute",
        phoneNumber: "1-854-875-8086",
        email: "amet.risus@icloud.com",
        address: "Ap #539-1534 Blandit. Avenue",
        logoUrl: "https://google.com",
        password: hashPassword("123456"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nibh Donec Consulting",
        phoneNumber: "1-468-917-4830",
        email: "auctor.mauris.vel@google.org",
        address: "Ap #459-9201 Ultricies St.",
        logoUrl: "https://walmart.com",
        password: hashPassword("123456"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fermentum Risus Foundation",
        phoneNumber: "(717) 765-8866",
        email: "a.ultricies@protonmail.net",
        address: "6346 Praesent Rd.",
        logoUrl: "https://naver.com",
        password: hashPassword("123456"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Organizers", null, { truncate: true, cascade: true, restartIdentity: true });
  },
};
