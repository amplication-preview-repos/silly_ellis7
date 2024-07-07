import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const RouterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isConnected" source="isConnected" />
        <TextInput label="routerName" source="routerName" />
        <TextInput label="macAddress" source="macAddress" />
        <NumberInput step={1} label="signalStrength" source="signalStrength" />
      </SimpleForm>
    </Create>
  );
};
