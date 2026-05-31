import fs from "fs"
import Cite from "citation-js"

const bib =
  fs.readFileSync(
    "./data/references.bib",
    "utf8"
  )

const cite = new Cite(bib)

const refs = {}

for (const item of cite.data) {

  const key =
    item.id

  const authors =
    item.author
      ?.map(a => a.family)
      .join(", ")

  refs[key] = {
    author: authors,
    year:
      item.issued?.["date-parts"]?.[0]?.[0]
        ?.toString() || "",
    title:
      item.title || "",
    venue:
      item["container-title"] || "",
    url:
      item.URL || ""
  }
}

fs.writeFileSync(
  "./data/references.json",
  JSON.stringify(refs, null, 2)
)

console.log(
  "references.json generated"
)