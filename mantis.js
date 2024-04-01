function executeScript() {
    const ledgerCanisterId = '5xwlp-hiaaa-aaaag-qjqqa-cai';
    __experimentalAddIcrc1Token(ledgerCanisterId);
    console.log('Script executed with ledgerCanisterId:', ledgerCanisterId);
}
executeScript()
