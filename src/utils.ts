export const convertToClock = (seconds: number): string => {
  if (seconds < 0) {
    return '00 : 00';
  }

  const remainSeconds = String(Math.floor(seconds % 60)).padStart(2, '0');
  const remainMinutes = String(Math.floor(seconds / 60)).padStart(2, '0');

  return `${remainMinutes} : ${remainSeconds}`;
};

export const setEnd = (seconds: string): number => {
  return Math.floor(new Date().getTime() / 1000 + Number(seconds) * 60);
};

export const currentTimestampSeconds = (): number => {
  return Math.floor(new Date().getTime() / 1000);
};

export const setResumeTime = (seconds: string): number => {
  return Math.floor(new Date().getTime() / 1000 + Number(seconds));
};
