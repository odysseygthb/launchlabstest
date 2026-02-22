export function sanitiseId(value: string): number | undefined {
    if (value.trim() === '') return undefined;
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? undefined : parsed;
}