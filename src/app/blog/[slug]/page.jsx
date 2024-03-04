import { getPost } from '../../../../sanity/lib/api'
import PortableTextComponents, { builder } from '@/util/portableTextComponents'
import BackButton from '@/components/BackButton'
import { Container } from '@/components/Container'
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript'
import { TbBusinessplan } from 'react-icons/tb'
import { FaRegSmileBeam } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa6'
import { SiRubyonrails } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

export function chooseIcon(category) {
  switch (category) {
    case 'Life':
      return <FaRegSmileBeam />
    case 'Coding':
      return <FaCode />
    case 'TypeScript':
      return <SiTypescript />
    case 'Entrepreneurship':
      return <TbBusinessplan />
    case 'Rails':
      return <SiRubyonrails />
    case 'NextJS':
      return <TbBrandNextjs />
    default:
      return null
  }
}

export default async function Blog({ params: { slug } }) {
  const post = await getPost(slug)
  return (
    <Container className="">
      <div className="mt-8 lg:mt-8">
        <div className="">
          <div className="mx-auto max-w-3xl">
            <article>
              <BackButton />
              <div className="my-5 grid grid-cols-6 gap-3 md:grid-cols-9 lg:grid-cols-12">
                {post.categories.map((category, index) => (
                  <span
                    key={index}
                    className="text-md relative inline-flex items-center justify-center rounded-full bg-gray-100 py-2 font-medium text-gray-800"
                  >
                    {chooseIcon(category.title)}
                  </span>
                ))}
              </div>
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
