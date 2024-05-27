/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "saturn-notes-sst",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: { aws: {} },
    };
  },
  async run() {
    new sst.aws.StaticSite("StaticSite");
  },
});
