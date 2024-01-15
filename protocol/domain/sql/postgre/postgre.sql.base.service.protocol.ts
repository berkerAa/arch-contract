export interface PostgreSqlBaseServiceProtocol {
  getRepository(): unknown;
  setRepository(repository: {}): void;
  createQueryBuilder(alias: string): unknown;
  getQueryRunner(): unknown;
}