import { db } from "@/db";
import paths from "@/paths";
import { Chip } from "@heroui/react";
import Link from "next/link";

export default async function TopicList() {
  const topics = await db.topic.findMany();

  return (
    <div className="flex flex-row flex-wrap gap-2">
      <div>
        {topics.map((topic) => {
          return (
            <Link href={paths.topicShow(topic.slug)} key={topic.id}>
              <Chip color="secondary" variant="solid" className="mr-2 mb-2">
                {topic.slug}
              </Chip>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
