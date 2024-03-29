const {check, validationResult} = require('express-validator')
const {Router} = require('express')
const User     = require('../models/User')
const bcrypt   = require('bcryptjs')
const router   = Router()

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Некорректный  email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов')
            .isLength({ min: 6})
    ],
    async (reg, res) => {
    try {
        const errors = validationResult(req)

        const {email, password} = req.body

        const candidate = await User.findOne({ email })

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'некорректные данные при регистрации'
            })
        }


        if (candidate) {
            return res.status(400).json({ message: 'Такой пользователь уже существует' })
        }

        const hashedPassword = await bcrypt.hash(pass, 12)
        const user =new User({ email, password: hashedPassword })

        await user.save()

        res.status(201).json({ message: 'Пользователь создан'})

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
    }
})

// /api/auth/login
router.post('/login', async (reg, res) => {

})

module.exports = router
