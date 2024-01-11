import {PostgreSqlBaseEntityProtocol} from "../postgre.sql.base.entity.protocol";

export interface ConfirmationSqlBaseEntityProtocol extends PostgreSqlBaseEntityProtocol {
  ExpirationDate: Date;
  ConfirmationDate: Date;
  ConfirmationStateId: number;
}