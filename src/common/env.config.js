const Config = {
  apiEndpoint: 'http://localhost:3600',
  jwt_secret: 'myS33!!creeeT',
  environment: 'dev',
  permissionLevels: {
    NORMAL_USER: 1,
    PAID_USER: 4,
    ADMIN: 2048
  }
};

export default Config;
