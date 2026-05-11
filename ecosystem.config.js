module.exports = {
  apps: [
    {
      name: 'jrcompliance',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/html/website/jrcompliance',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3019
      }
    }
  ]
};
