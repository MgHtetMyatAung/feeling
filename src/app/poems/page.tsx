import PostLists from "@/components/posts/PostLists";
import React from "react";

function PoemsPage() {
  return (
    <section>
      <PostLists limit={100} />
    </section>
  );
}

export default PoemsPage;
