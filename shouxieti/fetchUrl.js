var urls = [
  "https://www.fastmock.site/mock/be5b8745c993b78e7f79b22687515557/mockdata/get/weixin/service",
  "https://www.fastmock.site/mock/be5b8745c993b78e7f79b22687515557/mockdata/interaction/page",
  "https://www.fastmock.site/mock/be5b8745c993b78e7f79b22687515557/mockdata/living/appointment",
  "https://www.fastmock.site/mock/be5b8745c993b78e7f79b22687515557/mockdata/get/shopgrantlist",
  "https://www.fastmock.site/mock/be5b8745c993b78e7f79b22687515557/mockdata/api/importstatus",
  "https://www.fastmock.site/mock/be5b8745c993b78e7f79b22687515557/mockdata/get/weixin/service",
  "https://www.fastmock.site/mock/be5b8745c993b78e7f79b22687515557/mockdata/interaction/page",
  "https://www.fastmock.site/mock/be5b8745c993b78e7f79b22687515557/mockdata/living/appointment",
  "https://www.fastmock.site/mock/be5b8745c993b78e7f79b22687515557/mockdata/get/shopgrantlist",
  "https://www.fastmock.site/mock/be5b8745c993b78e7f79b22687515557/mockdata/api/importstatus",
];
const limit = 5;

function fetchUrls(urls, limit) {
  if (!urls.length) {
    return [];
  }
  let result = [];
  return new Promise((resolve) => {
    const _send = (urls) =>
      fetch(urls.shift())
        .then((res) => {
          result.push(res);
          if (urls.length <= 0) {
            resolve(result);
          }
        })
        .finally(() => {
          if (urls.length) {
            _send(urls);
          }
        });
    const queue = [];
    while (limit--) {
      queue.push(_send(urls));
    }
    Promise.all(queue);
  });
}

fetchUrls(urls, limit).then((res) => {
  console.log(res);
});
