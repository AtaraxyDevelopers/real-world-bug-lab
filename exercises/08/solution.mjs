// Reference implementation for the documented contract.
export default (keys) => {
  const counts = new Map();
  for (const key of keys) counts.set(key, (counts.get(key) || 0) + 1);
  return keys.map((key) => counts.get(key));
};
