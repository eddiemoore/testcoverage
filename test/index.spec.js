/* global describe, it */
import { expect } from 'chai'
import myFunction, { wait, getStuff } from '../src'

describe('My pointless function', () => {
  it('should return true', () => {
    expect(myFunction()).to.be.true
  })
})

describe('wait', () => {
  it('should resolve the promise', done => {
    wait().then(res => {
      expect(res).to.be.true
      done()
    })
  })
})

describe('getStuff', () => {
  it('should get some json', done => {
    getStuff().then(res => {
      expect(res).to.have.keys(['country'])
      done()
    })
  })
})
