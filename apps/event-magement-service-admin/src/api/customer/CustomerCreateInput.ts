import { EventCreateNestedManyWithoutCustomersInput } from "./EventCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  events?: EventCreateNestedManyWithoutCustomersInput;
  firstname?: string | null;
  lastname?: string | null;
  phone?: string | null;
};
