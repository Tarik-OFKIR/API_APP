const { User } = require('../models')
module.exports = {
    getAllUsers() {
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
        return User.findOne({
            where: {
                id: id
            }
        });

    },
    async getUserByEmail(email) {
        user = await User.findOne({ where: { email } })
        if (user != null)
            throw new Error(`e;ail dkhal`);
        return user;
    },
    async addUser(userad) {
        try {
            user = await this.getUserByEmail(userad.email);
            var user = User.create(userad)
            return {
                status: 201,
                message: ' User added succesuflly',
                user: user
            }
        } catch {
            return {
                status: 409,
                message: ' User already exist'
            }

        }


    },
    updateUser(userup) {
        return User.update(userup, {
            where: {
                id: userup.id
            }
        })
    },
    async deleteUser(userdel) {
        if (!userdel) {
            return { msg: 'No Id specified..', payload: 1 };
        }

        try {
            return !!await User.destroy({
                where: {
                    id: userdel.id
                }
            });
        } catch (e) {
            return false;
        };
    },


}