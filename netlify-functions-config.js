const { config } = require('@netlify/functions');

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'BRAVEZM API is working' }),
  };
};