const globby = require('globby');
const path = require('path');
const fs = require('fs');

(async () => {
  const paths = await globby('*.vue',{
    cwd:__dirname
  });
  const result = {}

  paths.forEach(item => {
    const basename = path.basename(item,'.vue')
    let upName = 'Dm-'+basename
    upName = upName.replace(/-(\w+)/g,function (str, mtch) {
      return mtch[0].toUpperCase() + mtch.slice(1)
    })
    result[upName] = upName
  })
    fs.writeFile(path.resolve(__dirname,'.ee.md'),JSON.stringify(result,null,2),function () {

    })
})();
