// Reference implementation for the documented contract.
export default (value) =>
  Array.from(new Intl.Segmenter('en', { granularity: 'grapheme' }).segment(value)).length;
