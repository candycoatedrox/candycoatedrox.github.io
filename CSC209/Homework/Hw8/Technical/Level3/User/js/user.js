function getMillisecondsSince(startTime) {
    const endTime = Date.now();
    return endTime - startTime;
}

function getMinutesSince(startTime) {
    return Number.parseInt(getMillisecondsSince(startTime) / 60000);
}