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

  const todos = [
    { id: "1", content: "test1", createdAt: new Date(), updatedAt: new Date() },
    { id: "2", content: "test2", createdAt: new Date(), updatedAt: new Date() },
  ];

  return todos;
};
