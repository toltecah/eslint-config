const rulesDirectory = './rules'
const rulesSets = [
  'base',
  'imports',
  'practices',
  'es6',
  'errors',
  'style'
].filter(Boolean)

module.exports = {
  extends: rulesSets.map(rulesSet =>
    require.resolve(`${rulesDirectory}/${rulesSet}`)
  ),
  rules: {}
}
