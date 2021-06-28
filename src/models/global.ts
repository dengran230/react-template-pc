export interface IGlobalModelState {}

export interface IGlobalModel {
  namespace: 'global';
  state: IGlobalModelState;
  effects: {};
  reducers: {};
}

const GlobalModel: IGlobalModel = {
  namespace: 'global',

  state: {},
  effects: {},
  reducers: {},
};

export default GlobalModel;
