/** @packages */
import {Text} from "@nextui-org/react";
import type { NextPage } from "next";

/** @application */
import {LayoutDefault} from "@components/layouts";
import {HomeTable} from "@components/organisms";

const HomePage: NextPage = () => {
  return (
    <LayoutDefault title={'Home | Tickety App'}>
      <Text h2>Shows available</Text>
      <HomeTable/>
    </LayoutDefault>
  );
};

export default HomePage;
