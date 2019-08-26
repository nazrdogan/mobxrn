import {observable} from 'mobx';
class ObservableStore {
  @observable property = 'Testing';
}
const observableStore = new ObservableStore();
export default observableStore;
