const PROXY_CONFIG = [
    {
        context: [
            "/api-2-0/*"            
        ],
        target: "https://www.udemy.com/api-2.0/",
        secure: true,
        changeOrigin: true,
        logLevel: "debug",
        // pathRewrite: {
        //    "^/api-2-0": ""
        // }
    }
]

module.exports = PROXY_CONFIG;