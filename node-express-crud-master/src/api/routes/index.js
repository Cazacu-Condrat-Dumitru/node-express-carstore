const Router = require('express')
const router = new Router()

const modules = ['car_type', 'car', 'brands']

modules.forEach(module => {
    router.use(`/${module}`, require(`./${module}`))
})

module.exports = router