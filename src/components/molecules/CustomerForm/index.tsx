/** @packages */
import { Grid, Input } from "@nextui-org/react";

export const CustomerForm = (): JSX.Element => {
  return (
    <Grid.Container gap={1}>
      <Grid>
        <Input
          clearable
          type="email"
          label="Email"
          placeholder="john@email.com"
        />
      </Grid>
      <Grid>
        <Input clearable label="Name" placeholder="John Max" />
      </Grid>
      <Grid>
        <Input.Password
          clearable
          type="password"
          label="Password"
          placeholder="Enter your password"
        />
      </Grid>
      <Grid>
        <Input.Password
          clearable
          type="password"
          label="Confirm password"
          placeholder="Enter your password"
        />
      </Grid>
    </Grid.Container>
  );
};
