/** @packages */
import { Grid, Row } from "@nextui-org/react";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

/** @application */
import { LayoutDefault } from "@components/layouts";
import {
  OrderSteps,
  OrderSummary,
  showById,
  ShowType,
} from "@components/organisms";

const ShoppingPage: NextPage = ({
  show,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <LayoutDefault title={"Shopping | Tickety App"}>
      <Grid.Container>
        <Grid xs={12}>
          <Row justify="space-between">
            <OrderSteps />
            <OrderSummary show={show} />
          </Row>
        </Grid>
      </Grid.Container>
    </LayoutDefault>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const showId = Number(id) ?? 0;
  try {
    const show: ShowType = showById(showId);
    return {
      props: { show },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default ShoppingPage;
