'use strict';
var faker = require('faker');
module.exports = {
    up: async(queryInterface, Sequelize) => {
        // a l'interuer de la method up() on a ajouté un code qui permettant d'ajouter 20 utilisateur 
        var data = [];

        for (var i = 0; i < 20; ++i) {
            data.push({
                username: faker.name.findName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                role: i == 0 ? 'admin' : (i % 3 == 0 ? 'author' : 'guest'),
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }

        await queryInterface.bulkInsert('Users', data, {});

    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        await queryInterface.bulkDelete('Users', null, {});
    }
};