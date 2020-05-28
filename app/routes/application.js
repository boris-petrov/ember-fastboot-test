import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class extends Route {
  model() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('resolving model');
        resolve(true);
      }, 500);
    });
  }

  afterModel() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('resolving afterModel');
        resolve();
      }, 1000);
    });
  }
}
