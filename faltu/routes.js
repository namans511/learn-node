const fs = require("fs");

const requestHandler = (req, res) => {
  // console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>this is cool</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>enter some text and stuff</h1>");
    res.write(
      '<form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form>'
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("hello.txt", message);
    });
    // fs.writeFileSync("hello.txt", "DUMMY");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head>");
  res.write("<title>this is cool</title>");
  res.write("</head>");
  res.write("<body><h1>idk but this is coool</h1>");
  res.write("<p>although idk when ill become good at it</p></body>");
  res.write("</html>");
  res.end();
  // process.exit();
};

module.exports = requestHandler;
