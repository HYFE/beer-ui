module.exports = ctx => ({
    map: ctx.env !== 'development',
    plugins: {
        autoprefixer: {
            browsers: ['last 2 versions']
        }
    }
})
