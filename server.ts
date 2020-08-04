import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config();
import db from './models/index';
import axios from 'axios';
db.sequelize.sync();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api/products/fetch', async function (req, res) {
  let response;
  try {
    const { data } = await axios.get(
      `https://${process.env.API_KEY}:${process.env.PASSWORD}@${process.env.STORE_LINK}/api/2020-07/products.json`
    );
    response = data.products;
    const Product = db.product;
    const ProductVariant = db.product_variant;
    const ProductImage = db.product_image;
    response.forEach(async (element) => {
      await Product.create({
        product_id: element.id,
        title: element.title,
        body_html: element.body_html,
        vendor: element.vendor,
        created_at: element.created_at,
        handle: element.handle,
        template_suffix: element.template_suffix,
        published_scope: element.published_scope,
        tags: element.tags,
        admin_graphql_api_id: element.admin_graphql_api_id,
      });
      element.variants.forEach(async (variant) => {
        await ProductVariant.create({
          variant_id: variant.id,
          product_id: variant.product_id,
          title: variant.title,
          price: variant.price,
          sku: variant.sku,
          position: variant.position,
          inventory_policy: variant.inventory_policy,
          compare_at_price: variant.compare_at_price,
          fulfillment_service: variant.fulfillment_service,
          inventory_management: variant.inventory_management,
          option1: variant.option1,
          option2: variant.option1,
          option3: variant.option1,
          created_at: variant.created_at,
          updated_at: variant.updated_at,
          taxable: variant.taxable,
          barcode: variant.barcode,
          grams: variant.grams,
          image_id: variant.image_id,
          weight: variant.weight,
          weight_unit: variant.weight_unit,
          inventory_item_id: variant.inventory_item_id,
          inventory_quantity: variant.inventory_quantity,
          old_inventory_quantity: variant.old_inventory_quantity,
          requires_shipping: variant.requires_shipping,
          admin_graphql_api_id: variant.admin_graphql_api_id,
        });
        element.images.forEach(async (image) => {
          await ProductImage.create({
            image_id: image.id,
            product_id: image.product_id,
            position: image.position,
            created_at: image.created_at,
            updated_at: image.updated_at,
            alt: image.alt,
            width: image.width,
            height: image.height,
            src: image.src,
            variant_ids: image.variant_ids,
            admin_graphql_api_id: image.admin_graphql_api_id,
          });
        });
      });
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: 'Invalid search.' });
  }
  return res.status(200).send({ response });
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'), {
    etag: false,
  });
});
const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`App is lstening on port ${port}!`);
});
