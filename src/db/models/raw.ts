// sequelize init
import { Sequelize } from "sequelize";
const config = require("../../config/database");

const sequelize = new Sequelize(config.development);

export default sequelize;
