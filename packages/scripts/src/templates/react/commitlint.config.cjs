module.exports = {
  rules: {
    'commit-message-rule': [2, 'always'],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(DBT-\d+):\s+(.+?)\s-\s(.+)$/,
      headerCorrespondence: ['issue', 'title', 'additionalMessage'],
    },
  },
  plugins: [
    {
      rules: {
        'commit-message-rule': ({ header }) => {
          return [
            /^(DBT-\d+):\s+(.+?)\s-\s(.+)$/.test(header),
            'Commit message must follow the format: {issue number}: {issue title} - {additional message}',
          ];
        },
      },
    },
  ],
};

// keep these configs for future
// module.exports = {
//   extends: ['@commitlint/config-conventional'],
//   rules: {
//     'subject-case': [2, 'never', ['start-case', 'pascal-case']],
//     'scope-case': [2, 'always', ['camel-case', 'pascal-case', 'kebab-case']],
//   },
// };