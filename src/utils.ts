export function get(key: any) {
  return (obj: any) => obj[key];
}

export function eqaul(key: any, value: any) {
  return (obj: any) => obj[key] === value;
}

export const convertToClock = (seconds: number): string => {
  if (seconds < 0) {
    return '00:00';
  }
  const remainSeconds = String(Math.floor(seconds % 60)).padStart(2, '0');
  const remainMinutes = Math.floor(seconds / 60);

  return `${remainMinutes} : ${remainSeconds}`;
};
