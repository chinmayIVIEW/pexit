module.exports = (sequelize,DataTypes)=>{
    const group = sequelize.define("group",{
        group_id : {
            type : DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        description : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        assign_to : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        type:{
            type : DataTypes.STRING,
            defaultValue: null
        }
    
    },{
        updatedAt:false
    })
    return group
}