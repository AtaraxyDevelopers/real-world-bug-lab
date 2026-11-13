// Reference implementation for the documented contract.
export default (value) =>
  !!value && typeof value.email === 'string' && value.email.trim().length > 0;
