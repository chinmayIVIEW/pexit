module.exports = (sequelize,DataTypes)=>{
    const awards = sequelize.define("honors&awards",{
        title : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        date : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        description : {
            type : DataTypes.STRING,
            defaultValue: null
        }
    },{
        updatedAt:false
    })
    return awards
}