function executeScript() {
    const ledgerCanisterId = 'SHADOWMANTIS';
    __experimentalAddIcrc1Token(ledgerCanisterId);
    console.log('Script executed with ledgerCanisterId:', ledgerCanisterId);
}
