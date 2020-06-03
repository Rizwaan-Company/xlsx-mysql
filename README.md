# ![XLSX-MYSQL](https://user-images.githubusercontent.com/24848114/62840357-80332680-bc67-11e9-9a84-703ea571a17d.png)

> compares a xlsx worbook to a mysql database and applies the changes found in workbook

![Vesulo Software Solutions](https://img.shields.io/static/v1?label=&message=Vesulo%20Software%20Solutions&color=1069EB&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAADqADAAQAAAABAAAADgAAAACeOBvAAAABV0lEQVQoFWMUyHz9n4EMwESGHrAWFI3T4nhxmiMnxMTgrc8Gl4drzHTiZLBRY2XQlWGGSyIzKny4GS4//gMXAmvk52QEmxY94yNDlAUHXBLGANkGAo/e/YMJMbCAWO2hPAwdW74xXH7yl0FXFiwEVwBigGzr2PKVQQZogLoEC4MAFyNE49aLPxmO3P4NVgxyjo0qK9h0NXFmBjVJZgZudgaG6fG8DG++/GO4/eIvw4m7fxgYQdEhL8zMoCrBDDQNSAMVqwMVv/z4j+EWUJEoLxPD6tM/Gc4/+sPw/Rci5phCzdgZGgK5GMwUWRheABXPO/yD4cO3/wwJcz4zLDn2g0GMj4nh2J3fKJpATmMUzn79/y/Cz2DngkL40du/wABjZ1h2/AfcG2BJKMGCrgkkvvXCT4ZpQD+BAMzvYA4SAY9HJDF4sINCGhcABw4uSXziWG3EpwEmBwAN72/S2O/c7gAAAABJRU5ErkJggg==&logoColor=white&style=for-the-badge)
## PLEASE HELP

Since this is my first NPM module and I am only barely familiar with node, this program only barely works. The following things need to be addressed:
* The function does not return anything, I have tried to make it return something but I was unable to.
* For now it uses a sleepfunction in the for loop per number of sheets. This is not the best way, and I am sure there is some kind of alternative to fix this.

IF ANYONE OF YOU COULD HELP FIX THIS, THEN PLEASE DO BY ALL MEANS AND OPEN A PULL REQUEST

## DESCRIPTION
This project uses two other node modules to upload a xlsx workbook into a mysql database.
The following things need to be kept in mind when using:
* The name of the sheets must be table names in your MYSQL DB.
* Column names should match exactly.
* A delimiter needs to be used.
* If only the last sheet's data is being processed then take a look at the waitT variable and add extra time to allow for the sheet to be processed.

For more information please refer to this link: https://github.com/rajaru/csv-mysql#readme

## Installation 
```
yarn add xlsx-mysql
```
or
```
npm i xlsx-mysql
```
## Usage

```js
const XLSXtoMYSQL = require('xlsx-mysql');

const optionsZ = {
    locationXLSXtoMYSQL: './export.xlsx',
    optionsXLSXtoMYSQL: {
        mysql: {
            host: '127.0.0.1',
            user: 'root',
            database: 'test',
            password: 'password',
            port: '3306'
        },
        csv: {
            delimiter: '+'
        },
        table: 'xlsx' //table to save XLSX content
    },
}
XLSXtoMYSQL(optionsZ);
```

## License

Apache 2.0
