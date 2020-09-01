export const formatTimeString = (timeDifference) => {
  const timeRef = {
    minute: 60000,
    hour: 3600000,
    year: 31536000000,
  };

  if (timeDifference < timeRef.minute) return "seconds ago";
  else if (timeDifference < timeRef.minute * 2) return "1 minute ago";
  else if (timeDifference < timeRef.hour) {
    const minutes = Math.floor(timeDifference / timeRef.minute);

    return `${minutes} minutes ago`;
  }

  // if (timeDifference >= (timeRef.year * 2)) {
  //   const numYears = Math.floor(timeDifference / timeRef.year);
  //   console.log(timeDifference / timeRef.year);
  //   return `${numYears} years ago`;
  // }
};
