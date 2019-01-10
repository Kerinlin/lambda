const content = require('./index.ejs');
const layout = require('../../layout/empty/empty.js');
const pageConfig = {
    pageTitle: 'Lambda blockchain  -  A Disruptor in Blockchain-Based Storage Solution',
    description: 'Lambda blockchain  is a fast, safe, and scalable blockchain infrastructure project',
    keywords: 'Lambda,Blockchain,Storage,Dapps,IPFS,filecoin,aws',
};

module.exports = layout.init(pageConfig).run(content(pageConfig));