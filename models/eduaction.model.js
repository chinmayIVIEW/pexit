module.exports = (sequelize,DataTypes)=>{
    const education = sequelize.define("education",{
        school : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        date_attended : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        degree : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        mode_of_study : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        field_of_study : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        activity_and_societies : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        description : {
            type : DataTypes.STRING,
            defaultValue: null
        },
    },{
        updatedAt:false
    })
    return education
}