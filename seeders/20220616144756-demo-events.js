"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Events", [
      {
        name: "luctus et ultrices posuere cubilia Curae Donec",
        eventDate: "06-16-22",
        posterUrl: "http://naver.com",
        description: "volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh.",
        theme: "Pendidikan",
        status: "created ",
        organizerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "sagittis augue, eu tempor erat",
        eventDate: "06-16-22",
        posterUrl: "https://pinterest.com",
        description: "ornare, libero at auctor ullamcorper,",
        theme: "Pendidikan",
        status: "created ",
        organizerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor,",
        eventDate: "06-16-22",
        posterUrl: "https://naver.com",
        description: "fermentum vel, mauris. Integer sem elit, pharetra",
        theme: "Pendidikan",
        status: "published ",
        organizerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "sollicitudin orci",
        eventDate: "06-16-22",
        posterUrl: "https://reddit.com",
        description: "egestas",
        theme: "Pendidikan",
        status: "published ",
        organizerId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cras vulputate",
        eventDate: "06-16-22",
        posterUrl: "http://zoom.us",
        description: "ac tellus.",
        theme: "Pendidikan",
        status: "done",
        organizerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Events", null, { truncate: true, cascade: true, restartIdentity: true });
  },
};
