import { getPostData } from "@/app/lib/posts";
import { headers } from "next/headers";sajkAJKCNBB

export default function BlogPage() {
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";
  const splitUrl = fullUrl.split("/");
  const flowers = splitUrl[splitUrl.length - 1];
 
 
  const postData = getPostData(flowers);

  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2 className="text-xl font-bold">{postData.title}</h2>
        <p className="font-light py-6">{postData.date} by Paddy</p>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </div>
    </main>
  );
}
