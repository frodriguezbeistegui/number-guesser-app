export function generateRandomBetween({ min, max, exclude }) {
    console.log('min: ', min, 'max: ', max, 'exclude: ', exclude)
    const randomNumber = Math.floor((Math.random() * (max - min)) + min);
    if(randomNumber === exclude) {
        return generateRandomBetween({ min, max, exclude })
    } else {
        return randomNumber
    }
}