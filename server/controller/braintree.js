var braintree = require("braintree");
require("dotenv").config();
const productModel = require("../models/products");


let gateway = null;

// Only initialize braintree if keys are present
if (process.env.BRAINTREE_MERCHANT_ID && process.env.BRAINTREE_PUBLIC_KEY && process.env.BRAINTREE_PRIVATE_KEY) {
    gateway = new braintree.BraintreeGateway({
        environment: braintree.Environment.Sandbox,
        merchantId: process.env.BRAINTREE_MERCHANT_ID,
        publicKey: process.env.BRAINTREE_PUBLIC_KEY,
        privateKey: process.env.BRAINTREE_PRIVATE_KEY,
    });
} else {
    console.log("WARNING: Braintree keys not found in .env. Payment functionality will be disabled.");
}

class brainTree {
  ganerateToken(req, res) {
    if (!gateway) {
        return res.status(500).json({ error: "Braintree configuration missing on server" });
    }
    gateway.clientToken.generate({}, (err, response) => {
      if (err) {
        return res.json(err);
      }
      return res.json(response);
    });
  }

  async paymentProcess(req, res) {
    if (!gateway) {
      return res.status(500).json({ error: "Braintree configuration missing on server" });
    }
    let { amountTotal, paymentMethod, products } = req.body;

    let newAmount = 0;
    if (products && products.length > 0) {
        for (const p of products) {
            let dbProduct = await productModel.findById(p.id);
            if(dbProduct) {
                newAmount += dbProduct.pPrice * p.quantitiy;
            }
        }
    } else {
        // Fallback for safety, though frontend should always send products
         newAmount = amountTotal
    }

    gateway.transaction.sale(
      {
        amount: newAmount,
        paymentMethodNonce: paymentMethod,
        options: {
          submitForSettlement: true,
        },
      },
      (err, result) => {
        if (err) {
          console.error(err);
          return res.json(err);
        }

        if (result.success) {
          console.log("Transaction ID: " + result.transaction.id);
          return res.json(result);
        } else {
          console.error(result.message);
        }
      }
    );
  }
}

const brainTreeController = new brainTree();
module.exports = brainTreeController;
