import {PostgreSqlBaseEntityProtocol} from "../postgre.sql.base.entity.protocol";

export interface ReverseEnumSqlBaseEntityProtocol extends PostgreSqlBaseEntityProtocol {
  EnumId: number;
}