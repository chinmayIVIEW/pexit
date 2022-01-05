module.exports = (sequelize,DataTypes)=>{
    const products = sequelize.define("products",{
        upload_image_link : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        name : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        location : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        category : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        product_details_link : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        transaction_history_link : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        product_condition : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        description : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        upload : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        upload_catalogue : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        company_profile : {
            type : DataTypes.STRING,
            defaultValue: null
        }
    
    },{
        updatedAt:false
    })
    return products
}