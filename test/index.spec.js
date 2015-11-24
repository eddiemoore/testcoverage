/* global describe, it */
import { expect } from 'chai'
import myFunction from '../src'

describe('My pointless function', () => {
  it('should return true', () => {
    expect(myFunction()).to.be.true
  })
})
