const { formatTimeString } = require("../utils/time");

describe("formatTimeString()", () => {
  const timeRef = {
    second: 1000,
    minute: 60000,
    hour: 3600000,
    day: 86400000,
    week: 604800000,
    month: 2592000000, // 30 days
    year: 31536000000, // 365 days
  };

  test("return 'seconds ago' when elapsed time is < 1 minute", () => {
    const time0 = timeRef.second;
    const time1 = timeRef.second * 59;
    expect(formatTimeString(time0)).toBe("seconds ago");
    expect(formatTimeString(time1)).toBe("seconds ago");
  });
  test("returns '1 minute ago' when time is < 2 minutes", () => {
    const time0 = timeRef.minute;
    const time1 = timeRef.minute + timeRef.second * 59; // 1 minute 59 seconds
    expect(formatTimeString(time0)).toBe("1 minute ago");
    expect(formatTimeString(time1)).toBe("1 minute ago");
  });
  test("returns 'n minutes ago' when time is < 1 hour", () => {
    const time0 = timeRef.minute * 2;
    const time1 = timeRef.minute * 59;
    const time2 = timeRef.minute * 59 + timeRef.second * 30; // 59 minutes and 30 seconds
    expect(formatTimeString(time0)).toBe("2 minutes ago");
    expect(formatTimeString(time1)).toBe("59 minutes ago");
    expect(formatTimeString(time2)).toBe("59 minutes ago");
  });
  test("returns '1 hour ago' when time is < 2 hours", () => {
    const time0 = timeRef.hour;
    const time1 = timeRef.hour + timeRef.minute * 59; // 1 hour and 59 minutes
    expect(formatTimeString(time0)).toBe("1 hour ago");
    expect(formatTimeString(time1)).toBe("1 hour ago");
  });
  test("returns 'n hours ago' when time is < 1 day", () => {
    const time0 = timeRef.hour * 2;
    const time1 = timeRef.hour * 23;
    const time2 = timeRef.hour * 23 + timeRef.minute * 30; // 23 hours and 30 minutes
    expect(formatTimeString(time0)).toBe("2 hours ago");
    expect(formatTimeString(time1)).toBe("23 hours ago");
    expect(formatTimeString(time2)).toBe("23 hours ago");
  });
  test("returns '1 day ago' when time is < 2 days", () => {
    const time0 = timeRef.day;
    const time1 = timeRef.day + timeRef.hour * 23; // 1 day and 23 hours
    expect(formatTimeString(time0)).toBe("1 day ago");
    expect(formatTimeString(time1)).toBe("1 day ago");
  });

  test("returns 'n days ago' when time is < 1 week", () => {
    const time0 = timeRef.day * 2;
    const time1 = timeRef.day * 6;
    const time2 = timeRef.day * 6 + timeRef.hour * 12; // 6 days and 12 hours
    expect(formatTimeString(time0)).toBe("2 days ago");
    expect(formatTimeString(time1)).toBe("6 days ago");
    expect(formatTimeString(time2)).toBe("6 days ago");
  });
  test("returns '1 week ago' when time is < 2 weeks", () => {
    const time0 = timeRef.week;
    const time1 = timeRef.week + timeRef.day * 6; // 1 week and 6 days
    expect(formatTimeString(time0)).toBe("1 week ago");
    expect(formatTimeString(time1)).toBe("1 week ago");
  });
  test("returns 'n weeks ago' when time is < 1 month", () => {
    const time0 = timeRef.week * 2;
    const time1 = timeRef.day * 29;
    const time2 = timeRef.day * 29 + timeRef.hour * 12; // 29 days and 12 hours
    expect(formatTimeString(time0)).toBe("2 weeks ago");
    expect(formatTimeString(time1)).toBe("4 weeks ago");
    expect(formatTimeString(time2)).toBe("4 weeks ago");
  });
  test("returns '1 month ago' when time is < 2 months", () => {
    const time0 = timeRef.month;
    const time1 = timeRef.month + timeRef.day * 29; // 1 month and 29 days
    expect(formatTimeString(time0)).toBe("1 month ago");
    expect(formatTimeString(time1)).toBe("1 month ago");
  });
  test("returns 'n months ago' when time is < 1 year", () => {
    const time0 = timeRef.month * 2;
    const time1 = timeRef.month * 11;
    const time2 = timeRef.month * 11 + timeRef.week * 3; // 11 months and 3 weeks
    expect(formatTimeString(time0)).toBe("2 months ago");
    expect(formatTimeString(time1)).toBe("11 months ago");
    expect(formatTimeString(time2)).toBe("11 months ago");
  });
  test("returns '1 year ago' when time is < 2 years", () => {
    const time0 = timeRef.year;
    const time1 = timeRef.year + timeRef.month * 11; // 1 year and 11 months
    expect(formatTimeString(time0)).toBe("1 year ago");
    expect(formatTimeString(time1)).toBe("1 year ago");
  });
  test("returns 'n years ago' when time is >= 2 years", () => {
    const time0 = timeRef.year * 2;
    const time1 = timeRef.year * 5 + timeRef.month * 11; // 5 years and 11 months
    expect(formatTimeString(time0)).toBe("2 years ago");
    expect(formatTimeString(time1)).toBe("5 years ago");
  });
});
