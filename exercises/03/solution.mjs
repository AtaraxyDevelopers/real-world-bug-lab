// Reference implementation for the documented contract.
export default (values) =>
  values.length ? values.reduce((a, b) => a + b, 0) / values.length : null;
