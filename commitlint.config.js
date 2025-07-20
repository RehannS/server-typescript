const rules={
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', // Features
                'fix', // Bug fixes
                'docs', // Documentation changes
                'style', // Style changes (formatting, missing semicolons, etc.)
                'refactor', // Code refactoring
                'perf', // Performance improvements
                'test', // Adding or updating tests
                'chore', // Maintenance tasks
                'revert' // Reverting changes
            ]
        ],
        'subject-case':[2,'always','sentence-case'], // Subject should be in sentence case
    }
}

export default rules