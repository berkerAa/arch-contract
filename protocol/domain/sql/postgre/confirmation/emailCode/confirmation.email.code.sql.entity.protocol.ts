import {ConfirmationSqlBaseEntityProtocol} from "../confirmation.sql.base.entity.protocol";

export interface ConfirmationEmailCodeSqlEntityProtocol extends ConfirmationSqlBaseEntityProtocol {
  CodeId: number;
  EmailId: number;
}