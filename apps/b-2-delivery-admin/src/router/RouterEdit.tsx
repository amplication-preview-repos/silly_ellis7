import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const RouterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="isConnected" source="isConnected" />
        <TextInput label="routerName" source="routerName" />
        <TextInput label="macAddress" source="macAddress" />
        <NumberInput step={1} label="signalStrength" source="signalStrength" />
      </SimpleForm>
    </Edit>
  );
};
