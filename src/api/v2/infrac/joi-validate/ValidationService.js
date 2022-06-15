import Joi from 'joi';

export default class ValidationService {
    static validateId = (id) => {
        const idSchema = Joi.string().
            min(24).max(24).required();

        const resource = Joi.validate(id, idSchema);

        return resource.error;
    }

    static validateEmail = (email) => {
        const emailSchema = Joi.string().email({ minDomainSegments: 2 }).lowercase().required();

        const resource = Joi.validate(email, emailSchema);

        return resource.error;
    }

    static validatePassword = (password) => {
        const passwordSchema = Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required();

        const resource = Joi.validate(password, passwordSchema);

        return resource.error;
    }

    static validateAccesstoken = (accessonToken) => {
        const accessonTokenSchema = Joi.string().required();

        const resource = Joi.validate(accessonToken, accessonTokenSchema);

        return resource.error;
    }
}