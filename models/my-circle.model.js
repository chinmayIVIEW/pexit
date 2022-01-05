module.exports = (sequelize,DataTypes)=>{
    const my_circle = sequelize.define("mycircle",{
        connection_id : {
            type : DataTypes.INTEGER,
            defaultValue: null
        },
        connection_status : {
            type : DataTypes.STRING,
            defaultValue: null
        }
    },{
        updatedAt:false
    })
    return my_circle
}