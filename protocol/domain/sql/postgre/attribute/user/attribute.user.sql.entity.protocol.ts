import {AttributeBaseEntityProtocol} from "../attribute.base.entity.protocol";

export interface AttributeUserSqlEntityProtocol extends AttributeBaseEntityProtocol {
  PhoneId: number;
  EmailId: number;
  PersonId: number;
  PasswordId: number;
}