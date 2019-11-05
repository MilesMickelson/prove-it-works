const expect = require('chai').expect;
const assert = require('chai').assert;
const should = require('chai').should();
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
  let mortgage = null;

  beforeEach(() => {
    mortgage = new Mortgage(670000, 4.25, 15, 12);
  });

  it('should have a monthly payment function', () => {
    expect(mortgage.monthlyPayment).to.exist;
  });

  it('should calculate monthly mortgage payment correctly', () => {
    expect(mortgage.monthlyPayment()).to.equal('5040.27');
  });

  it('should not have monthly payment eqauting to 0', () => {
    expect(mortgage.monthlyPayment()).to.not.equal('0');
  });

  it('should not have monthly payment eqauting to false', () => {
    expect(mortgage.monthlyPayment()).to.not.equal('false');
  });

  it('should not have monthly payment eqauting to false', () => {
    expect(mortgage.monthlyPayment()).to.not.be.undefined;
  })

  it('should not have a monthly payment eqauting to null', () => {
    expect(mortgage.monthlyPayment()).to.not.be.null;
  })
});

