import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function ValidateInput(data) {
  let errors = [];

  if (Validator.isNull(data.identifier)) {
    errors.push('Username / Email is a required field.');
  }

  if (Validator.isNull(data.password)) {
    errors.push('Password is a required field.');
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
