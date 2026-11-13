// Reference implementation for the documented contract.
export default async (values) => Promise.all(values.map(async (value) => value * 2));
