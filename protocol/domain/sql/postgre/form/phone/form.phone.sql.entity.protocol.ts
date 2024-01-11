import {FormSqlBaseEntityProtocol} from "../form.sql.base.entity.protocol";

export interface FormPhoneSqlEntityProtocol extends FormSqlBaseEntityProtocol {
  CountryCode: string;
  NationalDestinationCode: string;
  SubscriberNumber: string;
}