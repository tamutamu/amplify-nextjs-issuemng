import { AmplifyApiGraphQlResourceStackTemplate } from "@aws-amplify/cli-extensibility-helper";

export function override(resources: AmplifyApiGraphQlResourceStackTemplate) {
  console.log("@@@ START @@@");
  console.log(
    resources.models["Sto"].resolvers["queryGetStoResolver"].cachingConfig
  );
  resources.models["Sto"].resolvers["queryGetStoResolver"].cachingConfig = {
    cachingKeys: [],
    ttl: 10,
  };
  console.log("@@@ END @@@");
}
