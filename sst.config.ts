/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "saturn-notes-sst",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: { aws: true },
    };
  },
  async run() {
    new sst.aws.StaticSite("StaticSite", {
      path: "site"
    });
  },
});
