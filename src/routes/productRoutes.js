const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/auth');

// All product routes require authentication
router.use(authMiddleware);

// ========================
// CORE PRODUCT CRUD APIs
// ========================

// 1. Get all products
router.get('/', productController.getAllProducts);

// 2. Get single product by ID
router.get('/:id', productController.getProductById);

// 3. Get product by product code
router.get('/code/:code', productController.getProductByCode);

// 4. Create new product WITH AUTO CODE & BARCODE
router.post('/', productController.createProduct);

// 5. Update product
router.put('/:id', productController.updateProduct);

// 6. Delete product
router.delete('/:id', productController.deleteProduct);

// ========================
// SEARCH & FILTER APIs
// ========================

// 7. Search products
router.get('/search/:query', productController.searchProducts);

// 8. Get products by category
router.get('/category/:category', productController.getProductsByCategory);

// 9. Get low stock products
router.get('/low-stock/alerts', productController.getLowStockProducts);

// ========================
// BARCODE SPECIFIC APIs
// ========================

// 10. Generate barcode for existing product
router.post('/:productId/generate-barcode', productController.generateBarcodeForProduct);

// 11. Bulk generate barcodes
router.post('/bulk/generate-barcodes', productController.bulkGenerateBarcodes);

// 12. Get product with barcode info
router.get('/with-barcode/:id', productController.getProductWithBarcode);

// ========================
// BULK OPERATION APIs
// ========================

// 13. Bulk create products
router.post('/bulk/create', productController.bulkCreateProducts);

module.exports = router;