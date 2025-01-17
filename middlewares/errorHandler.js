const errorHandler = (err,req,res,next) => {

    let status = 500
    let message = `Internal Server Error`

    if(err.name == `SequelizeValidationError` || err.name == `SequelizeUniqueConstraintError`){
        status = 400
        message = err.errors[0].message
    }
    else if(err.name == `email unique`){
        status = 400
        message = `email is already use`
    }
    else if(err.name == `Data Not Found`){
        status = 404
        message = err.name
    }
    else if(err.name == `invalid_credentials`){
        status = 401
        message = `Invalid email/password`
    }
    else if (err.name == `invalid token` || err.name == `JsonWebTokenError`){
        status = 401
        message = `Invalid Token`
    }
    else if(err.name == `forbidden`){
        status = 403
        message = `forbidden`
    }
    else if(err.name == `invalid_email`){
        status = 400
        message = 'use real email'
    }
    res.status(status).json(message)
}

module.exports = errorHandler