/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TotalAccountOrders
// ====================================================

export interface TotalAccountOrders_tokenOrders_payer {
  __typename: "User";
  id: string;
}

export interface TotalAccountOrders_tokenOrders_datatokenId {
  __typename: "Datatoken";
  id: string;
}

export interface TotalAccountOrders_tokenOrders {
  __typename: "TokenOrder";
  payer: TotalAccountOrders_tokenOrders_payer;
  datatokenId: TotalAccountOrders_tokenOrders_datatokenId;
}

export interface TotalAccountOrders {
  tokenOrders: TotalAccountOrders_tokenOrders[];
}

export interface TotalAccountOrdersVariables {
  datatokenId_in?: string[] | null;
}
