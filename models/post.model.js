module.exports = (sequelize,DataTypes)=>{
    const posts = sequelize.define("my-posts",{
        post_id : {
            type : DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        title : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        description : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        share_with : {
            type : DataTypes.STRING,
            defaultValue: null
        }
    },{
        updatedAt:false
    })
    return posts
}