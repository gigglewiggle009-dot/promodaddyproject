import { client } from "@/lib/sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

const builder = createImageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

async function getPost(slug) {
  return await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      title,
      mainImage,
      content
    }`,
    { slug }
  );
}

export default async function BlogSlugPage({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <div className="text-white text-center pt-40">
        Blog not found
      </div>
    );
  }

  return (
    <main className="bg-black text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {post.title}
        </h1>

        {post.mainImage && (
          <img
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            className="rounded-2xl mb-8 w-full"
          />
        )}

        <div className="prose prose-invert max-w-none">
          <PortableText value={post.content} />
        </div>
      </div>
    </main>
  );
}