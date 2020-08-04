module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define('product', {
    product_id: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    body_html: {
      type: Sequelize.TEXT,
    },
    vendor: {
      type: Sequelize.STRING,
    },
    created_at: {
      type: Sequelize.STRING,
    },
    handle: {
      type: Sequelize.STRING,
    },
    template_suffix: {
      type: Sequelize.STRING,
    },
    published_scope: {
      type: Sequelize.STRING,
    },
    tags: {
      type: Sequelize.STRING,
    },
    admin_graphql_api_id: {
      type: Sequelize.TEXT,
    },
  });

  return Product;
};
