export function formatVideoDuration(durationInSeconds: number): string {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = Math.floor(durationInSeconds % 60);

  if (minutes < 1) {
    return `0 : ${seconds.toString().padStart(2, '0')}`;
  } else {
    return `${minutes} : ${seconds.toString().padStart(2, '0')}`;
  }
}

export function timeAgo(dateStr: string): string {
  const now = new Date();
  const published = new Date(dateStr);
  const diffMs = now.getTime() - published.getTime();
  
  // Différences en unités
  const diffSec = diffMs / 1000;
  const diffMin = diffSec / 60;
  const diffHrs = diffMin / 60;
  const diffDays = diffHrs / 24;
  const diffMonths = diffDays / 30; // approximation
  const diffYears = diffDays / 365; // approximation

  if (diffYears >= 1) {
    const count = Math.floor(diffYears);
    return `Il y a ${count} ${count > 1 ? "ans" : "an"}`;
  } else if (diffMonths >= 1) {
    const count = Math.floor(diffMonths);
    return `Il y a ${count} mois`; // "mois" reste invariable
  } else if (diffDays >= 1) {
    const count = Math.floor(diffDays);
    return `Il y a ${count} ${count > 1 ? "jours" : "jour"}`;
  } else if (diffHrs >= 1) {
    const count = Math.floor(diffHrs);
    return `Il y a ${count} ${count > 1 ? "heures" : "heure"}`;
  } else if (diffMin >= 1) {
    const count = Math.floor(diffMin);
    return `Il y a ${count} ${count > 1 ? "minutes" : "minute"}`;
  } else {
    const count = Math.floor(diffSec);
    return `Il y a ${count} ${count > 1 ? "secondes" : "seconde"}`;
  }
}
