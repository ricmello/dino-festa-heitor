import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum GuestType {
  ADULT = "ADULT",
  CHILD = "CHILD",
  BABY = "BABY"
}



type EagerCompanion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Companion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly type?: GuestType | keyof typeof GuestType | null;
  readonly guestID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompanion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Companion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly type?: GuestType | keyof typeof GuestType | null;
  readonly guestID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Companion = LazyLoading extends LazyLoadingDisabled ? EagerCompanion : LazyCompanion

export declare const Companion: (new (init: ModelInit<Companion>) => Companion) & {
  copyOf(source: Companion, mutator: (draft: MutableModel<Companion>) => MutableModel<Companion> | void): Companion;
}

type EagerGuest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Guest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly type?: GuestType | keyof typeof GuestType | null;
  readonly Companions?: (Companion | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGuest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Guest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly type?: GuestType | keyof typeof GuestType | null;
  readonly Companions: AsyncCollection<Companion>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Guest = LazyLoading extends LazyLoadingDisabled ? EagerGuest : LazyGuest

export declare const Guest: (new (init: ModelInit<Guest>) => Guest) & {
  copyOf(source: Guest, mutator: (draft: MutableModel<Guest>) => MutableModel<Guest> | void): Guest;
}