function timeToWords(time) {
    const [hourStr, minuteStr] = time.split(':');
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);
  
    const numbers = [
      'twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
      'twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'
    ];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty'];
  
    if (hour === 0 && minute === 0) return 'midnight';
    if (hour === 12 && minute === 0) return 'noon';
  
    const period = hour < 12 ? 'am' : 'pm';
  
    const hourWord = numbers[hour % 12];
    let minuteWord;
  
    if (minute === 0) {
      minuteWord = "o’clock";
    } else if (minute < 10) {
      minuteWord = `oh ${numbers[minute]}`;
    } else if (minute < 20) {
      minuteWord = numbers[minute];
    } else {
      minuteWord = tens[Math.floor(minute / 10)];
      if (minute % 10 !== 0) {
        minuteWord += ` ${numbers[minute % 10]}`;
      }
    }
  
    return minute === 0 ? `${hourWord} ${minuteWord} ${period}` : `${hourWord} ${minuteWord} ${period}`;
  }
  