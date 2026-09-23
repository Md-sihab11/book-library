import Banner from "@/components/homepage/Banner";
import Pagebooks from "@/components/homepage/books";
// import PageNavbar from "@/components/shared/page";
// import Listedpage from "./listedBooks/page";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     
      <Banner />
      <Pagebooks />
      <h2>Footer</h2>
    </div>
  );
}
