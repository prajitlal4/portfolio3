import { PortableText } from '@portabletext/react'
import { client } from '../../sanity/lib/api'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { format } from 'date-fns'

export const builder = imageUrlBuilder(client)

const mainImageUrl = (mainImage) => {
  return builder
    .image(mainImage.asset._ref)
    .width(1280)
    .format('webp')
    .height(720)
    .url()
}

const PortableTextComponents = ({
  content,
  description,
  publishedAt,
  mainImage,
  updatedAt,
  author,
}) => {
  const publishedDate = format(new Date(publishedAt), 'do LLLL yyyy')
  const updatedDate = format(new Date(updatedAt), 'do LLLL yyyy')

  return (
    <>
      {description && (
        <p className="text-md mb-4 mt-3 leading-7 text-gray-900 lg:text-lg">
          {description}
        </p>
      )}
      {publishedAt && (
        <p className="font-light text-gray-500">{publishedDate}</p>
      )}
      {mainImage && (
        <Image
          src={mainImageUrl(mainImage)}
          width={1280}
          height={720}
          alt={mainImage?.alt || 'Descriptive text for image'}
          className="mb-10 mt-5 aspect-video rounded-2xl bg-gray-50 object-cover"
        />
      )}
      <PortableText
        value={content}
        components={{
          types: {
            image: ({ value }) => {
              if (!value?.asset?._ref) {
                return null
              }
              return (
                <figure className="my-8 flex flex-col items-center justify-center">
                  <Image
                    src={builder
                      .image(value.asset._ref)
                      .width(1920)
                      .format('webp')
                      .height(1080)
                      .url()}
                    width={1920}
                    height={1080}
                    alt={value?.alt || 'Descriptive text for image'} // Ensure alt text is descriptive for SEO
                    className="rounded-2xl bg-gray-50 object-cover" // 'aspect-video' removed since width and height are set
                  />
                  {value.caption && (
                    <figcaption className="mt-4 text-center text-sm leading-6 text-gray-500">
                      {value.caption}
                    </figcaption>
                  )}
                </figure>
              )
            },
          },
          block: {
            h1: ({ children }) => (
              <h1 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="mb-3 mt-6 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl">
                {children}
              </h3>
            ),
            h4: ({ children }) => (
              <h4 className="mb-3 text-lg font-bold tracking-tight text-gray-900 lg:text-xl">
                {children}
              </h4>
            ),
            normal: ({ children }) => (
              <p className="text-md mb-2 mt-3 leading-7 text-gray-900 lg:text-lg">
                {children}
              </p>
            ),
          },
        }}
      />
      {author && (
        <div className="mt-10 flex gap-x-3">
          {updatedAt && (
            <p className="font-light text-gray-500">
              Last updated: {updatedDate} by
            </p>
          )}
          <Image
            src={author.image}
            width={800}
            height={800}
            alt={author?.alt || 'Descriptive text for image'}
            className="h-8 w-8 rounded-full bg-gray-50 object-cover"
          />
          <p className="font-light text-gray-500">{author.name} </p>
        </div>
      )}
      <hr className="mt-6 h-px border-0 bg-gray-200 dark:bg-gray-300" />
    </>
  )
}

export default PortableTextComponents
