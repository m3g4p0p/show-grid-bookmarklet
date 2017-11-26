const { getOptions } = require('loader-utils')

module.exports = function (source) {
  const { filename } = getOptions(this)
  const bookmarklet = `javascript:(function(){${encodeURIComponent(source)}})();`

  this.emitFile(filename, bookmarklet)

  return source
}
