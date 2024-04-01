function executeScript() {
    const ledgerCanisterId = 'iozql-7iaaa-aaaah-advvq-cai';
    __experimentalAddIcrc1Token(ledgerCanisterId);
    console.log('Script executed with ledgerCanisterId:', ledgerCanisterId);
}
executeScript()
