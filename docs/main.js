import 'normalize-css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { format, mergeDocs } from './docs-formatter';

// require the docs file which contains all the information
const docs = require('!!./docs-loader!../src/vue-tagged-input.js');

// we require the props file extra and merge it later,
// then the webpack "browser reload on file change" works with this file, too
const props = require('!!./docs-loader!../src/vue-tagged-input.props.js');

const merged = mergeDocs(props, docs);
window.docs = format(merged);

const app = createApp(App);

app.use(router);
app.mount('#app-container');
