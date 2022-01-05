module.exports = (sequelize,DataTypes)=>{
    const experience = sequelize.define("experience",{
        company_name : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        title : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        location : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        time_period : {
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
    return experience
}