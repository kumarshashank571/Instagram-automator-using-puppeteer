  //=== a sample code in puppeteer library
  
  const puppeteer = require('puppeteer');    //calling the puppeteer library
  const data = require("./config.json");
  let numofPost = process.argv[2];
(async function () {
  const browser = await puppeteer.launch({headless : false});         //=== naya browser launch karwaya hai
  const page = await browser.newPage();             //===  ek new page/tab open karwaya
  await page.goto('https://www.instagram.com/',{waitUntil:"networkidle2"});          //=== is goto command ka kaam hota hai ki ye is specific url pe jaane ko kehta hai
 // await page.screenshot({path: 'example.png'});     // == screenshot command se ye uss page ka screenshot le lega
  await page.type("input[name='username']",data.user,{delay:150});
  await page.type("input[name='password']",data.pwd,{delay:150});

  await Promise.all([
               page.waitForNavigation({waitUntil : "networkidle2"}),
               page.click("button[type='submit']"),
  ]);

   await page.type("input[placeholder='Search']","pepper_pepcoding",{delay:150});
   await page.waitForSelector(".drKGC .fuqBx a", {visible : true});
   await Promise.all([
    page.waitForNavigation({waitUntil : "networkidle2"}),
    page.click(".drKGC .fuqBx a"),
]);

await page.waitForSelector("._9AhH0", { visible: true });

await Promise.all([
    page.waitForNavigation({ waitUntil: "networkidle2" }),
    page.click("._9AhH0"),
]);

let i = 0;
do {
    await page.waitForSelector(".fr66n button");
    await page.click(".fr66n button");
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("._65Bje.coreSpriteRightPaginationArrow"),
    ]);
    i++;
} while (i < numofPost) { }

})();