const blacklistedWord1 = 'spam';
const blacklistedWord2 = 'sale';

const string1 = "Hello, I am Prince Abdul, this is not spam.";
const string2 = "Biggest SALE of the weekend.";
const string3 = "Vardy's on fire";

function checkSpam (string, blacklistedWord1, blacklistedWord2) {
    const normalizedString = string.toLowerCase();
    const hasSpam1 = normalizedString.includes(blacklistedWord1);
    const hasSpam2 = normalizedString.includes(blacklistedWord2);

    if (hasSpam1 || hasSpam2) {
        return 'Spaaaaaaam';
    } else {
        return 'There is no spam';
    }
 
}

const res1 = checkSpam(string2, blacklistedWord1, blacklistedWord2);
console.log("🚀 ~ res1:", res1)


