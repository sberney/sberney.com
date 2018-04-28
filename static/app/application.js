import template from './template.html!';

export const render = container => {
  container.innerHTML = template({});
};
