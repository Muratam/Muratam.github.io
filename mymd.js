'use strict';
(() => {
  let renderer = new marked.Renderer();
  renderer.image = (href, title, text) => {
    if (text === '') return `<img src="${href}" alt="${title}" >`
      return `<img src="${href}" alt="${title}"  style="height:${text}em;width:${text}em;">`
  };
  marked.setOptions({renderer: renderer});
  $.get('./index.md', (data) => {
    $('#markdown-text')[0].innerHTML = marked(data);
  }, 'text');
}).call(this);