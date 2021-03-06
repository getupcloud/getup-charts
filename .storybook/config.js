import { configure } from '@kadira/storybook';
import '../src/components/index.css';

function loadStories() {
  require('../src/components/DetailedChart/story.js');
  require('../src/components/SummaryChart/story.js');
}

configure(loadStories, module);
