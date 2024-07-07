import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const WebSocketConnectionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="connectionId" source="connectionId" />
        <TextInput label="status" source="status" />
        <TextInput label="message" multiline source="message" />
      </SimpleForm>
    </Edit>
  );
};
