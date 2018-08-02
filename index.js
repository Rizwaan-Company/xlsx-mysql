module.exports = (locationXLSXtoMYSQL, optionsXLSXtoMYSQL, waitT) => {
    var xlsx = require('node-xlsx');
    var fs = require('fs');
    var obj = xlsx.parse(locationXLSXtoMYSQL); // parses a file
    resulrt = ' ';

    for (var i = 0; i < obj.length; i++) {
        (function(i) {
            setTimeout(function() {
                delete rows;
                delete sheet;
                rows = [];
                sheet = obj[i];

                for (var j = 0; j < sheet['data'].length; j++) {

                    while (sheet['data'][j].length < sheet['data'][0].length) {
                        sheet['data'][j].push('');
                    }
                    while (sheet['data'][j].length > sheet['data'][0].length) {
                        sheet['data'][j].pop();
                    }
                    rows.push(sheet['data'][j]);

                }

                return csvPARxlsxmysql(optionsXLSXtoMYSQL.csv.delimiter, optionsXLSXtoMYSQL, i, obj.length);
            }, waitT * i);
        })(i);
    }
}

function csvPARxlsxmysql(delim, options, q, objL) {
    writeStr = "";
    for (var i = 0; i < rows.length; i++) {
        writeStr += rows[i].join(delim) + "\n";
    }
    var data = writeStr;


    options["table"] = sheet['name'];
    return upload(data, options, q, objL);
}

function upload(data, options, i, objL) {

    var cm = require('csv-mysql');
    cm.import(options, data, function(err, txt) {
        if (err) {
            resulrt += sheet['name'] + ":  " + err + ": " + txt + '\n\n';
        } else {
            resulrt += sheet['name'] + ":  " + 'Import completed\n\n';
        }
    })
    if (i == objL - 1) {
        return resulrt;
    }
}