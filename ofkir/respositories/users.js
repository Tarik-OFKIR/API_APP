const { User } = require('../models')
module.exports = {
    getAllUses() {
        return User.findAll()
    },

    getUses(offset = 0, limit = 10) {
        return User.findAll({ offset: offset, limit: limit });
    },


    getUserbyrole(role) {
        return User.findAll({
            where: {
                role: role
            }
        });
    },


    getAdmins() {
        return this.getUserbyrole('admin')
    },
    getAuthors() {
        return this.getUserbyrole('author')
    },
    getGuests() {
        return this.getUserbyrole('guest')
    },
    getUser(id) {
        return User.findone({
            where: {
                id: id
            }
        });

    },
    getUserByEmail(email) {
        return User.findOne({
            where: {
                email: email
            }
        });
    },
    addUser(userad) {
        user = this.getUserByEmail(userad.email);
        if (user)
            return {
                starus: 403,
                message: 'User already exists'
            };
        var user = User.create(userad)
        return {
            status: 200,
            message: ' User added succesuflly',
            user: user
        }
    },
    updateUser(id, userad) {
        return User.updat(userad, {
            where: {
                id: id
            }
        })
    },
    deleteUser(id) {
        return User.destroy({
            where: {
                id: id
            }
        })
    },


}