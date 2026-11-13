// Reference implementation for the documented contract.
export default (events) => {
  const seen = new Set();
  return events.reduce((sum, event) => {
    if (seen.has(event.id)) return sum;
    seen.add(event.id);
    return sum + event.amount;
  }, 0);
};
