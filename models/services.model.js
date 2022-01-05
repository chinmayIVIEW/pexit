module.exports = (sequelize,DataTypes)=>{
    const services = sequelize.define("services",{
        logo : {
            type : DataTypes.BLOB,
            defaultValue: null
        },
        company : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        industry : {
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
        city : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        postal_code : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        contact_email : {
            type : DataTypes.STRING,
            defaultValue: null
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
    return services
}