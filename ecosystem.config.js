module.exports = {
    apps: [{
        name: 'portfolio',
        port: 3000,
        script: './node_modules/nuxt/bin/nuxt.js',
        args: "start",
        cwd: '/home/pi/Desktop/portfolio',
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }]
};