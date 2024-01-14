const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { clientRoutes } = require('./router/client.routes');
const userRoutes = require('./router/user.routes');
const loginRoutes = require('./router/login.routes');
const linkRouter = require('./router/link.routes');
const categoriesRouter = require('./router/categoriesLink.routes');
const namesCategoriesRouter = require('./router/nameCategories.routes');
require("dotenv").config();

const passwordDB = process.env.DBPASSWORD;
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', clientRoutes);
app.use('/', userRoutes);
app.use('/', loginRoutes);
app.use('/', linkRouter);
app.use('/', categoriesRouter);
app.use('/', namesCategoriesRouter);

mongoose
  .connect(`mongodb+srv://wlissesfernando285:${passwordDB}@cluster0.vokq4pn.mongodb.net/`)
  .then(() => {
    console.log('connection start success!');
    app.listen(port);
  })
  .catch((error) => console.log(error));


module.exports = app;
