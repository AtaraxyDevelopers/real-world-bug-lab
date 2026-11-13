// Reference implementation for the documented contract.
export default (values, page, size) => {
  if (!Number.isInteger(page) || page < 1 || !Number.isInteger(size) || size < 1)
    throw new RangeError('Invalid pagination');
  return values.slice((page - 1) * size, page * size);
};
