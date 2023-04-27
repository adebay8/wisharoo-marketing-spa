import { Meta } from "@/components";
import { DefaultLayout } from "@/layouts";
import { HomeHero } from "@/sections";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Meta
        title="Wisharoo"
        description="Shop, share, and turn your dreams into reality, one wish at a time."
        image="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=1190&height=800&name=image8-2.jpg"
      />
      <DefaultLayout pageId="home">
        <HomeHero />
      </DefaultLayout>
    </>
  );
}
