const express = require("express");
// import UserRoutes from './user.route'
// import CategoriesRoute from './categories.route'
const ProductRoute = require("./product.route");
const CategoriesRoute = require("./categories.route");
const orderRoutes = require("./orders.route");
const UserRoute = require("./user.route");
const apiRoute = express.Router();
/**
 *  chia nhỏ route con ra
 *
 */

//  apiRoute.use('/users', UserRoutes)
apiRoute.use("/categories", CategoriesRoute);
apiRoute.use("/products", ProductRoute);
apiRoute.use("/users", UserRoute);

//  apiRoute.use('/products', userRoutes)
//  apiRoute.use('/orders', orderRoutes)

module.exports = apiRoute;
