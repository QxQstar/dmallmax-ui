/**
 * 下载文件
 * @param url API地址
 * @param method 方法
 * @param param 下载需要传的参数
 */
export default function downLoad (url,method='get',param = {}) {
  const form = document.createElement('form');
  form.style.display = 'none';
  form.method = method;
  form.action = url;
  const download_form = document.createElement('div');
  download_form.style.display = 'none';
  document.body.appendChild(download_form);
  const fragment = document.createDocumentFragment();
  for (const key in param) {
    if(param.hasOwnProperty(key)) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = param[key];
      fragment.appendChild(input);
    }
  }
  form.appendChild(fragment);
  download_form.appendChild(form);
  form.submit();

  document.body.removeChild(download_form);

}
