const { Article } = require('../models')
const moment = require('moment')
module.exports = {
    getAllArticles() {
        return Article.findAll()
    },

    getArticales(offset = 0, limit = 10) {
        return Article.findAll({ offset: offset, limit: limit });
    },


    async getArticleById(id) {
        var x = await Article.findOne({
            where: {
                id: id
            }
        })
        return {
            status: 200,
            message: ' Article find succesuflly',
            x: x
        }

    },


    async addArticle(arti) {
        const created = await Article.create({
            title: arti.title,
            content: arti.content,
            published: arti.published,
            createdAt: moment().format("YYYY/MM/DD h:mm:ss"),
            updatedAt: moment().format("YYYY/MM/DD h:mm:ss"),
            UserId: arti.UserId
        });
        let data = {}
        if (created != null) {
            data.id = created.id
            data.title = created.title
            data.content = created.content
            data.UserId = created.UserId
        }
        return data

    },
    getUserArticles(id) {
        var x = Article.findAll({
            where: {
                UserId: id
            }
        });
        return x
    },

    updateArtcle(art) {
        return Article.update(art, {
            where: {
                id: art.id
            }
        })
    },
    async deleteArticle(artdel) {
        if (!artdel) {
            return { msg: 'No Id specified..', payload: 1 };
        }

        try {
            return !!await Article.destroy({
                where: {
                    id: artdel.id
                }
            });
        } catch (e) {
            return false;
        };
    },


}