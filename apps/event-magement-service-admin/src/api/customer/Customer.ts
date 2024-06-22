import { Event } from "../event/Event";

export type Customer = {
  createdAt: Date;
  events?: Array<Event>;
  firstname: string | null;
  id: string;
  lastname: string | null;
  phone: string | null;
  updatedAt: Date;
};
