# Create xlsx with multi worksheets and charts

### Create PPTX (only text for now)

#
Node.js excel chart builder

## Quick start

Install

```bash
npm install office-chart
```

Generate xlsx and write chart to file

```js

const gen = new XlsxGenerator();

await gen.createWorkbook();

const sheet1 = await gen.createWorksheet("sheet1");

const sheet2 = await gen.createWorkshee("sheetWithChart2";

await sheet2.addTable([['h', 'b', 'c', 'd'], ['label1', 2, 3, 4], ['label2', 5, 6, 7]]);

const opt: IData = {
            title: {
                name: 'testChart line',
                color: '8ab4f8',
                size: 5000
            },
            range: 'B1:D3',
            type: 'line',
            rgbColors: ['8ab4f8', 'ff7769'],
            labels: true, //table contains labels
            marker: {
                size: 4,
                shape: 'square'
            }
        }

await sheet2.addChart(opt)

const sheet3 = await gen.createWorksheet("sheet3");

await gen.generate(\_\_dirname + '/test', 'file');
// you can also generate buffer
```
#
 Generate ppt with slides and text
#

```js
const gen = new PptxGenetator();

await gen.createPresentation();

const slide = await gen.createSlide();

slide.addTitle("this is title", {
  x: "0",
  y: "0",
  color: "FF0000",
  size: 4000,
});

slide.addSubTitle("this is subtitle");

slide.addText("this is text", {
  color: "FF0000",
});

await gen.generate(__dirname + "/test10", "file");
```

#### This is an open source project, you can contribute by going to: https://github.com/adipeleg/office-chart.

#### currently only column, line, pie and scatter charts are supported.

#### Enjoy:)
