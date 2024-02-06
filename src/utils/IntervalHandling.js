function setIntervalInSec(callback, interval) {
  return setInterval(callback, interval * 1000);
}

function setIntervalInMin(callback, interval) {
  return setInterval(callback, interval * 60 * 1000);
}

function setIntervalInHour(callback, interval) {
  return setInterval(callback, interval * 60 * 60 * 1000);
}

function setIntervalInDay(callback, interval) {
  return setInterval(callback, interval * 24 * 60 * 60 * 1000);
}

export {
  setIntervalInSec,
  setIntervalInMin,
  setIntervalInHour,
  setIntervalInDay,
};
