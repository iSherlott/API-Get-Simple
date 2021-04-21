const express = require("express");
const app = express();

const zip_code = require("./routers/zip_code");
const neighborhood = require("./routers/neighborhood");
const city = require("./routers/city");
const locality = require("./routers/locality");

app.use("/zipcode", zip_code);
app.use("/neighborhood", neighborhood);
app.use("/city", city);
app.use("/locality", locality);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server Running in ${PORT}`));
