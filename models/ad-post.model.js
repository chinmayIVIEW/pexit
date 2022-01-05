module.exports = (sequelize,DataTypes)=>{
    const ad_post = sequelize.define("ad_post",{
        layout : {
            type : DataTypes.INTEGER,
            defaultValue: null
        },
        title : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        link : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        media_link : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        age_group : {
            type : DataTypes.INTEGER,
            defaultValue: null
        },
        gender : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        country : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        state : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        company_name : {
            type: DataTypes.STRING,
            defaultValue: null
        }
    },{
        updatedAt:false
    })
    return ad_post
}