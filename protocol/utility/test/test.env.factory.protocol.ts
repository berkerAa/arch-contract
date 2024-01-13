export interface TestEnvFactoryProtocol<MockGeneratorType, TargetTestObjectType, TargetParentEntityType, ORMQueryType>{
  generator: MockGeneratorType;
  generatedEntity: TargetParentEntityType;
  testObject: TargetTestObjectType;
  queryInstance: ORMQueryType;
  connectDependencies2Transition(testObjectDependencyList: Array<{}>,): void;
}