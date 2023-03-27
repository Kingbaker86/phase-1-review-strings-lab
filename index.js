let currentUser = "John";

let welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";
console.assert(welcomeMessage.includes("Welcome to Flatbook") && welcomeMessage.includes(currentUser) && welcomeMessage.endsWith("!"));

let excitedWelcomeMessage = "WELCOME TO FLATBOOK, " + currentUser.toUpperCase() + "!";
console.assert(excitedWelcomeMessage.includes("WELCOME TO FLATBOOK") && excitedWelcomeMessage.includes(currentUser) && excitedWelcomeMessage.endsWith("!"));

let shortGreeting = "Welcome, " + currentUser.charAt(0) + "!";
console.assert(shortGreeting.includes("Welcome") && shortGreeting.includes(currentUser.charAt(0)) && shortGreeting.endsWith("!"));
 

