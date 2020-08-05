import { Sequelize } from 'sequelize';
const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 2,
      acquire: 30000,
      idle: 20000,
    },
  }
);

const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = require('./product.model')(sequelize, Sequelize);
db.product_variant = require('./product_variant.model')(sequelize, Sequelize);
db.product_image = require('./product_image.model')(sequelize, Sequelize);

export default db;
