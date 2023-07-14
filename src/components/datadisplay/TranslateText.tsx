import React, { FC } from 'react'
import { Text, TypographyProps } from '@chakra-ui/react'
import { I18n, Options } from '@/i18n'
import { useTranslate } from '@/hooks'

type Props = {
  source: I18n
  options?: Options
} & TypographyProps

export const TranslateText: FC<Props> = ({ source, options, ...rest }) => {
  const { translate } = useTranslate()
  return <Text {...rest}>{translate(source, options)}</Text>
}
