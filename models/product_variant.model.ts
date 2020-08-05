module.exports = (sequelize, Sequelize) => {
  const ProductVariant = sequelize.define('product_variant', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    product_id: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.STRING,
    },
    sku: {
      type: Sequelize.STRING,
    },
    position: {
      type: Sequelize.INTEGER,
    },
    inventory_policy: {
      type: Sequelize.STRING,
    },
    compare_at_price: {
      type: Sequelize.STRING,
    },
    fulfillment_service: {
      type: Sequelize.STRING,
    },
    inventory_management: {
      type: Sequelize.STRING,
    },
    option1: {
      type: Sequelize.STRING,
    },
    option2: {
      type: Sequelize.STRING,
    },
    option3: {
      type: Sequelize.STRING,
    },
    created_at: {
      type: Sequelize.STRING,
    },
    updated_at: {
      type: Sequelize.STRING,
    },
    taxable: {
      type: Sequelize.BOOLEAN,
    },
    barcode: {
      type: Sequelize.STRING,
    },
    grams: {
      type: Sequelize.INTEGER,
    },
    image_id: {
      type: Sequelize.STRING,
    },
    weight: {
      type: Sequelize.INTEGER,
    },
    weight_unit: {
      type: Sequelize.STRING,
    },
    inventory_item_id: {
      type: Sequelize.STRING,
    },
    inventory_quantity: {
      type: Sequelize.INTEGER,
    },
    old_inventory_quantity: {
      type: Sequelize.INTEGER,
    },
    requires_shipping: {
      type: Sequelize.BOOLEAN,
    },
    admin_graphql_api_id: {
      type: Sequelize.TEXT,
    },
  });

  return ProductVariant;
};
