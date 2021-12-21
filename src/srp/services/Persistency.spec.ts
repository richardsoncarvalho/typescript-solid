import { Persistency } from "./Persistency";

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks())

  it('shold return undefined', () => {
    const sut = new Persistency();

    expect(sut.saveOrder()).toBeUndefined()
  })

  it('shold call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  })

  it('shold call console.log with "Salvo com sucesso..."', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Salvo com sucesso...');
  })
})
