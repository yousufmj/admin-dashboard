var config = {
    production: {
          api_url: '127.0.0.1:3000'
    },
    default: {
          api_url: '127.0.0.1:3000'
    },
    development: {
        api_url: '127.0.0.1:3000'
    }
}

const env = process.env.NODE_ENV;

export default config[env];