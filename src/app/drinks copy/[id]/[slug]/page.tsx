import { DrinkDetailsContainer } from "@/features/search";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
    slug: string;
  }>;
};

const DrinkPage = async ({ params }: Props) => {
  const { id: idString } = await params;
  try {
    const id = parseInt(idString, 10);
    return <DrinkDetailsContainer id={id} />;
  } catch (error: any) {
    return notFound();
  }
};

export default DrinkPage;
