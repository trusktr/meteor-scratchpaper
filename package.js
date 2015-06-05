Package.describe({
    name: 'trusktr:scratchpaper',
    version: '0.0.2',
    // Brief, one-line summary of the package.
    summary: 'A package for meteor that I can test random crap in.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/trusktr/meteor-scratchpaper',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
})

Npm.depends({
    'upper-case': "1.1.2",
})

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2')

    api.use([
        'rocket:module@0.1.1_1'
    ], 'client')

    api.addFiles('client.module.js', 'client')
    api.addFiles('/foo/bar.module.js', 'client')

    api.export('Lib', 'client')
})

Package.onTest(function(api) {
    api.use('tinytest')
    api.use('trusktr:scratchpaper')
    api.addFiles('lib-tests.js')
})
