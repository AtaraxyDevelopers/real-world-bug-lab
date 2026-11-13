// Reference implementation for the documented contract.
export default (values) => values.reduce((a, b) => a + Math.round(b * 100), 0);
