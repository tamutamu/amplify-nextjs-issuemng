/* Amplify Params - DO NOT EDIT
	AUTH_AMPLIFYNEXTJSISSUEMNF60EBBD6F60EBBD6_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require("aws-sdk");

const cognito = new AWS.CognitoIdentityServiceProvider();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  const user = await cognito
    .adminDeleteUser({
      UserPoolId:
        process.env.AUTH_AMPLIFYNEXTJSISSUEMNF60EBBD6F60EBBD6_USERPOOLID,
      Username: event.arguments.username,
    })
    .promise();

  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify("Hello from Lambda!"),
  };
};
