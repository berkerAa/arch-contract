import {ResourceSqlBaseEntityProtocol} from "../resource.sql.base.entity.protocol";

export interface ResourceEnumSqlEntityProtocol extends ResourceSqlBaseEntityProtocol {
  EnumValue: string;
}