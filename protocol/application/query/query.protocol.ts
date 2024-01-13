import {PostgreSqlBaseServiceProtocol} from "../../domain/sql/postgre/postgre.sql.base.service.protocol";

export interface QueryProtocol{
  getService(): PostgreSqlBaseServiceProtocol;
}