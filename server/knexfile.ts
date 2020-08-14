import path from 'path';
require('ts-node/register');

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    extension: 'ts',
  },
  useNullAsDefault: true,
};
