/* Amplify Params - DO NOT EDIT
	API_AMPLIFYNEXTJSISSUEMN_GRAPHQLAPIENDPOINTOUTPUT
	API_AMPLIFYNEXTJSISSUEMN_GRAPHQLAPIIDOUTPUT
	API_AMPLIFYNEXTJSISSUEMN_GRAPHQLAPIKEYOUTPUT
	AUTH_AMPLIFYNEXTJSISSUEMNF60EBBD6F60EBBD6_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
};
