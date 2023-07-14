import { useTranslation } from 'react-i18next'
import { I18n, Options } from '@/i18n'

export const useTranslate = () => {
  const { t, i18n } = useTranslation()
  return {
    translate: (key: I18n, options?: Options): string => {
      return options ? t<I18n, Options, I18n>(key, options) : t<I18n, Options, I18n>(key)
    },
    translateAny: (key: string, options?: Options): string => {
      console.log(t(key))
      return options ? t(key, options) : t(key)
    },
    language: i18n.language,
    changeLanguage: i18n.changeLanguage,
  }
}
