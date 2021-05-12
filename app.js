

let friends = ["Tom", "John", "Bobby", "Tina", "Mary"];

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i])
}
loop1:
for (count = 99; count >= 1; count--) {
    let lines;
    if (count == 1) {
        lines = 'line';
    }
    else {
        lines = 'lines';
    }
    console.log(count + ` ${lines} of code in my file.`);
    if (count < 99) {
        console.log("");
        console.log("Tom:" + count + ` ${lines} of code in my file,`);
    }
    console.log(count + ` ${lines} of cooode.`);
    console.log("Stand up and shout,");
    console.log('"Comment one out!"');
    if (count == 1) {
        console.log("No more lines of code in my file.");
        console.log(loop2);
    }
}

loop2:
for (count = 99; count >= 1; count--) {
    let lines;
    if (count == 1) {
        lines = 'line';
    }
    else {
        lines = 'lines';
    }
    console.log(count + ` ${lines} of code in my file.`);
    if (count < 99) {
        console.log("");
        console.log("John:" + count + ` ${lines} of code in my file,`);
    }
    console.log(count + ` ${lines} of cooode.`);
    console.log("Stand up and shout,");
    console.log('"Comment one out!"');
    if (count == 1) {
        console.log("No more lines of code in my file.");
        console.log(loop3);
    }
}
loop3:
for (count = 99; count >= 1; count--) {
    let lines;
    if (count == 1) {
        lines = 'line';
    }
    else {
        lines = 'lines';
    }
    console.log(count + ` ${lines} of code in my file.`);
    if (count < 99) {
        console.log("");
        console.log("Bobby:" + count + ` ${lines} of code in my file,`);
    }
    console.log(count + ` ${lines} of cooode.`);
    console.log("Stand up and shout,");
    console.log('"Comment one out!"');
    if (count == 1) {
        console.log("No more lines of code in my file.");
        console.log(loop4);
    }
}
loop4:
for (count = 99; count >= 1; count--) {
    let lines;
    if (count == 1) {
        lines = 'line';
    }
    else {
        lines = 'lines';
    }
    console.log(count + ` ${lines} of code in my file.`);
    if (count < 99) {
        console.log("");
        console.log("Tina:" + count + ` ${lines} of code in my file,`);
    }
    console.log(count + ` ${lines} of cooode.`);
    console.log("Stand up and shout,");
    console.log('"Comment one out!"');
    if (count == 1) {
        console.log("No more lines of code in my file.");
        console.log(loop5);
    }
}
loop5:
for (count = 99; count >= 1; count--) {
    let lines;
    if (count == 1) {
        lines = 'line';
    }
    else {
        lines = 'lines';
    }
    console.log(count + ` ${lines} of code in my file.`);
    if (count < 99) {
        console.log("");
        console.log("Mary:" + count + ` ${lines} of code in my file,`);
    }
    console.log(count + ` ${lines} of cooode.`);
    console.log("Stand up and shout,");
    console.log('"Comment one out!"');
    if (count == 1) {
        console.log("No more lines of code in my file.");
        break loop5;
    }
}

// /**/let lines;
for (count = 99; count >= 1; count --) 
{
    if (count == 1) {
        lines = 'line';
    } 
    else {
        lines = 'lines';
    }
    console.log(count+` ${lines} of code in my file.`);
    if (count < 99) {
        console.log("");        
        console.log(count+` ${lines} of code in my file,`);
    }
console.log(count+` ${lines} of cooode.`);
    console.log("Stand up and shout,");
    console.log('"Comment one out!"');
    if (count == 1) {
        console.log("No more lines of code in my file.");
    }
}