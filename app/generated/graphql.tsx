import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AddRolesToUserInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AuthInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthType = {
  __typename?: 'AuthType';
  token: Scalars['String']['output'];
  user: User;
};

export type CreateFieldInput = {
  acre?: InputMaybe<Scalars['String']['input']>;
  cordinates?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateFieldSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: FieldSubscriptionFilter;
};

export type CreateFileInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  filePath?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};

export type CreateInventoryInput = {
  amount: Scalars['Float']['input'];
  fields?: InputMaybe<Array<UpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  storage?: InputMaybe<Scalars['String']['input']>;
  storages?: InputMaybe<Array<UpdateStorageInput>>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateManyFilesInput = {
  /** Array of records to create */
  files: Array<CreateFileInput>;
};

export type CreateManyInventoriesInput = {
  /** Array of records to create */
  inventories: Array<CreateInventoryInput>;
};

export type CreateManyProductionsInput = {
  /** Array of records to create */
  productions: Array<CreateProductionInput>;
};

export type CreateManyStoragesInput = {
  /** Array of records to create */
  storages: Array<CreateStorageInput>;
};

export type CreateManyTasksInput = {
  /** Array of records to create */
  tasks: Array<CreateTaskInput>;
};

export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<CreateUserInput>;
};

export type CreateOneFileInput = {
  /** The record to create */
  file: CreateFileInput;
};

export type CreateOneInventoryInput = {
  /** The record to create */
  inventory: CreateInventoryInput;
};

export type CreateOneProductionInput = {
  /** The record to create */
  production: CreateProductionInput;
};

export type CreateOneStorageInput = {
  /** The record to create */
  storage: CreateStorageInput;
};

export type CreateOneTaskInput = {
  /** The record to create */
  task: CreateTaskInput;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: CreateUserInput;
};

export type CreateProductionInput = {
  amount: Scalars['Float']['input'];
  fields?: InputMaybe<Array<UpdateFieldInput>>;
  name: Scalars['String']['input'];
};

