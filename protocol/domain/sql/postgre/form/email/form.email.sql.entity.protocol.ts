import {FormSqlBaseEntityProtocol} from "../form.sql.base.entity.protocol";

export interface FormEmailSqlEntityProtocol extends FormSqlBaseEntityProtocol {
  LocalPart: string;
  DomainPart: string;
}
