import fs from 'fs';
import jade from 'jade';

export default class HtmlTransformer {
  constructor(files, outputDir, templateDir) {
    this.outputDir = outputDir;
    this.templateDir = templateDir;

    this.buildIndex(files);

    for(let file of files){
      for(let classObject of file.classes){
        this.buildClass(classObject);
      }
    }
  }

  buildIndex(files) {
    let template = jade.compileFile(this.templateDir + '/index.jade');

    fs.writeFileSync(this.outputDir + '/index.html', template({files}));
  }

  buildClass(classObject) {
    let template = jade.compileFile(this.templateDir + '/class.jade');

    fs.writeFileSync(this.outputDir + '/' + classObject.name.toLowerCase() + '.html', template({data: classObject}));
  }
}
