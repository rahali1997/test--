import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { EventTitle } from "../event/EventTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="events"
          reference="Event"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTitle} />
        </ReferenceArrayInput>
        <TextInput label="firstname" source="firstname" />
        <TextInput label="lastname" source="lastname" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
