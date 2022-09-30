export const useDateFormater = (dateObj) => {
  const date = dateObj.toLocaleDateString("en-us", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  })
  const time_ = dateObj.toLocaleTimeString("en-us", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })

  return { date, time_ }
}
