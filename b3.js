for (var i = 0; i < 10; i++) {
    if (i === 5) {
        console.log(i + ' is skipped');
        continue;
    }
    console.log('i is now at: ' + i);
}
// continue use for only skipped purpus 