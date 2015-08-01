import uppercase from 'upper-case'
import local from './local'

console.log(' --- ', uppercase('Uppercase on the client only, in rocket:module-example-package.'))
console.log(' --- ', local)

// Package exports don't work for now. This will be fixed in v1.0.0.
//ExampleExport = {
    //hello: function() {
        //return 'Hello.'
    //}
//}

