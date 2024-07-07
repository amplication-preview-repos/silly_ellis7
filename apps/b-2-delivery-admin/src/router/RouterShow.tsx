import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const RouterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="isConnected" source="isConnected" />
        <TextField label="routerName" source="routerName" />
        <TextField label="macAddress" source="macAddress" />
        <TextField label="signalStrength" source="signalStrength" />
      </SimpleShowLayout>
    </Show>
  );
};