export type CreateStorageInput = {
  amount: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type CreateTaskInput = {
  date: Scalars['DateTime']['input'];
  dayOfWeek?: InputMaybe<Scalars['Float']['input']>;
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserInput = {
  CPF?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roles: Array<RoleInput>;
  telephone?: InputMaybe<Scalars['String']['input']>;
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime']['input'];
  upper: Scalars['DateTime']['input'];
};

export type DeleteManyFilesInput = {
  /** Filter to find records to delete */
  filter: FileDeleteFilter;
};

export type DeleteManyInventoriesInput = {
  /** Filter to find records to delete */
  filter: InventoryDeleteFilter;
};

export type DeleteManyProductionsInput = {
  /** Filter to find records to delete */
  filter: ProductionDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int']['output'];
};

export type DeleteManyStoragesInput = {
  /** Filter to find records to delete */
  filter: StorageDeleteFilter;
};

export type DeleteManyTasksInput = {
  /** Filter to find records to delete */
  filter: TaskDeleteFilter;
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type DeleteOneFieldSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: FieldSubscriptionFilter;
};

export type DeleteOneFileInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneInventoryInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneProductionInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneStorageInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneTaskInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type Field = {
  __typename?: 'Field';
  acre: Scalars['String']['output'];
  cordinates?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  fieldImage?: Maybe<File>;
  id: Scalars['String']['output'];
  imagePath?: Maybe<Scalars['String']['output']>;
  inventories?: Maybe<Inventory>;
  name: Scalars['String']['output'];
  productions?: Maybe<Production>;
  updatedAt: Scalars['DateTime']['output'];
};

export type FieldAggregateFilter = {
  acre?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<FieldAggregateFilter>>;
  cordinates?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  imagePath?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FieldAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FieldAggregateGroupBy = {
  __typename?: 'FieldAggregateGroupBy';
  acre?: Maybe<Scalars['String']['output']>;
  cordinates?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FieldAggregateResponse = {
  __typename?: 'FieldAggregateResponse';
  count?: Maybe<FieldCountAggregate>;
  groupBy?: Maybe<FieldAggregateGroupBy>;
  max?: Maybe<FieldMaxAggregate>;
  min?: Maybe<FieldMinAggregate>;
};

export type FieldConnection = {
  __typename?: 'FieldConnection';
  /** Array of nodes. */
  nodes: Array<Field>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type FieldCountAggregate = {
  __typename?: 'FieldCountAggregate';
  acre?: Maybe<Scalars['Int']['output']>;
  cordinates?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imagePath?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type FieldDeleteResponse = {
  __typename?: 'FieldDeleteResponse';
  acre?: Maybe<Scalars['String']['output']>;
  cordinates?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FieldFilter = {
  acre?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<FieldFilter>>;
  cordinates?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  fieldImage?: InputMaybe<FieldFilterFileFilter>;
  id?: InputMaybe<StringFieldComparison>;
  imagePath?: InputMaybe<StringFieldComparison>;
  inventories?: InputMaybe<FieldFilterInventoryFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FieldFilter>>;
  productions?: InputMaybe<FieldFilterProductionFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FieldFilterFileFilter = {
  and?: InputMaybe<Array<FieldFilterFileFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FieldFilterFileFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FieldFilterInventoryFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<FieldFilterInventoryFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FieldFilterInventoryFilter>>;
  provider?: InputMaybe<StringFieldComparison>;
  storage?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  value?: InputMaybe<NumberFieldComparison>;
};

export type FieldFilterProductionFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<FieldFilterProductionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FieldFilterProductionFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FieldMaxAggregate = {
  __typename?: 'FieldMaxAggregate';
  acre?: Maybe<Scalars['String']['output']>;
  cordinates?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FieldMinAggregate = {
  __typename?: 'FieldMinAggregate';
  acre?: Maybe<Scalars['String']['output']>;
  cordinates?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FieldSort = {
  direction: SortDirection;
  field: FieldSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FieldSortFields {
  Acre = 'acre',
  Cordinates = 'cordinates',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  ImagePath = 'imagePath',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type FieldSubscriptionFilter = {
  acre?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<FieldSubscriptionFilter>>;
  cordinates?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  imagePath?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FieldSubscriptionFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type File = {
  __typename?: 'File';
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  fileName?: Maybe<Scalars['String']['output']>;
  filePath?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type FileAggregateGroupBy = {
  __typename?: 'FileAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  /** Array of nodes. */
  nodes: Array<File>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type FileCountAggregate = {
  __typename?: 'FileCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type FileDeleteFilter = {
  and?: InputMaybe<Array<FileDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FileDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FileDeleteResponse = {
  __typename?: 'FileDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  filePath?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FileFilter = {
  and?: InputMaybe<Array<FileFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FileFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FileMaxAggregate = {
  __typename?: 'FileMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FileMinAggregate = {
  __typename?: 'FileMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FileSort = {
  direction: SortDirection;
  field: FileSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FileSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type FileUpdateFilter = {
  and?: InputMaybe<Array<FileUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FileUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type Inventory = {
  __typename?: 'Inventory';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  fields?: Maybe<Field>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  provider: Scalars['String']['output'];
  storage?: Maybe<Scalars['String']['output']>;
  storages?: Maybe<Storage>;
  updatedAt: Scalars['DateTime']['output'];
  value?: Maybe<Scalars['Float']['output']>;
};

export type InventoryAggregateGroupBy = {
  __typename?: 'InventoryAggregateGroupBy';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  storage?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type InventoryAvgAggregate = {
  __typename?: 'InventoryAvgAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type InventoryConnection = {
  __typename?: 'InventoryConnection';
  /** Array of nodes. */
  nodes: Array<Inventory>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type InventoryCountAggregate = {
  __typename?: 'InventoryCountAggregate';
  amount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  provider?: Maybe<Scalars['Int']['output']>;
  storage?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type InventoryDeleteFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<InventoryDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InventoryDeleteFilter>>;
  provider?: InputMaybe<StringFieldComparison>;
  storage?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  value?: InputMaybe<NumberFieldComparison>;
};

export type InventoryDeleteResponse = {
  __typename?: 'InventoryDeleteResponse';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  storage?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type InventoryFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<InventoryFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  fields?: InputMaybe<InventoryFilterFieldFilter>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InventoryFilter>>;
  provider?: InputMaybe<StringFieldComparison>;
  storage?: InputMaybe<StringFieldComparison>;
  storages?: InputMaybe<InventoryFilterStorageFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  value?: InputMaybe<NumberFieldComparison>;
};

export type InventoryFilterFieldFilter = {
  acre?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<InventoryFilterFieldFilter>>;
  cordinates?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  imagePath?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InventoryFilterFieldFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type InventoryFilterStorageFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<InventoryFilterStorageFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InventoryFilterStorageFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type InventoryMaxAggregate = {
  __typename?: 'InventoryMaxAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  storage?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type InventoryMinAggregate = {
  __typename?: 'InventoryMinAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  storage?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type InventorySort = {
  direction: SortDirection;
  field: InventorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum InventorySortFields {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  Provider = 'provider',
  Storage = 'storage',
  UpdatedAt = 'updatedAt',
  Value = 'value'
}

export type InventorySumAggregate = {
  __typename?: 'InventorySumAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type InventoryUpdateFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<InventoryUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InventoryUpdateFilter>>;
  provider?: InputMaybe<StringFieldComparison>;
  storage?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  value?: InputMaybe<NumberFieldComparison>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addRolesToUser: User;
  createManyFiles: Array<File>;
  createManyInventories: Array<Inventory>;
  createManyProductions: Array<Production>;
  createManyStorages: Array<Storage>;
  createManyTasks: Array<Task>;
  createManyUsers: Array<User>;
  createOneField: Field;
  createOneFile: File;
  createOneInventory: Inventory;
  createOneProduction: Production;
  createOneStorage: Storage;
  createOneTask: Task;
  createOneUser: User;
  deleteManyFiles: DeleteManyResponse;
  deleteManyInventories: DeleteManyResponse;
  deleteManyProductions: DeleteManyResponse;
  deleteManyStorages: DeleteManyResponse;
  deleteManyTasks: DeleteManyResponse;
  deleteManyUsers: DeleteManyResponse;
  deleteOneFieldAndForget: Field;
  deleteOneFile: FileDeleteResponse;
  deleteOneInventory: InventoryDeleteResponse;
  deleteOneProduction: ProductionDeleteResponse;
  deleteOneStorage: StorageDeleteResponse;
  deleteOneTask: TaskDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  deletePhysicalFile: Scalars['Boolean']['output'];
  loginUser: AuthType;
  removeFieldImageFromField: Field;
  removeFieldsFromInventory: Inventory;
  removeFieldsFromProduction: Production;
  removeInventoriesFromField: Field;
  removeInventoriesFromStorage: Storage;
  removeProductionsFromField: Field;
  removeRolesFromUser: User;
  removeStoragesFromInventory: Inventory;
  setFieldImageOnField: Field;
  setFieldsOnInventory: Inventory;
  setFieldsOnProduction: Production;
  setInventoriesOnField: Field;
  setInventoriesOnStorage: Storage;
  setProductionsOnField: Field;
  setRolesOnUser: User;
  setStoragesOnInventory: Inventory;
  updateManyFiles: UpdateManyResponse;
  updateManyInventories: UpdateManyResponse;
  updateManyProductions: UpdateManyResponse;
  updateManyStorages: UpdateManyResponse;
  updateManyTasks: UpdateManyResponse;
  updateManyUsers: UpdateManyResponse;
  updateOneField: Field;
  updateOneFile: File;
  updateOneInventory: Inventory;
  updateOneProduction: Production;
  updateOneStorage: Storage;
  updateOneTask: Task;
  updateOneUser: User;
};


export type MutationAddRolesToUserArgs = {
  input: AddRolesToUserInput;
};


export type MutationCreateManyFilesArgs = {
  input: CreateManyFilesInput;
};


export type MutationCreateManyInventoriesArgs = {
  input: CreateManyInventoriesInput;
};


export type MutationCreateManyProductionsArgs = {
  input: CreateManyProductionsInput;
};


export type MutationCreateManyStoragesArgs = {
  input: CreateManyStoragesInput;
};


export type MutationCreateManyTasksArgs = {
  input: CreateManyTasksInput;
};


export type MutationCreateManyUsersArgs = {
  input: CreateManyUsersInput;
};


export type MutationCreateOneFieldArgs = {
  data: CreateFieldInput;
  fieldImage?: InputMaybe<Scalars['Upload']['input']>;
};


export type MutationCreateOneFileArgs = {
  input: CreateOneFileInput;
};


export type MutationCreateOneInventoryArgs = {
  input: CreateOneInventoryInput;
};


export type MutationCreateOneProductionArgs = {
  input: CreateOneProductionInput;
};


export type MutationCreateOneStorageArgs = {
  input: CreateOneStorageInput;
};


export type MutationCreateOneTaskArgs = {
  input: CreateOneTaskInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationDeleteManyFilesArgs = {
  input: DeleteManyFilesInput;
};


export type MutationDeleteManyInventoriesArgs = {
  input: DeleteManyInventoriesInput;
};


export type MutationDeleteManyProductionsArgs = {
  input: DeleteManyProductionsInput;
};


export type MutationDeleteManyStoragesArgs = {
  input: DeleteManyStoragesInput;
};


export type MutationDeleteManyTasksArgs = {
  input: DeleteManyTasksInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};


export type MutationDeleteOneFieldAndForgetArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteOneFileArgs = {
  input: DeleteOneFileInput;
};


export type MutationDeleteOneInventoryArgs = {
  input: DeleteOneInventoryInput;
};


export type MutationDeleteOneProductionArgs = {
  input: DeleteOneProductionInput;
};


export type MutationDeleteOneStorageArgs = {
  input: DeleteOneStorageInput;
};


export type MutationDeleteOneTaskArgs = {
  input: DeleteOneTaskInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};


export type MutationDeletePhysicalFileArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  data: AuthInput;
};


export type MutationRemoveFieldImageFromFieldArgs = {
  input: RemoveFieldImageFromFieldInput;
};


export type MutationRemoveFieldsFromInventoryArgs = {
  input: RemoveFieldsFromInventoryInput;
};


export type MutationRemoveFieldsFromProductionArgs = {
  input: RemoveFieldsFromProductionInput;
};


export type MutationRemoveInventoriesFromFieldArgs = {
  input: RemoveInventoriesFromFieldInput;
};


export type MutationRemoveInventoriesFromStorageArgs = {
  input: RemoveInventoriesFromStorageInput;
};


export type MutationRemoveProductionsFromFieldArgs = {
  input: RemoveProductionsFromFieldInput;
};


export type MutationRemoveRolesFromUserArgs = {
  input: RemoveRolesFromUserInput;
};


export type MutationRemoveStoragesFromInventoryArgs = {
  input: RemoveStoragesFromInventoryInput;
};


export type MutationSetFieldImageOnFieldArgs = {
  input: SetFieldImageOnFieldInput;
};


export type MutationSetFieldsOnInventoryArgs = {
  input: SetFieldsOnInventoryInput;
};


export type MutationSetFieldsOnProductionArgs = {
  input: SetFieldsOnProductionInput;
};


export type MutationSetInventoriesOnFieldArgs = {
  input: SetInventoriesOnFieldInput;
};


export type MutationSetInventoriesOnStorageArgs = {
  input: SetInventoriesOnStorageInput;
};


export type MutationSetProductionsOnFieldArgs = {
  input: SetProductionsOnFieldInput;
};


export type MutationSetRolesOnUserArgs = {
  input: SetRolesOnUserInput;
};


export type MutationSetStoragesOnInventoryArgs = {
  input: SetStoragesOnInventoryInput;
};


export type MutationUpdateManyFilesArgs = {
  input: UpdateManyFilesInput;
};


export type MutationUpdateManyInventoriesArgs = {
  input: UpdateManyInventoriesInput;
};


export type MutationUpdateManyProductionsArgs = {
  input: UpdateManyProductionsInput;
};


export type MutationUpdateManyStoragesArgs = {
  input: UpdateManyStoragesInput;
};


export type MutationUpdateManyTasksArgs = {
  input: UpdateManyTasksInput;
};


export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};


export type MutationUpdateOneFieldArgs = {
  data: UpdateFieldInput;
  fieldImage?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateOneFileArgs = {
  input: UpdateOneFileInput;
};


export type MutationUpdateOneInventoryArgs = {
  input: UpdateOneInventoryInput;
};


export type MutationUpdateOneProductionArgs = {
  input: UpdateOneProductionInput;
};


export type MutationUpdateOneStorageArgs = {
  input: UpdateOneStorageInput;
};


export type MutationUpdateOneTaskArgs = {
  input: UpdateOneTaskInput;
};


export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float']['input'];
  upper: Scalars['Float']['input'];
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Production = {
  __typename?: 'Production';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  fields?: Maybe<Field>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductionAggregateGroupBy = {
  __typename?: 'ProductionAggregateGroupBy';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductionAvgAggregate = {
  __typename?: 'ProductionAvgAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
};

export type ProductionConnection = {
  __typename?: 'ProductionConnection';
  /** Array of nodes. */
  nodes: Array<Production>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductionCountAggregate = {
  __typename?: 'ProductionCountAggregate';
  amount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ProductionDeleteFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<ProductionDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductionDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductionDeleteResponse = {
  __typename?: 'ProductionDeleteResponse';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductionFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<ProductionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  fields?: InputMaybe<ProductionFilterFieldFilter>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductionFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductionFilterFieldFilter = {
  acre?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<ProductionFilterFieldFilter>>;
  cordinates?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  imagePath?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductionFilterFieldFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductionMaxAggregate = {
  __typename?: 'ProductionMaxAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductionMinAggregate = {
  __typename?: 'ProductionMinAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductionSort = {
  direction: SortDirection;
  field: ProductionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductionSortFields {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ProductionSumAggregate = {
  __typename?: 'ProductionSumAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
};

export type ProductionUpdateFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<ProductionUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductionUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type Query = {
  __typename?: 'Query';
  field?: Maybe<Field>;
  fieldAggregate: Array<FieldAggregateResponse>;
  fields: FieldConnection;
  file?: Maybe<File>;
  files: FileConnection;
  getOneUser: User;
  getUserByEmail: User;
  inventories: InventoryConnection;
  inventory?: Maybe<Inventory>;
  me: User;
  production?: Maybe<Production>;
  productions: ProductionConnection;
  role?: Maybe<Role>;
  roles: RoleConnection;
  storage?: Maybe<Storage>;
  storages: StorageConnection;
  task?: Maybe<Task>;
  tasks: TaskConnection;
  user?: Maybe<User>;
  users: UserConnection;
};


export type QueryFieldArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFieldAggregateArgs = {
  filter?: InputMaybe<FieldAggregateFilter>;
};


export type QueryFieldsArgs = {
  filter?: FieldFilter;
  paging?: OffsetPaging;
  sorting?: Array<FieldSort>;
};


export type QueryFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFilesArgs = {
  filter?: FileFilter;
  paging?: OffsetPaging;
  sorting?: Array<FileSort>;
};


export type QueryGetOneUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserByEmailArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInventoriesArgs = {
  filter?: InventoryFilter;
  paging?: OffsetPaging;
  sorting?: Array<InventorySort>;
};


export type QueryInventoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductionsArgs = {
  filter?: ProductionFilter;
  paging?: OffsetPaging;
  sorting?: Array<ProductionSort>;
};


export type QueryRoleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRolesArgs = {
  filter?: RoleFilter;
  paging?: OffsetPaging;
  sorting?: Array<RoleSort>;
};


export type QueryStorageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStoragesArgs = {
  filter?: StorageFilter;
  paging?: OffsetPaging;
  sorting?: Array<StorageSort>;
};


export type QueryTaskArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTasksArgs = {
  filter?: TaskFilter;
  paging?: OffsetPaging;
  sorting?: Array<TaskSort>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  filter?: UserFilter;
  paging?: OffsetPaging;
  sorting?: Array<UserSort>;
};

export type RemoveFieldImageFromFieldInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type RemoveFieldsFromInventoryInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type RemoveFieldsFromProductionInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type RemoveInventoriesFromFieldInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type RemoveInventoriesFromStorageInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type RemoveProductionsFromFieldInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type RemoveRolesFromUserInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type RemoveStoragesFromInventoryInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: RolesEnum;
  updatedAt: Scalars['DateTime']['output'];
};

export type RoleAggregateGroupBy = {
  __typename?: 'RoleAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<RolesEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RoleConnection = {
  __typename?: 'RoleConnection';
  /** Array of nodes. */
  nodes: Array<Role>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type RoleCountAggregate = {
  __typename?: 'RoleCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type RoleFilter = {
  and?: InputMaybe<Array<RoleFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<RolesEnumFilterComparison>;
  or?: InputMaybe<Array<RoleFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type RoleInput = {
  id: Scalars['String']['input'];
  name?: InputMaybe<RolesEnum>;
};

export type RoleInputDto = {
  __typename?: 'RoleInputDTO';
  id: Scalars['String']['output'];
  name?: Maybe<RolesEnum>;
};

export type RoleInputDtoFilter = {
  and?: InputMaybe<Array<RoleInputDtoFilter>>;
  name?: InputMaybe<RolesEnumFilterComparison>;
  or?: InputMaybe<Array<RoleInputDtoFilter>>;
};

export type RoleInputDtoSort = {
  direction: SortDirection;
  field: RoleInputDtoSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RoleInputDtoSortFields {
  Name = 'name'
}

export type RoleMaxAggregate = {
  __typename?: 'RoleMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<RolesEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RoleMinAggregate = {
  __typename?: 'RoleMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<RolesEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RoleSort = {
  direction: SortDirection;
  field: RoleSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RoleSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export enum RolesEnum {
  Employee = 'EMPLOYEE',
  SuperAdmin = 'SUPER_ADMIN'
}

export type RolesEnumFilterComparison = {
  eq?: InputMaybe<RolesEnum>;
  gt?: InputMaybe<RolesEnum>;
  gte?: InputMaybe<RolesEnum>;
  iLike?: InputMaybe<RolesEnum>;
  in?: InputMaybe<Array<RolesEnum>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<RolesEnum>;
  lt?: InputMaybe<RolesEnum>;
  lte?: InputMaybe<RolesEnum>;
  neq?: InputMaybe<RolesEnum>;
  notILike?: InputMaybe<RolesEnum>;
  notIn?: InputMaybe<Array<RolesEnum>>;
  notLike?: InputMaybe<RolesEnum>;
};

export type SetFieldImageOnFieldInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type SetFieldsOnInventoryInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type SetFieldsOnProductionInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type SetInventoriesOnFieldInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type SetInventoriesOnStorageInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type SetProductionsOnFieldInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type SetRolesOnUserInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetStoragesOnInventoryInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type Storage = {
  __typename?: 'Storage';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  inventories?: Maybe<Inventory>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type StorageAggregateGroupBy = {
  __typename?: 'StorageAggregateGroupBy';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StorageAvgAggregate = {
  __typename?: 'StorageAvgAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
};

export type StorageConnection = {
  __typename?: 'StorageConnection';
  /** Array of nodes. */
  nodes: Array<Storage>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type StorageCountAggregate = {
  __typename?: 'StorageCountAggregate';
  amount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type StorageDeleteFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<StorageDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<StorageDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type StorageDeleteResponse = {
  __typename?: 'StorageDeleteResponse';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StorageFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<StorageFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  inventories?: InputMaybe<StorageFilterInventoryFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<StorageFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type StorageFilterInventoryFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<StorageFilterInventoryFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<StorageFilterInventoryFilter>>;
  provider?: InputMaybe<StringFieldComparison>;
  storage?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  value?: InputMaybe<NumberFieldComparison>;
};

export type StorageMaxAggregate = {
  __typename?: 'StorageMaxAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StorageMinAggregate = {
  __typename?: 'StorageMinAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StorageSort = {
  direction: SortDirection;
  field: StorageSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum StorageSortFields {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type StorageSumAggregate = {
  __typename?: 'StorageSumAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
};

export type StorageUpdateFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<StorageUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<StorageUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  iLike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notILike?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  createdField: Field;
  deletedManyFields: DeleteManyResponse;
  deletedOneField: FieldDeleteResponse;
  updatedManyFields: UpdateManyResponse;
  updatedOneField: Field;
};


export type SubscriptionCreatedFieldArgs = {
  input?: InputMaybe<CreateFieldSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneFieldArgs = {
  input?: InputMaybe<DeleteOneFieldSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneFieldArgs = {
  input?: InputMaybe<UpdateOneFieldSubscriptionFilterInput>;
};

export type Task = {
  __typename?: 'Task';
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  dayOfWeek?: Maybe<Scalars['Float']['output']>;
  deletedAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userName?: Maybe<Scalars['String']['output']>;
};

export type TaskAggregateGroupBy = {
  __typename?: 'TaskAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  dayOfWeek?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type TaskAvgAggregate = {
  __typename?: 'TaskAvgAggregate';
  dayOfWeek?: Maybe<Scalars['Float']['output']>;
};

export type TaskConnection = {
  __typename?: 'TaskConnection';
  /** Array of nodes. */
  nodes: Array<Task>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type TaskCountAggregate = {
  __typename?: 'TaskCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['Int']['output']>;
  dayOfWeek?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
  userName?: Maybe<Scalars['Int']['output']>;
};

export type TaskDeleteFilter = {
  and?: InputMaybe<Array<TaskDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  dayOfWeek?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskDeleteFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userName?: InputMaybe<StringFieldComparison>;
};

export type TaskDeleteResponse = {
  __typename?: 'TaskDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  dayOfWeek?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type TaskFilter = {
  and?: InputMaybe<Array<TaskFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  dayOfWeek?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userName?: InputMaybe<StringFieldComparison>;
};

export type TaskMaxAggregate = {
  __typename?: 'TaskMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  dayOfWeek?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type TaskMinAggregate = {
  __typename?: 'TaskMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  dayOfWeek?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type TaskSort = {
  direction: SortDirection;
  field: TaskSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TaskSortFields {
  CreatedAt = 'createdAt',
  Date = 'date',
  DayOfWeek = 'dayOfWeek',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UserName = 'userName'
}

export type TaskSumAggregate = {
  __typename?: 'TaskSumAggregate';
  dayOfWeek?: Maybe<Scalars['Float']['output']>;
};

export type TaskUpdateFilter = {
  and?: InputMaybe<Array<TaskUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  dayOfWeek?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskUpdateFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userName?: InputMaybe<StringFieldComparison>;
};

export type UpdateFieldInput = {
  acre?: InputMaybe<Scalars['String']['input']>;
  cordinates?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFileInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  filePath?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInventoryInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  fields?: InputMaybe<Array<UpdateFieldInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  storage?: InputMaybe<Scalars['String']['input']>;
  storages?: InputMaybe<Array<UpdateStorageInput>>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateManyFilesInput = {
  /** Filter used to find fields to update */
  filter: FileUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateFileInput;
};

export type UpdateManyInventoriesInput = {
  /** Filter used to find fields to update */
  filter: InventoryUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateInventoryInput;
};

export type UpdateManyProductionsInput = {
  /** Filter used to find fields to update */
  filter: ProductionUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProductionInput;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int']['output'];
};

export type UpdateManyStoragesInput = {
  /** Filter used to find fields to update */
  filter: StorageUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateStorageInput;
};

export type UpdateManyTasksInput = {
  /** Filter used to find fields to update */
  filter: TaskUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateTaskInput;
};

export type UpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: UserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateUserInput;
};

export type UpdateOneFieldSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: FieldSubscriptionFilter;
};

export type UpdateOneFileInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateFileInput;
};

export type UpdateOneInventoryInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateInventoryInput;
};

export type UpdateOneProductionInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateProductionInput;
};

export type UpdateOneStorageInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateStorageInput;
};

export type UpdateOneTaskInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateTaskInput;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateUserInput;
};

export type UpdateProductionInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  fields?: InputMaybe<Array<UpdateFieldInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStorageInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTaskInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  dayOfWeek?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  CPF?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<RoleInput>>;
  telephone?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  CPF?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  roles: Array<RoleInputDto>;
  telephone?: Maybe<Scalars['String']['output']>;
};


export type UserRolesArgs = {
  filter?: RoleInputDtoFilter;
  sorting?: Array<RoleInputDtoSort>;
};

export type UserAggregateGroupBy = {
  __typename?: 'UserAggregateGroupBy';
  CPF?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  telephone?: Maybe<Scalars['String']['output']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  CPF?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  telephone?: Maybe<Scalars['Int']['output']>;
};

export type UserDeleteFilter = {
  CPF?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<UserDeleteFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserDeleteFilter>>;
  telephone?: InputMaybe<StringFieldComparison>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  CPF?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  telephone?: Maybe<Scalars['String']['output']>;
};

export type UserFilter = {
  CPF?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<UserFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  roles?: InputMaybe<UserFilterRoleInputDtoFilter>;
  telephone?: InputMaybe<StringFieldComparison>;
};

export type UserFilterRoleInputDtoFilter = {
  and?: InputMaybe<Array<UserFilterRoleInputDtoFilter>>;
  name?: InputMaybe<RolesEnumFilterComparison>;
  or?: InputMaybe<Array<UserFilterRoleInputDtoFilter>>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  CPF?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  telephone?: Maybe<Scalars['String']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  CPF?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  telephone?: Maybe<Scalars['String']['output']>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  Cpf = 'CPF',
  Email = 'email',
  Name = 'name',
  Telephone = 'telephone'
}

export type UserUpdateFilter = {
  CPF?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<UserUpdateFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserUpdateFilter>>;
  telephone?: InputMaybe<StringFieldComparison>;
};

export type LoginMutationVariables = Exact<{
  data: AuthInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'AuthType', token: string, user: { __typename?: 'User', id: string, name: string, roles: Array<{ __typename?: 'RoleInputDTO', id: string, name?: RolesEnum | null }> } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, name: string, email: string } };

export type MeFieldsFragment = { __typename?: 'User', id: string, name: string, email: string };

export type GetUsersQueryVariables = Exact<{
  filter: UserFilter;
  paging?: InputMaybe<OffsetPaging>;
}>;


export type GetUsersQuery = { __typename?: 'Query', users: { __typename?: 'UserConnection', nodes: Array<{ __typename?: 'User', id: string, name: string, CPF?: string | null }> } };

export type CreateOneTaskMutationVariables = Exact<{
  input: CreateOneTaskInput;
}>;


export type CreateOneTaskMutation = { __typename?: 'Mutation', createOneTask: { __typename?: 'Task', id: string } };

export type UpdateOneTaskMutationVariables = Exact<{
  input: UpdateOneTaskInput;
}>;


export type UpdateOneTaskMutation = { __typename?: 'Mutation', updateOneTask: { __typename?: 'Task', id: string } };

export type DeleteOneTaskMutationVariables = Exact<{
  input: DeleteOneTaskInput;
}>;


export type DeleteOneTaskMutation = { __typename?: 'Mutation', deleteOneTask: { __typename?: 'TaskDeleteResponse', id?: string | null } };

export type GetTasksQueryVariables = Exact<{
  filter: TaskFilter;
  sorting: Array<TaskSort> | TaskSort;
  paging?: InputMaybe<OffsetPaging>;
}>;


export type GetTasksQuery = { __typename?: 'Query', tasks: { __typename?: 'TaskConnection', nodes: Array<{ __typename?: 'Task', id: string, date: any, createdAt: any, title: string, description: string, dayOfWeek?: number | null }> } };

export const MeFieldsFragmentDoc = gql`
    fragment MeFields on User {
  id
  name
  email
}
    `;
export const LoginDocument = gql`
    mutation login($data: AuthInput!) {
  loginUser(data: $data) {
    user {
      id
      name
      roles {
        id
        name
      }
    }
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    ...MeFields
  }
}
    ${MeFieldsFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const GetUsersDocument = gql`
    query getUsers($filter: UserFilter!, $paging: OffsetPaging) {
  users(filter: $filter, paging: $paging) {
    nodes {
      id
      name
      CPF
    }
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables> & ({ variables: GetUsersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const CreateOneTaskDocument = gql`
    mutation createOneTask($input: CreateOneTaskInput!) {
  createOneTask(input: $input) {
    id
  }
}
    `;
export type CreateOneTaskMutationFn = Apollo.MutationFunction<CreateOneTaskMutation, CreateOneTaskMutationVariables>;

/**
 * __useCreateOneTaskMutation__
 *
 * To run a mutation, you first call `useCreateOneTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneTaskMutation, { data, loading, error }] = useCreateOneTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneTaskMutation, CreateOneTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneTaskMutation, CreateOneTaskMutationVariables>(CreateOneTaskDocument, options);
      }
export type CreateOneTaskMutationHookResult = ReturnType<typeof useCreateOneTaskMutation>;
export type CreateOneTaskMutationResult = Apollo.MutationResult<CreateOneTaskMutation>;
export type CreateOneTaskMutationOptions = Apollo.BaseMutationOptions<CreateOneTaskMutation, CreateOneTaskMutationVariables>;
export const UpdateOneTaskDocument = gql`
    mutation updateOneTask($input: UpdateOneTaskInput!) {
  updateOneTask(input: $input) {
    id
  }
}
    `;
export type UpdateOneTaskMutationFn = Apollo.MutationFunction<UpdateOneTaskMutation, UpdateOneTaskMutationVariables>;

/**
 * __useUpdateOneTaskMutation__
 *
 * To run a mutation, you first call `useUpdateOneTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneTaskMutation, { data, loading, error }] = useUpdateOneTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneTaskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneTaskMutation, UpdateOneTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneTaskMutation, UpdateOneTaskMutationVariables>(UpdateOneTaskDocument, options);
      }
export type UpdateOneTaskMutationHookResult = ReturnType<typeof useUpdateOneTaskMutation>;
export type UpdateOneTaskMutationResult = Apollo.MutationResult<UpdateOneTaskMutation>;
export type UpdateOneTaskMutationOptions = Apollo.BaseMutationOptions<UpdateOneTaskMutation, UpdateOneTaskMutationVariables>;
export const DeleteOneTaskDocument = gql`
    mutation deleteOneTask($input: DeleteOneTaskInput!) {
  deleteOneTask(input: $input) {
    id
  }
}
    `;
export type DeleteOneTaskMutationFn = Apollo.MutationFunction<DeleteOneTaskMutation, DeleteOneTaskMutationVariables>;

/**
 * __useDeleteOneTaskMutation__
 *
 * To run a mutation, you first call `useDeleteOneTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneTaskMutation, { data, loading, error }] = useDeleteOneTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneTaskMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneTaskMutation, DeleteOneTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneTaskMutation, DeleteOneTaskMutationVariables>(DeleteOneTaskDocument, options);
      }
export type DeleteOneTaskMutationHookResult = ReturnType<typeof useDeleteOneTaskMutation>;
export type DeleteOneTaskMutationResult = Apollo.MutationResult<DeleteOneTaskMutation>;
export type DeleteOneTaskMutationOptions = Apollo.BaseMutationOptions<DeleteOneTaskMutation, DeleteOneTaskMutationVariables>;
export const GetTasksDocument = gql`
    query getTasks($filter: TaskFilter!, $sorting: [TaskSort!]!, $paging: OffsetPaging) {
  tasks(filter: $filter, sorting: $sorting, paging: $paging) {
    nodes {
      id
      date
      createdAt
      title
      description
      dayOfWeek
    }
  }
}
    `;

/**
 * __useGetTasksQuery__
 *
 * To run a query within a React component, call `useGetTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useGetTasksQuery(baseOptions: Apollo.QueryHookOptions<GetTasksQuery, GetTasksQueryVariables> & ({ variables: GetTasksQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
      }
export function useGetTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTasksQuery, GetTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
        }
export function useGetTasksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTasksQuery, GetTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
        }
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>;
export type GetTasksLazyQueryHookResult = ReturnType<typeof useGetTasksLazyQuery>;
export type GetTasksSuspenseQueryHookResult = ReturnType<typeof useGetTasksSuspenseQuery>;
export type GetTasksQueryResult = Apollo.QueryResult<GetTasksQuery, GetTasksQueryVariables>;