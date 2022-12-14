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
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const user = await cognito
    .adminCreateUser({
      UserPoolId:
        process.env.AUTH_AMPLIFYNEXTJSISSUEMNF60EBBD6F60EBBD6_USERPOOLID,
      Username: event.arguments.username,
      TemporaryPassword: "P@ssw0rd1234",
      MessageAction: "SUPPRESS",
      UserAttributes: [
        {
          Name: "email",
          Value: "tamutamu731@gmail.com", // 属性のメールアドレスを指定
        },
        {
          Name: "email_verified",
          Value: "True", // メール認証済として登録
        },
      ],
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
