Package.describe({
    name: 'trusktr:scratchpaper',
    version: '0.0.3',
    // Brief, one-line summary of the package.
    summary: 'A package that I can do experiments in.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/trusktr/meteor-scratchpaper',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
})

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2')

    api.use([
        'rocket:module@0.5.0'
    ])

    // npm dependencies:
    api.addFiles('npm.json')

    api.addFiles([
        'client.entry.js',
        'local.js'
    ], 'client')

    api.addFiles('foo/bar.entry.js', 'server')

    api.export('Lib', 'client')
})

Package.onTest(function(api) {
    api.use('tinytest')
    api.use('trusktr:scratchpaper')
    api.addFiles('lib-tests.js')
})
