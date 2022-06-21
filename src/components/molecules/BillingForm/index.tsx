/** @packages */
import { Grid, Input, Row } from "@nextui-org/react";

export const BillingForm = (): JSX.Element => {
  return (
    <Grid.Container gap={1}>
      <Grid>
        <Input clearable type="tel" label="Phone" placeholder="3001112222" />
      </Grid>
      <Grid>
        <Input clearable label="Name" placeholder="John Max" />
      </Grid>
      <Grid>
        <Input
          clearable
          type="text"
          label="Address"
          placeholder="Cra 23 - cll 12"
        />
      </Grid>
      <Grid>
        <Input clearable type="text" label="City" placeholder="Medellin" />
      </Grid>
      <Grid>
        <Input
          clearable
          type="text"
          label="Country"
          placeholder="Colombia"
          value="Colombia"
          disabled
        />
      </Grid>
      <Grid>
        <Input
          clearable
          type="number"
          label="Postal code"
          placeholder="1300001"
        />
      </Grid>
    </Grid.Container>
  );
};
