/**
 * Returns a new array with duplicate values removed.
 * @example unique([1, 2, 2, 3, 3]) // [1, 2, 3]
 */
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}
