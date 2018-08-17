const cassandra = require('cassandra-driver');
const client = new cassandra.Client({contactPoints:['127.0.0.1'], keyspace: 'soundofcloud'});

const query0 = 'INSERT INTO users (username, password) values (?,?)';

client.execute('select key from system.local', function (err, result) {
  if (err) throw err
  console.log(result.rows[0])
})

client.on('log', function(level, className, message, furtherInfo) {
  console.log('log event: %s -- %s', level, message);
});

client.connect((err, result) => {
  if (err) {
    console.log('Error connecting to Cassandra :(', err);
  } else {
    console.log('Cassandra is connected');
  }
})

module.exports = {
  client
}