const Joi = require('joi')

//rules
const firstname = Joi.string().max(100).required()
const lastname = Joi.string().max(100).required()
const email = Joi.string().email({ minDomainAtoms: 2 })
const password = Joi.string().min(8).required()
const confirmPassword = Joi.any().valid(Joi.ref('password')).required()


module.exports = {

    validateBody: schema => {
        //validateBody is a fn that returns a middleware
        return (req, res, next) => {
            //this middleware validate req.body aganinst a schema and returns any or no error
            const { error } = Joi.validate(req.body, schema, { abortEarly: false })

            if (error) {
                //if any error, transform them into objects of Formik error shape {field, error} and attach then to the req
                let errors = []
                error.details.forEach(error => {
                    errors.push({
                        field: error.path[0],
                        error: error.message
                    })
                })
                req.errors = errors
                next()
            }
            next()
        }
    },

    schemas: {
        registerSchema: {
            firstname,
            lastname,
            email,
            password,
            confirmPassword
        },
        loginSchema: {
            email,
            password
        }
    }
}
