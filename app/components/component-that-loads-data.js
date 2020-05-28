import Component from '@ember/component';

export default class extends Component {
  init() {
    super.init(...arguments);
    console.log('component-that-loads-data');
  }
}
