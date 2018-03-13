// Karma configuration
// Generated on Thu Feb 15 2018 08:33:23 GMT-0500 (SA Pacific Standard Time)

module.exports = function(config) {
  config.set({    
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: './src/unit-tests.ts', watched: false }
    ],  
    exclude: [],
    preprocessors: { 
      './src/unit-tests.ts': ['webpack', 'sourcemap']
    }, 
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
