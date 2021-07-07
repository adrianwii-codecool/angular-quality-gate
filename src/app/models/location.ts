export class Location {
  constructor(
    public longitude: number,
    public latitude: number,
  ) {}

  toString(): string {
    return `${this.longitude}; ${this.latitude}`;
  }
}
