"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "provinces",
      [
        {
          name: "Jawa Timur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jawa Tengah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jawa Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Banten",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bali",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("provinces", null, {});
  },
};
