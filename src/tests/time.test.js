const { formatTimeString } = require("../utils/time");

describe("formatTimeString()", () => {
  test.only("return 'seconds ago' when elapsed time is < 1 minute", () => {
    expect(formatTimeString(50000)).toBe("seconds ago"); // 50 seconds
    expect(formatTimeString(59000)).toBe("seconds ago"); // 59 seconds
  });
  test.only("returns '1 minute ago' when time is < 2 minutes", () => {
    expect(formatTimeString(60000)).toBe("1 minute ago"); // 1 minute
    expect(formatTimeString(119000)).toBe("1 minute ago"); // 1 minute 59 seconds
  });
  test.only("returns 'n minutes ago' when time is < 1 hour", () => {
    expect(formatTimeString(3540000)).toBe("59 minutes ago"); // 59 minutes
    // to do add test which requires floor division, e.g. 59.1 minutes
  });
  test("returns '1 hour ago' when time is < 2 hours", () => {
    expect(formatTimeString(3600000)).toBe("1 hour ago"); // 1 hour
    expect(formatTimeString(7140000)).toBe("1 hour ago"); // 1 hour and 59 minutes
  });
  test("returns 'n hours ago' when time is < 1 day", () => {
    expect(formatTimeString(86340000)).toBe("23 hours ago"); // 23 hours and 59 minutes
  });
  test("returns '1 day ago' when time is < 2 days", () => {
    expect(formatTimeString(86400000)).toBe("1 day ago"); // 1 day (24 hours)
    expect(formatTimeString(169200000)).toBe("1 day ago"); // 1 day and 23 hours
  });

  test("returns 'n days ago' when time is < 1 week", () => {
    expect(formatTimeString(601200000)).toBe("6 days ago"); // 6 days 23 hours
  });
  test("returns '1 week ago' when time is < 2 weeks", () => {
    expect(formatTimeString(604800000)).toBe("1 week ago"); // 1 week
    expect(formatTimeString(1123000000)).toBe("1 week ago"); // 1 week and 6 days
  });
  test("returns 'n weeks ago' when time is < 1 month", () => {
    expect(formatTimeString(1728000000)).toBe("2 weeks ago"); // 2 weeks and 6 days
  });
  test("returns '1 month ago' when time is < 2 months", () => {
    expect(formatTimeString(2628000000)).toBe("1 month ago"); // 1 month (30.41 days)
    expect(formatTimeString(5134000000)).toBe("1 month ago"); // 1 month and 29 days
  });
  test("returns 'n months ago' when time is < 1 year", () => {
    expect(formatTimeString(30840000000)).toBe("11 months ago"); // 11 months and 3 weeks
  });
  test("returns '1 year ago' when time is < 2 years", () => {
    expect(formatTimeString(31536000000)).toBe("1 year ago"); // 1 year (365 days)
    expect(formatTimeString(60450000000)).toBe("1 year ago"); // 1 year and 11 months
  });
  test("returns 'n years ago' when time is >= 2 years", () => {
    expect(formatTimeString(63072000000)).toBe("2 years ago"); // 2 years
    expect(formatTimeString(186610000000)).toBe("5 years ago"); // 5 years and 11 months
  });
});
