var plugins = [{
      plugin: require('/Users/George/coding-projects/Gatsby-Site/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/George/coding-projects/Gatsby-Site/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"cm8qyy5n","dataset":"production","watchMode":true,"token":"skUzBJQ8zdnRHjxR8t3L6vmS9aclJ2pdYlkegxgZywih2HUCYkJdsR1CDWw1uMNuuf9kUHSuOH7AYFChCu0bJ5ikVKv2X0vMn3mHjcgZka9dRrHVxNZm4Ndy372BLjs9y55rR33kMc0jI49tCrS45gRCls3JVfh7xAuBwj2LbA2mLEycSkom"},
    },{
      plugin: require('/Users/George/coding-projects/Gatsby-Site/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
