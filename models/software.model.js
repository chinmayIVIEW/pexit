module.exports = (sequelize,DataTypes)=>{
    const software = sequelize.define("software",{
        logo : {
            type : DataTypes.BLOB,
            defaultValue: null
        },
        softwere_name : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        email_id : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        download_link : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        description : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        upload_software_link : {
            type : DataTypes.STRING,
            defaultValue: null
        }
    
    },{
        updatedAt:false
    })
    return software
}