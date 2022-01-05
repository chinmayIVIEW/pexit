module.exports = (sequelize,DataTypes)=>{
    const like_comments = sequelize.define("like&comments",{
        likes : {
            type : DataTypes.INTEGER,
            defaultValue : null
        },
        comments : {
            type : DataTypes.STRING,
            defaultValue: null
        }
    },{
        updatedAt:false
    })
    return like_comments
}