const errors = {
  validation: {
    fieldRequired: (field) => `${field ? field : 'This field'} is required`,
    emailRequired: 'E-mail is required',
    emailInvalid: 'Invalid e-mail address',
    passwordRequired: 'Password is required',
    passwordIncorrect: 'Incorrect password',
    confirmRequired: 'Password confirmation is required',
    confirmIncorrect: 'Incorrect password confirmation',
    sameOldNewPassword: 'New password cannot be the same as old password'
  },
  user: {
    remove: (userName) => `You remove user <strong>${userName}</strong>`,
    removeConfirm: (userName) => `Are you sure to remove user <strong>${userName}</strong>?`
  },
  common: {
    error: 'Something went wrong. Try again later...',
    connectionFailure: 'Network Connection Failure',
    messageNotSent: 'Your message has not been sent'
  },
  analytics: {
    incorrectResponse: (data) => ['Incorrect response: ', data]
  }
};

export default errors;
