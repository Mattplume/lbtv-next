export function formatVideoDuration(durationInSeconds: number): string {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = Math.floor(durationInSeconds % 60);

  if (minutes < 1) {
    return `0 : ${seconds.toString().padStart(2, '0')}`;
  } else {
    return `${minutes} : ${seconds.toString().padStart(2, '0')}`;
  }
}