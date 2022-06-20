"use strict";

const { hashPassword } = require("./../helper/hash");
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        fullName: "Camilla Cherry",
        phoneNumber: "037-531-5586",
        email: "aliquam@google.edu",
        gender: "male",
        password: hashPassword("123456"),
        birthdayDate: "08-15-74",
        address: "Jl raya 1 no 31 sukabumi jawa barat",
        profilePhotoUrl: "https://pinterest.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Judith Weaver",
        phoneNumber: "037-342-8585",
        email: "eu@google.couk",
        gender: "female",
        password: hashPassword("123456"),
        birthdayDate: "09-12-89",
        address: "Jl raya 1 no 31 sukabumi jawa barat",
        profilePhotoUrl: "https://pinterest.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Kaye Mann",
        phoneNumber: "072-262-3083",
        email: "aliquet@icloud.couk",
        gender: "male",
        password: hashPassword("123456"),
        birthdayDate: "07-24-92",
        address: "Jl raya 1 no 31 sukabumi jawa barat",
        profilePhotoUrl: "https://pinterest.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Beatrice Koch",
        phoneNumber: "058-576-4515",
        email: "suscipit.nonummy@icloud.com",
        birthdayDate: "10-04-80",
        gender: "male",
        password: hashPassword("123456"),
        address: "Jl raya 1 no 31 sukabumi jawa barat",
        profilePhotoUrl: "https://pinterest.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Mohammad Travis",
        phoneNumber: "082-475-8724",
        email: "morbi.non@aol.net",
        gender: "male",
        password: hashPassword("123456"),
        address: "Jl raya 1 no 31 sukabumi jawa barat",
        birthdayDate: "08-11-77",
        profilePhotoUrl: "https://pinterest.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, { truncate: true, cascade: true, restartIdentity: true });
  },
};
