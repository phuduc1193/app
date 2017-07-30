module.exports = {  
  port: process.env.PORT || 3030,
  db: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    database: process.env.DATABASE_NAME || 'resource',
    user: process.env.DATABASE_USER || 'user',
    password: process.env.DATABASE_PASSWORD || 'qwerty12345',
    port: process.env.DATABASE_PORT || 3306
  }
};