import { govukEleventyPlugin } from "@x-govuk/govuk-eleventy-plugin";

export default function (eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    rebrand: true,
    titleSuffix: "HM Land Registry",
    header: {
      logotype: {
        text: "HM Land Registry",
      },
    },
    serviceNavigation: {
      serviceName: "Business Gateway",
      serviceUrl: "#",
      navigation: [
        {
          href: "#",
          text: "Navigation item 1",
        },
        {
          href: "#",
          text: "Navigation item 2",
          active: true,
        },
        {
          href: "#",
          text: "Navigation item 3",
        },
      ],
    },
    footer: {
      logo: false,
    },
    stylesheets: ["/assets/styles.css"],
  });

  return {
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      // The folder where all your content will live:
      input: "docs",
    },
    pathPrefix: "/govuk-11ty/",
  };
}
