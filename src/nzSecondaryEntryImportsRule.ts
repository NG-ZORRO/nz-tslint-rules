import * as Lint from 'tslint';
import * as tsutils from 'tsutils';
import * as ts from 'typescript';

export class Rule extends Lint.Rules.AbstractRule {

  public static metadata: Lint.IRuleMetadata = {
    ruleName: 'nz-secondary-entry-imports',
    type: 'functionality',
    description: 'Updates the import paths to secondary entry point',
    rationale: 'Optimize tree shake',
    options: null,
    optionsDescription: 'Not configurable.',
    typescriptOnly: true
  };

  apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithFunction(sourceFile, walk);
  }

}

function walk(ctx: Lint.WalkContext<void>) {
  const replaceMap = {};
  const replaceRecord = new Set<string>();
  for (const node of ctx.sourceFile.statements) {
    if (!tsutils.isImportDeclaration(node)) {
      continue;
    }
    if (!node.importClause) {
      continue;
    }
    if (!node.importClause.namedBindings) {
      continue;
    }
    if (!tsutils.isNamedImports(node.importClause.namedBindings)) {
      continue;
    }
    if (!tsutils.isLiteralExpression(node.moduleSpecifier)) {
      continue;
    }
    const moduleSpecifier = node.moduleSpecifier.text;
    if (moduleSpecifier !== ROOT_PATH) {
      continue;
    }

    node.importClause.namedBindings.elements.forEach((e: ts.ImportSpecifier | null) => {
      if (!tsutils.isImportSpecifier(e)) {
        return;
      }
      const importNode = e.propertyName || e.name;
      const importNodeName = importNode && importNode.getText();
      const replacePath = ImportMaps[importNodeName];

      if (replacePath && !replaceRecord.has(importNodeName)) {
        replaceRecord.add(importNodeName);
        let replacement = `${importNodeName}`;
        if (e.propertyName) {
          replacement = `${importNodeName} as ${e.name.getText()}`
        }
        if (!replaceMap.hasOwnProperty(replacePath)) {
          replaceMap[replacePath] = replacement;
        } else {
          replaceMap[replacePath] = replaceMap[replacePath] + `, ${replacement}`
        }

      }
    })

  }

  console.log(replaceMap);

  // TODO

}

const ROOT_PATH = 'ng-zorro-antd';


const ImportMaps = {
  'NzButtonModule': 'ng-zorro-antd/button',
  'NzButtonComponent': 'ng-zorro-antd/button'
};
