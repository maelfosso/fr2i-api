const {
  MONGO_DB, 
  MONGO_HOST, MONGO_HOSTNAME, MONGO_PORT,
  MONGO_USERNAME, MONGO_PASSWORD,
} = process.env;


const config = {
  db: {
    hostname: MONGO_HOSTNAME || MONGO_HOST || '127.0.0.1',
    username: MONGO_USERNAME || '',
    password: MONGO_PASSWORD || '',
    port: MONGO_PORT || '27017',
    db: MONGO_DB || 'tracer_development',
    uri: `mongodb://${MONGO_HOSTNAME || '127.0.0.1'}:${MONGO_PORT || '27017'}/${MONGO_DB || 'tracer_development'}`,
  },
};

module.exports = config;
