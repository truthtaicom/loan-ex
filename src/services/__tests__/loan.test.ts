
jest.mock("../loan.json", () => ([{ a: 1}]))

import { getLoadApi } from '../loan';

describe('<getLoadApi /> spec', () => {
  it('returns data', async () => {
    const data = await getLoadApi()
    expect(data).toEqual([{ a: 1}])
  });
});