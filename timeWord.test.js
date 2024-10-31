const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

function runTests() {
  console.assert(timeToWords("00:00") === "midnight", 'Test Case 1 Failed');
  console.assert(timeToWords("00:12") === "twelve twelve am", 'Test Case 2 Failed');
  console.assert(timeToWords("01:00") === "one o’clock am", 'Test Case 3 Failed');
  console.assert(timeToWords("06:01") === "six oh one am", 'Test Case 4 Failed');
  console.assert(timeToWords("06:10") === "six ten am", 'Test Case 5 Failed');
  console.assert(timeToWords("06:18") === "six eighteen am", 'Test Case 6 Failed');
  console.assert(timeToWords("06:30") === "six thirty am", 'Test Case 7 Failed');
  console.assert(timeToWords("10:34") === "ten thirty four am", 'Test Case 8 Failed');
  console.assert(timeToWords("12:00") === "noon", 'Test Case 9 Failed');
  console.assert(timeToWords("12:09") === "twelve oh nine pm", 'Test Case 10 Failed');
  console.assert(timeToWords("23:23") === "eleven twenty three pm", 'Test Case 11 Failed');
  console.log("All test cases passed!");
}

runTests();
