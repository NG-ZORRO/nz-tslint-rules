import * as Lint from 'tslint';
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
        return [];
    }

}

class UpdateSecondaryEntryImportsWalker extends Lint.RuleWalker {

}
