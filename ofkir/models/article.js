'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Article extends Model {

        static associate(models) {
            Article.belongsTo(models.User)
            Article.hasMany(models.comment)
            Article.belongsToMany(models.tag, { through: 'ArticleTage' })
        }
    };
    Article.init({
        title: {
            type: DataTypes.STRING,
            unique: true
        },
        content: DataTypes.TEXT,
        published: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        sequelize,
        modelName: 'Article',

    });
    return Article;
};