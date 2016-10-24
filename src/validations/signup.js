import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = [];

  if (Validator.isNull(data.username)) {
    errors.push('Username is a required field');
  }

  if (Validator.isNull(data.email)) {
    errors.push('Email is a required field');
  }

  if (!Validator.isEmail(data.email)) {
    errors.push('Email is invalid');
  }

  if (Validator.isNull(data.password)) {
    errors.push('Password is a required field');
  }

  if (Validator.isNull(data.passwordConfirmation)) {
    errors.push('Confirm Password is a required field');
  }

  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.push('Passwords must match');
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
