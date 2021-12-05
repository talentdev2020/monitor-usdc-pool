export function fixedCurrency(value, precision) {
    return typeof (value) === 'string' ? parseFloat(value).toFixed(precision) : value.toFixed(precision)
}

export function diffTime(value) {
    const time = parseInt(value);
    const now = new Date().getTime() / 1000;
    const minute = 60;
    
    const daysPassed = Math.floor((now - time) / (minute * 60 * 24));
    const hoursPassed = Math.floor(((now- time) % (minute * 60 * 24)) / (minute * 60));
    const minutesPassed = Math.ceil(((now- time) % (minute * 60)) / minute);

    let strTime = "";
    if (daysPassed) {
        strTime += daysPassed + "days ";
    }
    if (hoursPassed) {
        strTime += hoursPassed + "hours ";
    }
    if (minutesPassed) {
        strTime += minutesPassed + "minutes ";
    }
    return strTime + "ago"
}