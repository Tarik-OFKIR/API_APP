const { Comment } = require('../models')
const { Article } = require('../models')
const { commerce } = require('faker');
module.exports = {
    getAllComments() {
        return Comment.findAll()
    },

    getComments(offset = 0, limit = 10) {
        return Comment.findAll({ offset: offset, limit: limit });
    },


    getCommentById(id) {
        return Comment.findOne({
            where: {
                id: id
            }
        });

    },

    async countArticle(ida) {
        return await Comment.count({
            where: {
                id: ida
            }
        });
    },

    getArticleComments(id) {
        var x = Comment.findAll({
            where: {
                ArticleId: id
            }
        });
        return x
    },


    getArticleComments(id) {
        var x = Comment.findAll({
            where: {
                ArticleId: id
            }
        });
        return x
    },

    getArticleComments(id) {
        var x = Comment.findAll({
            where: {
                ArticleId: id
            }
        });
        return x
    },


    async addComment(com) {
        commente = await this.getCommentById(com.id);
        if (commente)
            return {
                starus: 403,
                message: 'Coment already exists'
            };
        var commente = Comment.create(com)
        return {
            status: 200,
            message: ' Comment added succesuflly',
            commente: commente
        }
    },


    updatComment(com) {
        return Comment.update(com, {
            where: {
                id: com.id
            }
        })
    },
    async deleteComment(commdel) {
        if (!commdel) {
            return { msg: 'No Id specified..', payload: 1 };
        }

        try {
            return !!await Comment.destroy({
                where: {
                    id: commdel.id
                }
            });
        } catch (e) {
            return false;
        };
    },


}