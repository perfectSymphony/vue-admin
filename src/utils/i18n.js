// translate router.meta.title, be used in breadcrumb sidebar tagsview
export function generateTitle(title) {
  // $te 这个方法是vue-i18n里面提供的，在保证正确挂载vue根实例上面
  const hasKey = this.$te('route.' + title)

  if (hasKey) {
    // $t :this method from vue-i18n, inject in @/lang/index.js
    const translatedTitle = this.$t('route.' + title)

    return translatedTitle
  }
  return title
}
