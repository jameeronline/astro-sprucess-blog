// src/utils/index.js

/**
 * Convert a string to a URL-friendly slug.
 * Example: "Hello, World!" -> "hello-world"
 */
export function slugify(str) {
    if (typeof str !== 'string') return ''
    return str
        .trim()
        .toLowerCase()
        .normalize('NFD')                  // separate diacritics
        .replace(/[\u0300-\u036f]/g, '')  // remove diacritics
        .replace(/[^a-z0-9\s-]/g, '')     // remove invalid chars
        .replace(/\s+/g, '-')             // replace spaces with -
        .replace(/-+/g, '-')              // collapse multiple -
        .replace(/^-+|-+$/g, '')          // trim leading/trailing -
}

export default slugify