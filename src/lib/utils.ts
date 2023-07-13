/**
 * Used when some feature must be disabled
 * or enabled while in Development Environment
 * */
export const inDevEnvironment = process && process.env.NODE_ENV === 'development' // prettier-ignore

/**
 * Return a list of Slugs (strings) that should be filtered out
 * when NOT in Development Environment
 */
export const devOnlyEntries = inDevEnvironment ? [] : ["debug"] // prettier-ignore

/**
 * This function will include all the Slugs that should be filtered out
 * when in Production Environment
 *
 * @param list Array of Slugs (strings) to filter out
 * @returns A concatenated Array of Slugs
 */
export const filterSlugs = (list: Array<string>) => list.concat(devOnlyEntries) // prettier-ignore
