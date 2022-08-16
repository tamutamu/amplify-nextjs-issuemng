const { CognitoJwtVerifier } = require("aws-jwt-verify");

exports.handler = async (event, context, callback) => {
  console.log("start")
  
  const request = event.Records[0].cf.request
  
  if (request.headers['origin'] && request.method == 'OPTIONS') {
      callback(null, request)
      return undefined
  }
          
     const userPoolId = 'ap-northeast-1_sdYNrKtJN'
  const tokenUse = 'id'
  const clientId = '4hg35ebiuqf1igi9bemnj74a5s'

  const verifier = CognitoJwtVerifier.create({
    userPoolId,
    tokenUse,
    clientId,
  })


  console.log(request)
  console.error(request)

  //console.log('headers', request)
  
  try {
    for (const idToken of request.headers['authorization']) {
          console.log(idToken)
          const payload = await verifier.verify(idToken.value)
          // 認証成功
          callback(null, request)
          return undefined

    }
    throw new Error('Token not valid!')
  } catch (error) {
    // 認証失敗
    const response = {
      status: '403',
      statusDescription: 'Wrong',
      headers: {
        // location: [
        //   {
        //     key: 'Location',
        //     value: `https://${request.headers.host[0].value}`,
        //   },
        // ],
      },
    }
    throw Error(error)
    callback(null, response)
    return undefined
  }
};

