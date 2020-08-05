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
  let returnProduct;

  try {
    const { data } = await axios.get(
      `https://${process.env.API_KEY}:${process.env.PASSWORD}@${process.env.STORE_LINK}/api/2020-07/products.json`
    );
    const response = data.products;
    const Product = db.product;
    const ProductVariant = db.product_variant;
    const ProductImage = db.product_image;
    const dbSeqInst = db.sequelize;

    await Product.bulkCreate(response, {
      updateOnDuplicate: ['id'],
    });

    response.forEach(async (element) => {
      await ProductVariant.bulkCreate(element.variants, {
        updateOnDuplicate: ['id'],
      });
      await ProductImage.bulkCreate(element.images, {
        updateOnDuplicate: ['id'],
      });
    });

    returnProduct = await dbSeqInst.query('select * from product_details_vw');
  } catch (e) {
    return res.status(500).send({ message: 'Something went wrong!' });
  }

  return res.status(200).send({ returnProduct: returnProduct[0] });
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'), {
    etag: false,
  });
});

const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log(`App is listening on port ${port}!`);
});
