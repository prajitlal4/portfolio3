import { getPost } from '../../../../sanity/lib/api'

export default async function Blog({ params: { slug } }) {
  const post = await getPost(slug)
  console.log(post[0])
  return (
    <div className="container mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {post.title}
              </h1>
              <time
                dateTime={post.publishedAt}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
              </time>
            </header>
          </article>
        </div>
      </div>
    </div>
  )
}
