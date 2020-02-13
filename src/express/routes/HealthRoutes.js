const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send({
    health: 'ok'
  })
  res.end(200)
})

module.exports = router
