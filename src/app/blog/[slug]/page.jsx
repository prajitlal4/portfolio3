import { getPost } from '../../../../sanity/lib/api'
import PortableTextComponents, { builder } from '@/util/portableTextComponents'
import BackButton from '@/components/BackButton'
import { Container } from '@/components/Container'

export default async function Blog({ params: { slug } }) {
  const post = await getPost(slug)
  return (
    <Container className="">
      <div className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-3xl">
            <article>
              <BackButton />
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
    </Container>
  )
}
