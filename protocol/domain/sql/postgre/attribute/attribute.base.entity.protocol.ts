import {PostgreSqlBaseEntityProtocol} from "../postgre.sql.base.entity.protocol";

export interface AttributeBaseEntityProtocol extends PostgreSqlBaseEntityProtocol {
  AttributeStateId: number;
}