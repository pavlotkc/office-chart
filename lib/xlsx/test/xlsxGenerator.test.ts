import { XlsxGenerator } from './../xlsxGenerator';
describe('check xlsxGenerator', () => {
    it('', async () => {
        const gen = new XlsxGenerator();
        await gen.createWorkbook();
        const sheet1 = await gen.createWorksheet("sheet1");
        const sheet2 = await gen.createWorksheet("sheetWithChart2");
        await sheet2.addTable(getShotData());
        sheet2.addChart("A1:C3", 'testChart', 'line')
        const sheet3 = await gen.createWorksheet("sheet3");
        // sheet3.addTable(getLongData());
        const sheet4 = await gen.createWorksheet("sheet4");
        await gen.generate(__dirname + '/test7');
    })
})

const getLongData = () => {
    const data: any[][] = [];//[['h1', 'h2', 'h3']];
    for (let i = 0; i < 100000; i++) {
        data.push([i, i + 1, i + 2])
    }
    return data;
}
const getShotData = () => {
    return [[0, 1, 2], [1, 2, 3], [4, 5, 6]];
}
