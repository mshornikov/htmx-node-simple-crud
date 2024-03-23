const express = require('express');

const router = express.Router();

// GET /contacts
router.get('/contacts', async (req, res) => {
  res.send('It works!');
});

module.exports = router;
