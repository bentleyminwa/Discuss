import PostCreateForm from "@/components/posts/post-create-form";

interface TopicShowProps {
  params: {
    slug: string;
  };
}

export default function TopicShow({ params }: TopicShowProps) {
  const { slug } = params;

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h2 className="text-2xl font-bold mb-2 capitalize">{slug}</h2>
      </div>

      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}
