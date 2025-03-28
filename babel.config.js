// Earlier
// module.exports = {
//     presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
//   };

// After adding @babel/preset-react
module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      ['@babel/preset-react', {runtime: "automatic"}],
  ],
};