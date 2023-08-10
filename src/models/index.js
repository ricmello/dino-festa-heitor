// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const GuestType = {
  "ADULT": "ADULT",
  "CHILD": "CHILD",
  "BABY": "BABY"
};

const { Companion, Guest } = initSchema(schema);

export {
  Companion,
  Guest,
  GuestType
};