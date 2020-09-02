export const formatTimeString = (timeDifference) => {
  const timeRef = {
    minute: 60000,
    hour: 3600000,
    day: 86400000,
    week: 604800000,
    month: 2592000000, // 30 days
    year: 31536000000, // 365 days
  };

  if (timeDifference < timeRef.minute) return "seconds ago";
  if (timeDifference < timeRef.minute * 2) return "1 minute ago";
  if (timeDifference < timeRef.hour) {
    const minutes = Math.floor(timeDifference / timeRef.minute);
    return `${minutes} minutes ago`;
  }
  if (timeDifference < timeRef.hour * 2) return "1 hour ago";
  if (timeDifference < timeRef.day) {
    const hours = Math.floor(timeDifference / timeRef.hour);
    return `${hours} hours ago`;
  }
  if (timeDifference < timeRef.day * 2) return "1 day ago";
  if (timeDifference < timeRef.week) {
    const days = Math.floor(timeDifference / timeRef.day);
    return `${days} days ago`;
  }
  if (timeDifference < timeRef.week * 2) return "1 week ago";
  if (timeDifference < timeRef.month) {
    const weeks = Math.floor(timeDifference / timeRef.week);
    return `${weeks} weeks ago`;
  }
  if (timeDifference < timeRef.month * 2) return "1 month ago";
  if (timeDifference < timeRef.year) {
    const months = Math.floor(timeDifference / timeRef.month);
    return `${months} months ago`;
  }
  if (timeDifference < timeRef.year * 2) return "1 year ago";
  if (timeDifference >= timeRef.year * 2) {
    const years = Math.floor(timeDifference / timeRef.year);
    return `${years} years ago`;
  }
};
