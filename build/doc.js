const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const swig = require('swig')

const viewPath = path.join(__dirname, '../examples/views')
const tplPath = path.join(__dirname, '../examples/template')
const folder = process.argv[2]

const mkdir = data => {
    const dist = path.join(viewPath, folder)
    fs.mkdirSync(dist)
    return Object.assign({}, data, {
        name: folder !== data.name ? `${folder} ${data.name}` : folder,
        dist
    })
}

const writeFile = (fileName, content, cb) => fs.writeFile(fileName, content, 'utf8', cb)

const render = (file, data, cb) => swig.renderFile(path.join(tplPath, file), data, cb)

const rename = file => file === 'doc.md' ? `${folder}.md` : file

const generate = data => {
    Promise.all(
        ['doc.md', 'index.vue'].map(file => render(file, data, (err, content) => {
            if(err) return Promise.reject(err)
            writeFile(path.join(data.dist, rename(file)), content, err => (
                err ? Promise.reject(err) : Promise.resolve()
            ))
        }))
    ).then(() => {
        if(data.hasExample) {
            fs.copyFile(
                path.join(tplPath, 'base.vue'),
                path.join(data.dist, 'base.vue'),
                err => {
                    if (err) throw err
                    console.log('\nSuccess！\n')
                }
            )
            return
        }
        console.log('\nSuccess！\n')
    })
}

inquirer.prompt([{
    name: 'name',
    message: 'Component name: ',
}, {
    name: 'desc',
    message: 'Component description: '
}, {
    type: 'confirm',
    name: 'hasExample',
    message: 'Do you need an example? '
}])
.then(mkdir)
.then(generate)
.catch(e => {
    console.log(e)
})

