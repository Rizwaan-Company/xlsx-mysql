const xlsx = require('node-xlsx');

const xlsxToMysql = (config) => {
    const xlsxFile = checkForFile(config.locationXLSXtoMYSQL);
    if (xlsxFile.error) {
        return xlsxFile;
    }
    resulrt = ' ';
    sheet = xlsxFile[0].name;
    rows = xlsxFile[0].data
    return csvPARxlsxmysql(config.optionsXLSXtoMYSQL.csv.delimiter, config.optionsXLSXtoMYSQL, 0, xlsxFile.length);
}

function csvPARxlsxmysql(delim, options, q, objL) {
    writeStr = "";
    for (var i = 0; i < rows.length; i++) {
        writeStr += rows[i].join(delim) + "\n";
    }
    var data = writeStr;


    return upload(data, options, q, objL);
}

function upload(data, options, i, objL) {
    var cm = require('csv-mysql');
    cm.import(options, data, function (err, txt) {
        if (err) {
            resulrt += sheet + ":  " + err + ": " + txt + '\n\n';
        } else {
            resulrt += sheet + ":  " + 'Import completed\n\n';
        }
    })
    if (i == objL - 1) {
        return {
            ok: true,
            message: 'file was successfully uploaded'
        };
    }
    else {
        return {
            ok: false,
            message: resulrt
        };
    }
}

function checkForFile(filePath) {
    try {
        return xlsx.parse(filePath); // parses a file;
    } catch (err) {
        return {
            error: true,
            message: `file in path ${err.path} not found`
        };
    }
}

module.exports = xlsxToMysql;