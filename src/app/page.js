import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";

export default async function Home() {
  return (
    <MaxWidthWrapper className="mb-12 mt-8">
      <ThreeDCardDemo />
    </MaxWidthWrapper>
  );
}
