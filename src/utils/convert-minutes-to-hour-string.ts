/**
 * Convert hour "18:00" into minutes
 * Format 18:00 => ['18','00'] => [18,00]
 * @param hourString : string
 * @returns hour in minutes
 */
export function convertMinutesToHourString(minutesAmount: number) {
    const minutes = minutesAmount % 60;
    const hours = Math.floor(minutesAmount / 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
        2,
        '0'
    )}`;
    // const [hours, minutes] = hourString.split(':').map(Number);
    // const minutesAmount = hours * 60 + minutes;
    // return minutesAmount;
}
