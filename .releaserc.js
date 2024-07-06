// Export a configuration object for Semantic Release

module.exports = {
  // Define the branch to release from (e.g., "main" branch)
  branches: [{ name: "main" }],

  // List of plugins used for the release process
  plugins: [
    // Plugin to analyze commit messages following the Angular commit convention
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular", // Use the Angular preset
      },
    ],
    // Plugin to generate release notes
    "@semantic-release/release-notes-generator",
    // Plugin to update the changelog
    "@semantic-release/changelog",
    // Plugin to commit changes to the repository
    [
      "@semantic-release/git",
      {
        // Specify files to commit as part of the release
        assets: ["CHANGELOG.md", "package.json", "yarn.lock"],
        // Define the commit message format
        message: "chore(release): 🤖 ${nextRelease.version} [skip ci]",
      },
    ],
    // Plugin to create a GitHub release
    [
      "@semantic-release/github",
      {
        // Specify assets to upload with the release
        assets: ["CHANGELOG.md"],
      },
    ],
  ],

  // Use the Angular preset for commit message parsing
  preset: "angular",

  // Enable CI mode (disables prompts and prevents publishing)
  ci: true,

  // Enable debug mode for more verbose output
  debug: true,
};
