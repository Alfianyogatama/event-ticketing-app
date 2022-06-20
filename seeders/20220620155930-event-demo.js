"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Events", [
      {
        name: "Augue Ut Institute",
        eventDate: "2022-08-10 08:32:00",
        posterUrl: "http://youtube.com",
        description: "nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus.",
        theme: "kesehatan",
        status: "created",
        organizerId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mauris Vel Turpis LLC",
        eventDate: "2023-02-12 02:20:56",
        posterUrl: "http://ebay.com",
        description: "dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies",
        theme: "keuangan",
        status: "created",
        organizerId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Quisque Porttitor Eros Institute",
        eventDate: "2023-01-06 01:49:45",
        posterUrl: "http://google.com",
        description: "Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula.",
        theme: "wanita",
        status: "created",
        organizerId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bibendum Sed Corp.",
        eventDate: "2022-09-17 06:29:02",
        posterUrl: "http://baidu.com",
        description: "ante ipsum primis in faucibus orci luctus et ultrices posuere",
        theme: "bisnis",
        status: "published",
        organizerId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Molestie In Ltd",
        eventDate: "2022-07-11 13:12:31",
        posterUrl: "https://netflix.com",
        description: "odio a purus. Duis elementum, dui quis accumsan convallis, ante",
        theme: "teknologi",
        status: "published",
        organizerId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
