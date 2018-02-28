const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

// app.use( async ( ctx ) => {
//     ctx.res.write("hello world")
// })

function render( page ) {
    return new Promise(( resolve, reject ) => {
        let viewUrl = `./view/${page}`
        fs.readFile(viewUrl, "binary", ( err, data ) => {
            if ( err ) {
                reject( err )
            } else {
                resolve( data )
            }
        })
    })
}

async function route( url ) {
    let view = '404.html'
    switch ( url ) {
        case '/':
            view = 'index.html'
            break
        case '/index':
            view = 'index.html'
            break
        default:
            break
    }
    return await render( view )
}

app.use( async ( ctx ) => {
    let url = ctx.request.url
    let html = await route( url )
    ctx.body = html
})

app.listen(8080)