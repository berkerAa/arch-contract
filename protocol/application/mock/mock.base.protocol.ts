export interface MockBaseProtocol<Entity> {
  configureEntity: Partial<Entity>;
  _construct(): void;
  get(): Partial<Entity>

}