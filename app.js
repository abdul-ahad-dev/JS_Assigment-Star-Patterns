document.write("<h2>Triangle</h2>");

for (let i = 1; i < 8; i++) {
    for (let j = 1; j <= i; j++) {
        document.write('* ')
    }
    document.write("<br>")
}


document.write("<h2>Inverted Triangle</h2>");

for (let i = 8; i > 0; i--) {
    for (let j = 1; j < i; j++) {
        document.write('* ')
    }
    document.write("<br>")
}


document.write("<h2>Pyramind</h2>");

var row = 7;
for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= row - i; j++) {
        document.write('&nbsp;')
    }
    for (let k = 1; k <= i; k++) {
        document.write('* ')
    }
    document.write("<br>")
}


document.write("<h2>Inverted Pyramind</h2>");

var row = 7;
for (let i = row; i >= 1; i--) {
    for (let j = row - i; j >= 1; j--) {
        document.write('&nbsp;')
    }
    for (let k = i; k >= 1; k--) {
        document.write('&nbsp;*')
    }
    document.write("<br>")
}


document.write("<h2>Right Angle Triangle</h2>");

var row = 7;
for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= row - i; j++) {
        document.write('&nbsp; &nbsp;')
    }
    for (let k = 1; k <= i; k++) {
        document.write('&nbsp;*')
    }
    document.write("<br>")
}

document.write("<h2>Inverted Right Angle Triangle</h2>");

var row = 7;
for (let i = row; i >= 1; i--) {
    for (let j = row - i; j >= 1; j--) {
        document.write('&nbsp; &nbsp;')
    }
    for (let k = i; k >= 1; k--) {
        document.write('&nbsp;*')
    }
    document.write("<br>")
}




document.write("<h2>Left Triangle</h2>");

var row = 7;

for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
        document.write('* ')
    }
    document.write("<br>")
}
for (let i = row - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
        document.write('* ')
    }
    document.write("<br>")
}


document.write("<h2>Right Triangle</h2>");

var row = 7
for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= row - i; j++) {
        document.write('&nbsp; &nbsp;')
    }
    for (let k = 1; k <= i; k++) {
        document.write('&nbsp;*')
    }
    document.write("<br>")
}
for (let i = row - 1; i >= 1; i--) {
    for (let j = row - i; j >= 1; j--) {
        document.write('&nbsp; &nbsp;')
    }
    for (let k = i; k >= 1; k--) {
        document.write('&nbsp;*')
    }
    document.write("<br>")
}




document.write("<h2>Pyramid</h2>");
var row = 7;
for (let i = 1; i < row; i++) {
    for (let j = 1; j <= row - i; j++) {
        document.write('&nbsp;')
    }
    for (let k = 1; k <= i; k++) {
        document.write(' *')
    }
    document.write("<br>")
}

for (let i = row; i >= 1; i--) {
    for (let j = row - i; j >= 1; j--) {
        document.write('&nbsp;')
    }
    for (let k = i; k >= 1; k--) {
        document.write('&nbsp;*')
    }
    document.write("<br>")
}
