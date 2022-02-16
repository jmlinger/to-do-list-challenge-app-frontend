const Joi = require("joi");

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false }}),
  password: Joi.string().min(6),
})

module.exports = {
  loginValidation: (login) => loginSchema.validate(login),
}