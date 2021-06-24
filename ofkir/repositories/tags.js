const { Tag } = require('../models')
const moment = require('moment')
module.exports = {
    getAllTags() {
        return Tag.findAll()
    },

    getTags(offset = 0, limit = 10) {
        return Tag.findAll({ offset: offset, limit: limit });
    },

    getTagById(id) {
        return Tag.findOne({
            where: {
                id: id
            }
        });

    },
    async addTag(tagadd) {
        const created = await Tag.create({
            name: tagadd.name,
            createdAt: moment().format("YYYY/MM/DD h:mm:ss"),
            updatedAt: moment().format("YYYY/MM/DD h:mm:ss"),
        });
        let data = {}
        if (created != null) {
            data.id = created.id
            data.name = created.name
        }
        return data
    },

    updateTag(tag) {
        return Tag.update(
            tag, {
                where: {
                    id: tag.id
                }
            }
        )
    },
    async deleteTag(tagdel) {
        if (!tagdel) {
            return { msg: 'No Id specified..', payload: 1 };
        }

        try {
            return !!await Tag.destroy({
                where: {
                    id: tagdel.id
                }
            });
        } catch (e) {
            return false;
        };
    },
    // D'autres méthodes jugées utiles
}