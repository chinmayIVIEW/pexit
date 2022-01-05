
module.exports = (sequelize,DataTypes)=>{
    const profile = sequelize.define("Profile",{
        profile_id: {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        user_name : {
            type: DataTypes.STRING,
            allowNull : false
        },
        display_name : {
            type: DataTypes.STRING,
            allowNull : false
        },
        profession : {
            type: DataTypes.STRING,
            defaultValue: null
        },
        professional_role : {
            type: DataTypes.STRING,
            defaultValue: null
        },
        email_id :{
            type: DataTypes.STRING,
            unique : true,
            allowNull:false
        },
        phone : {
            type: DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        date_of_birth : {
            type: DataTypes.DATE,
            defaultValue: null
        },
        gender : {
            type: DataTypes.STRING,
            defaultValue: null
        },
        address : {
            type: DataTypes.STRING(1234),
            defaultValue: null
        },
        country : {
            type: DataTypes.STRING,
            allowNull : null
        },
        state : {
            type: DataTypes.STRING,
            defaultValue: null
        },
        location:{
            type: DataTypes.STRING,
            defaultValue: null
        },
        postal_location:{
            type: DataTypes.STRING,
            defaultValue: null
        },
        summery : {
            type: DataTypes.STRING,
            defaultValue: null
        },
        password : {
            type: DataTypes.STRING,
            allowNull : false,
            unique: true
        }
    },{
        updatedAt:false
    })
    return profile
}