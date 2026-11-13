// Reference implementation for the documented contract.
export default (value) => new Date(value).toISOString().slice(0, 10);
