const db_confg = require('../config/connection')
const {Sequelize,DataTypes} = require("sequelize")

const sequelize = new Sequelize(db_confg.DB,db_confg.USER,db_confg.PASSWORD,{
    host:db_confg.HOST,
    dialect:db_confg.dialect,
    logging:false
})


const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.profile = require('./profile.model')(sequelize,DataTypes)
db.experience = require('./experience.model')(sequelize,DataTypes)
db.profile.hasMany(db.experience,{
    foreignKey:'profile_id'
})
db.education = require('./eduaction.model')(sequelize,DataTypes)
db.profile.hasMany(db.education,{
    foreignKey:'profile_id'
})
db.awards = require('./awards.model')(sequelize,DataTypes)
db.profile.hasMany(db.awards,{
    foreignKey:'profile_id'
})

db.posts = require('./post.model')(sequelize,DataTypes)
db.profile.hasMany(db.posts,{
    foreignKey:'profile_id'
})

db.like_comments = require('./like&comments.model')(sequelize,DataTypes)
db.posts.hasMany(db.like_comments,{
    foreignKey:'post_id'
})

db.my_circle = require('./my-circle.model')(sequelize,DataTypes)
db.profile.hasMany(db.my_circle,{
    foreignKey:'profile_id'
})

db.group = require('./groups.model')(sequelize,DataTypes)
db.profile.hasMany(db.group,{
    foreignKey:'profile_id'
})

db.software = require('./software.model')(sequelize,DataTypes)
db.profile.hasMany(db.software,{
    foreignKey:'profile_id'
})

db.products = require('./products.model')(sequelize,DataTypes)
db.profile.hasMany(db.products,{
    foreignKey:'profile_id'
})

db.services = require('./services.model')(sequelize,DataTypes)
db.profile.hasMany(db.services,{
    foreignKey:'profile_id'
})

db.jobs = require('./jobs.model')(sequelize,DataTypes)
db.profile.hasMany(db.jobs,{
    foreignKey:'profile_id'
})

db.sponsored_content = require('./sponsored-content.model')(sequelize,DataTypes)
db.profile.hasMany(db.sponsored_content,{
    foreignKey:'profile_id'
})

db.ad_post = require('./ad-post.model')(sequelize,DataTypes)
db.profile.hasMany(db.ad_post,{
    foreignKey:'profile_id'
})


module.exports = db
 