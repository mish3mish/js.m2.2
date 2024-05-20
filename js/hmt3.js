function checkForSpam(message) {
    const normalizedMessage = message.toLowerCase();
    const hasSpam1 = normalizedMessage.includes("spam");
    const hasSpam2 = normalizedMessage.includes("sale");
    // if (hasSpam1 || hasSpam2) {
    //     return true;
    // } else {
    //     return false;
    // }
    return hasSpam1 || hasSpam2;
}





console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
