import dayjs from 'dayjs';

export function formatPublishDate(date: string): string {
  return dayjs(date, 'YYYY-MM-DD').format('DD MMM YYYY');
}
