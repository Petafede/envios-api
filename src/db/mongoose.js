const { MongoClient } = require('mongodb');

// Replace the uri string with your connection string.
const uri = 'mongodb+srv://fedebarriodev:MIVW7hFBVCAJdS5C@cluster0.nuz7cfc.mongodb.net/?retryWrites=true&w=majority';

export const client = new MongoClient(uri);
