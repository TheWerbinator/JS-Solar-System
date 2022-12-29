import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const hashmap = data.asteroids
    .map((val) => val.discoveryYear)
    .reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  return parseInt(
    Object.keys(hashmap).reduce((a, b) => (hashmap[a] > hashmap[b] ? a : b))
  );
} //shamelessly stole this from the internet, please tell me there is an easier way haha

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
