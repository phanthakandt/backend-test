const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middleware/auth.middleware')

router.get('/', (req, res) => {
    res.sendStatus(200)
})

router.post('/create', authMiddleware.authenticate, userController.create)
router.put('/update', authMiddleware.authenticate, userController.update)
router.delete('/delete', authMiddleware.authenticate, userController.delete)

module.exports = router
