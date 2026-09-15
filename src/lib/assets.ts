// Public assets are referenced by URL (never imported) so a missing file can
// never break the build. BASE_URL always ends with a slash.
export const asset = (path: string): string => `${import.meta.env.BASE_URL}${path}`;
