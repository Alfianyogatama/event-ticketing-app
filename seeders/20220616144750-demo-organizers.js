"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Organizers", [
      {
        name: "Tortor Nunc Commodo Corporation",
        phoneNumber: "1-446-802-8767",
        email: "dolor.egestas.rhoncus@google.org",
        address: "893-3551 Ligula. St.",
        logo_url: "https://naver.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Duis Ac Ltd",
        phoneNumber: "1-892-646-2969",
        email: "condimentum.donec@icloud.ca",
        address: "Ap #280-3493 Adipiscing Street",
        logo_url: "https://cnn.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mauris Aliquam Institute",
        phoneNumber: "1-854-875-8086",
        email: "amet.risus@icloud.com",
        address: "Ap #539-1534 Blandit. Avenue",
        logo_url: "https://google.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nibh Donec Consulting",
        phoneNumber: "1-468-917-4830",
        email: "auctor.mauris.vel@google.org",
        address: "Ap #459-9201 Ultricies St.",
        logo_url: "https://walmart.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fermentum Risus Foundation",
        phoneNumber: "(717) 765-8866",
        email: "a.ultricies@protonmail.net",
        address: "6346 Praesent Rd.",
        logo_url: "https://naver.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Organizers", null, { truncate: true, cascade: true, restartIdentity: true });
  },
};
