const jwt = require('jsonwebtoken');

const expiration = '1h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.query.token || req.headers.authorization || req.body.token;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim;
        }

        if(!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token')
        } 
        return req;
    },
    signToken: function ({ email, name, _id }) {
        const payload = { email , name, _id };
        return jwt.sign({ data: payload }, {expiresIn: expiration});
    }  
};