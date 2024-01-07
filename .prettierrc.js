module.exports = {
  semi: false,
  tabWidth: 2,
  printWidth: 120,
  bracketSameLine: false,
  endOfLine: "auto",
  importOrder: [
    "^react(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^@/pages(.*)$",
    "^@/components(.*)$",
    "^@/utils(.*)$",
    "^@/public(.*)$",
    ".svg|.png|.json",
    "^../(.*)",
    "^./(.*)",
    "^[./]"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"]
}
