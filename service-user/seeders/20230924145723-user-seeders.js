"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Setiawan Chandra",
          profession: "Admin Micro",
          role: "admin",
          email: "wawan@gmail.com",
          password: await bcrypt.hash("wawan123", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Setiawan Student",
          profession: "Frontend Developer",
          role: "student",
          email: "wawanstudent@gmail.com",
          password: await bcrypt.hash("wawan123", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
