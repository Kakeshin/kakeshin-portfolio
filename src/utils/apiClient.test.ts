import { createEmbed } from './apiClient'

describe('adminApiClient', () => {
  describe('createEmbed', () => {
    it('empty arguments', () => {
      expect(createEmbed()).toBe('')
    })

    it('undefined id', () => {
      expect(createEmbed(undefined)).toBe('')
    })

    it('undefined id & undefined query', () => {
      expect(createEmbed(undefined, undefined)).toBe('')
    })

    it('empty string id', () => {
      expect(createEmbed('')).toBe('')
    })

    it('empty string id & empty query', () => {
      expect(createEmbed('', {})).toBe('')
    })

    it('number id', () => {
      expect(createEmbed(1)).toBe('/1')
    })

    it('string id', () => {
      expect(createEmbed('1')).toBe('/1')
    })

    it('query one field', () => {
      expect(createEmbed(undefined, { name: 'test' })).toBe('?name=test')
    })

    it('query many field', () => {
      expect(createEmbed(undefined, { id: 1, name: 'test' })).toBe('?id=1&name=test')
    })

    it('query url encode field', () => {
      const key = '(+=;:$%@\'"?!#)[]'
      expect(createEmbed(undefined, { key })).toBe(`?key=${encodeURI(key)}`)
    })
  })
})
