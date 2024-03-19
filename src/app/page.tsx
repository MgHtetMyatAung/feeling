import PostLists from "@/components/posts/PostLists";
import { unstable_noStore as noStore } from "next/cache";

export const dynamic = "force-dynamic";

export default function Home() {
  noStore();
  return (
    <main className="">
      <PostLists limit={10} />
    </main>
  );
}
