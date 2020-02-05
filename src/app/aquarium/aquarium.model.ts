export class Aquarium {
  private _aquairumId: number;
  private _name: string;
  private _type: string;
  private _gallon: number;
  private _notes: string;
  private _date: Date;

  constructor(
    aquairumId: number,
    name: string,
    type: string,
    gallon: number,
    notes: string,
    date: Date
  ) {
    this._aquairumId = aquairumId;
    this._name = name;
    this._type = type;
    this._gallon = gallon;
    this._notes = notes;
    this._date = date;
  }
  /**
   * Getter aquairumId
   * @return {number}
   */
  public get aquairumId(): number {
    return this._aquairumId;
  }

  /**
   * Setter aquairumId
   * @param {number} value
   */
  public set aquairumId(value: number) {
    this._aquairumId = value;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Getter type
   * @return {string}
   */
  public get type(): string {
    return this._type;
  }

  /**
   * Setter type
   * @param {string} value
   */
  public set type(value: string) {
    this._type = value;
  }

  /**
   * Getter gallon
   * @return {number}
   */
  public get gallon(): number {
    return this._gallon;
  }

  /**
   * Setter gallon
   * @param {number} value
   */
  public set gallon(value: number) {
    this._gallon = value;
  }

  /**
   * Getter notes
   * @return {string}
   */
  public get notes(): string {
    return this._notes;
  }

  /**
   * Setter notes
   * @param {string} value
   */
  public set notes(value: string) {
    this._notes = value;
  }

  /**
   * Getter date
   * @return {Date}
   */
  public get date(): Date {
    return this._date;
  }

  /**
   * Setter date
   * @param {Date} value
   */
  public set date(value: Date) {
    this._date = value;
  }
}
