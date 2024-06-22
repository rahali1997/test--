import { EventUpdateManyWithoutCustomersInput } from "./EventUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  events?: EventUpdateManyWithoutCustomersInput;
  firstname?: string | null;
  lastname?: string | null;
  phone?: string | null;
};
