export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  db_uri: process.env.DB_URI,
  port: process.env.PORT || 3000,
  default_limit: +process.env.DEFAULT_LIMIT || 7,
});
