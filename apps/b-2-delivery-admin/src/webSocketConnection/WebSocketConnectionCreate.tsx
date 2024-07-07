import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const WebSocketConnectionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="connectionId" source="connectionId" />
        <TextInput label="status" source="status" />
        <TextInput label="message" multiline source="message" />
      </SimpleForm>
    </Create>
  );
};
