import PostLists from "@/components/posts/PostLists";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <PostLists limit={10} />
    </main>
  );
}
