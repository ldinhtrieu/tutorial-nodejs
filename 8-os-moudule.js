const os = require("os");

// info about current user

const user = os.userInfo();
// method returns the system uptime in seconds
console.log("user: ", user);
console.log(`the System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
};

console.log(currentOS);
