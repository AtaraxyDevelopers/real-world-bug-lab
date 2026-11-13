// Intentionally incorrect. Edit this file to solve the exercise.
export default (keys) => {
  const counts = {};
  for (const key of keys) counts[key] = (counts[key] || 0) + 1;
  return keys.map((key) => counts[key]);
};
