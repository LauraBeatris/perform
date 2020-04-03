const { override, addBabelPlugins } = require('customize-cra');

module.exports = override(
    ...addBabelPlugins(
        [
            'babel-plugin-root-import',
            {
                rootPathSuffix: 'src',
            },
        ],
        [
            '@babel/plugin-transform-regenerator',
            {
                asyncGenerators: false,
                generators: false,
                async: false,
            },
        ]
    )
);
