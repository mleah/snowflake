const isProduction = process.env.SNOWFLAKE_BUILD

module.exports = {
  assetPrefix: isProduction ? '/snowflake' : '',
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  }
}
