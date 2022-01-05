module.exports = (sequelize,DataTypes)=>{
    const sponsored_content = sequelize.define("sponsored_content",{
        title : {
            type : DataTypes.STRING,
            defaultValue : null
        },
        description : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        attach_link : {
            type : DataTypes.STRING,
            defaultValue: null
        }
    },{
        updatedAt:false
    })
    return sponsored_content
}