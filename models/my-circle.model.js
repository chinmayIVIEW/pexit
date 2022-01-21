module.exports = (sequelize,DataTypes)=>{
    const my_circle = sequelize.define("mycircle",{
        connection_id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        connect_user : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        connection_status : {
            type : DataTypes.BOOLEAN,
            defaultValue: null
        }
    },{
        updatedAt:false
    })
    return my_circle
}