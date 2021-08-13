function tplReplace(template, replaceObject) {
    return template.replace(/\{\{(.*?)\}\}/g, (node, key) => replaceObject[key])
}

module.exports = {
    tplReplace
}
