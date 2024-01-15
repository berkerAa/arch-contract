export interface MockBaseProtocol<Entity> {
  config: unknown;
  configureEntity: Partial<Entity>;
  _construct(): void;
  get(): Partial<Entity>
}