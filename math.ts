import * as Decimal from 'decimal.js';

class Math {
  static add(a: number, b: number): number {
    const decimalA = new Decimal(a);
    const decimalB = new Decimal(b);
    return decimalA.add(decimalB).toNumber();
  }

  static subtract(a: number, b: number): number {
    const decimalA = new Decimal(a);
    const decimalB = new Decimal(b);
    return decimalA.sub(decimalB).toNumber();
  }

  static multiply(a: number, b: number): number {
    const decimalA = new Decimal(a);
    const decimalB = new Decimal(b);
    return decimalA.mul(decimalB).toNumber();
  }

  static divide(a: number, b: number): number {
    const decimalA = new Decimal(a);
    const decimalB = new Decimal(b);
    return decimalA.div(decimalB).toNumber();
  }
}
