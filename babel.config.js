const presets = [
    [
      "@babel/preset-env",
      {
        targets: "cover 99%",
        useBuiltIns: "usage",
        corejs: "3.6.4",
      },
    ],
  ];
  
  module.exports = { presets };