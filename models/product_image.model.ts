module.exports = (sequelize, Sequelize) => {
  const ProductImage = sequelize.define('product_image', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    product_id: {
      type: Sequelize.STRING,
    },
    position: {
      type: Sequelize.INTEGER,
    },
    created_at: {
      type: Sequelize.STRING,
    },
    updated_at: {
      type: Sequelize.STRING,
    },
    alt: {
      type: Sequelize.STRING,
    },
    width: {
      type: Sequelize.INTEGER,
    },
    height: {
      type: Sequelize.INTEGER,
    },
    src: {
      type: Sequelize.STRING,
    },
    variant_ids: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    admin_graphql_api_id: {
      type: Sequelize.TEXT,
    },
  });

  return ProductImage;
};
