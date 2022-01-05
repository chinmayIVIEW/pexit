module.exports = (sequelize,DataTypes)=>{
    const jobs = sequelize.define("jobs",{
        logo : {
            type : DataTypes.BLOB,
            defaultValue: null
        },
        job_title : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        company : {
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
        job_function : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        employee_type : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        company_industry : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        seniority_level : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        job_description : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        company_description : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        mode_of_apply : {
            type : DataTypes.STRING,
            defaultValue: null
        }
    },{
        updatedAt:false
    })
    return jobs
}