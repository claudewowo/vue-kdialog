module.exports = {
    plugins: [
        require('postcss-mixins'),
        require('postcss-color-function'),
        require('postcss-extend'),
        require('postcss-nested'),
        require('postcss-cssnext')({
            warnForDuplicates: false,
        }),
        require('postcss-units')({
            size: 75,
            fallback: false,
            precision: 4,
        }),
        require('postcss-short'),
        require('cssnano')({
            sourcemap: true,
            autoprefixer: {
                add: true,
                remove: true,
                browsers: ['last 20 versions'],
            },
            safe: true,
            discardComments: {
                removeAll: true,
            },
            discardUnused: false,
            zindex: false,
        }),
    ]
}
