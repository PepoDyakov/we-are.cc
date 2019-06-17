import getDeep from './getDeep';

export default res => {
  const seo = getDeep(res, 'fields.seo.fields') || {};
  const page = res.fields;
  if (page.title && !seo.title) {
    seo.title = page.title;
  }
  if (page.description && !seo.description) {
    seo.description = page.description;
  }
  return seo;
};
