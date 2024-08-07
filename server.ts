import express from "express";
import { NewComponent } from "./userData";
import { contacts } from "./utils/data";

const app = express();
const Port = 3000;

// Set static folder
app.use(express.static("public"));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

//get-route for user-data
app.get("/get/user-data", function (req, res) {
  res.set("user-data", "text/html");
  res.send(
    NewComponent({
      children: "<h1>hamro tempasdadslating</h1>",
      age: "aage 12",
      name: "Ronish",
      height: "6ft",
    })
  );
});

//GetRoute for userData
app.get("/users", (req, res) => {
  setInterval(() => {
    const users = [
      { id: 1, name: "Ronish Paudel" },
      { id: 2, name: "Ram Bahadur Thapa" },
      { id: 3, name: "Percy Jackson" },
    ];
    return res.send(`<h1 class="text-2xl font-bold ">Users</h1>
  <ul>${users.map((user) => `<li>Name : ${user.name}</li>`).join(" ")}</ul>`);
  }, 1000);
});

app.post("/search", (req, res) => {
  const searchTerm = req.body.search.toLowerCase();
  if (!searchTerm) {
    return res.send(`<tr></tr>`);
  }
  const searchResults = contacts.filter((contact) => {
    const name = contact.name.toLowerCase();
    const email = contact.email.toLowerCase();

    return name.includes(searchTerm) || email.includes(searchTerm);
  });
  setTimeout(() => {
    const searchResultHtml = searchResults
      .map(
        (contact) => `
      <tr class="text-center">
        <td><div class="my-4 p-2">${contact.name}</div></td>
        <td><div class="my-4 p-2">${contact.email}</div></td>
      </tr>
    `
      )
      .join("");
    res.send(searchResultHtml);
  }, 1000);
});

app.listen(Port, () => {
  console.log(`Server up on port ${Port}`);
});
