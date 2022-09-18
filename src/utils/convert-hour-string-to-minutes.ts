/**
 * Convert hour "18:00" into minutes
 * Format 18:00 => ['18','00'] => [18,00]
 * @param hourString : string
 * @returns hour in minutes
 */
export function convertHourStringToMinutes(hourString: string) {
    const [hours, minutes] = hourString.split(':').map(Number);
    const minutesAmount = hours * 60 + minutes;
    return minutesAmount;
}
