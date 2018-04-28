/*
  Lodash template plugin
*/
import _ from 'lodash';
export function translate(load) {
  load.metadata.format = 'amd';
  return 'def' + 'ine(["lodash"], function(_) {\nreturn ' + _.template(load.source) + ';\n});';
}
