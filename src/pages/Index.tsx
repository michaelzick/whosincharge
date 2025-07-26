import { PartsBoard } from "./PartsBoard";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const Index = () => {
  useScrollToTop();
  return <PartsBoard />;
};

export default Index;
