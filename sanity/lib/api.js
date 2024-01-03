import { createClient } from "next-sanity"

export const client = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: false,
  apiVersion: "2021-03-25",
});

export const getPostSlugs = async () => {
  const query = `*[_type == "post"] | order(_createdAt desc) {
    "slug": slug.current,
    title,
    author->{
      name,
      "image": image.asset->url
    },
    categories[]->{
      title
    },
    "imageUrl": mainImage.asset->url,
    "publishedAt": publishedAt,
  }`
  const response = await client.fetch(query)
  return response
}

export const getPost = async (slug) => {
  const query = `*[_type == "post" && slug.current == $slug] {
    title,
    "imageUrl": mainImage.asset->url,
    "publishedAt": publishedAt,
    body,
    author->{
      name,
      "image": image.asset->url
    },
    categories[]->{
      title
    },
  }[0]`
  const params = { slug }
  const response = await client.fetch(query, params)
  return response
}
