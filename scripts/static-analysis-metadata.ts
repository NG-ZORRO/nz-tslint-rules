import * as path from 'path';
import { sync as glob } from 'glob';
import * as fs from 'fs-extra';

function analysis(libPath = 'node_modules/ng-zorro-antd', dist = 'data') {

  const importMap = {};
  const rootPath = path.resolve(process.cwd(), libPath);
  const outPath = path.resolve(process.cwd(), dist);
  const metadataPaths = glob(path.join(rootPath, '**/*.metadata.json'));
  const packJSON = fs.readJSONSync(path.join(rootPath, 'package.json'));
  metadataPaths.forEach(p => {
    const metaJSON = fs.readJSONSync(p);
    if (metaJSON
      && typeof metaJSON.importAs === 'string'
      && typeof metaJSON.metadata === 'object'
      && (metaJSON.importAs as string).startsWith('ng-zorro-antd')
    ) {
      const importPath = (metaJSON.importAs as string);
      Object.keys(metaJSON.metadata)
        .filter(k => !k.startsWith('θ') && !k.startsWith('ɵ'))
        .forEach(k => {
          importMap[k] = importPath;
        });
    }
  });

  fs.writeJSON(path.join(outPath, `${packJSON.version}-metadata.json`), importMap, { spaces: 2 });
}

analysis();
