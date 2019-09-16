import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN' // element-ui lang
import elementEsLocale from 'element-ui/lib/locale/lang/es' // element-ui lang
import enLocale from './en'
import zhLocale from './zh'
import esLocale from './es'

// 通过插件的形式挂载
Vue.use(VueI18n)

// https://element.eleme.cn/2.0/#/zh-CN/component/i18n#an-xu-jia-zai-li-ding-zhi-i18n
const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  es: {
    ...esLocale,
    ...elementEsLocale
  }
}

export function getLanguage() {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage

  // 如果不选择语言
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'en'
}

const i18n = new VueI18n({
  // 设置语言标识
  locale: getLanguage(),
  // 设置语言标识信息
  messages,
  // 解决控制台出现警告的问题
  silentTranslationWarn: true
})

export default i18n
