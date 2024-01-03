import { getPost } from '../../../../sanity/lib/api'
import PortableTextComponents, { builder } from '@/util/portableTextComponents'

export default async function Blog({ params: { slug } }) {
  const post = await getPost(slug)
  return (
    <div className="container mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <article>
            <PortableTextComponents
              content={post.body}
              description={post.description}
              mainImage={post.mainImage}
              publishedAt={post.publishedAt}
              updatedAt={post._updatedAt}
              author={post.author}
            />
          </article>
        </div>
      </div>
    </div>
  )
}
