function getUrl(expression) {
  switch (expression) {
    case 'gitProfile':
      window.open('https://https://github.com/Jacreator', '_blank');
      break;
    case 'gitRepos1':
      window.open(
        'https://github.com/Jacreator/Solidity_Buy_And_Sell_Coin',
        '_blank',
      );
      break;
    case 'gitRepos2':
      window.open(
        'https://github.com/Jacreator/FlutterWave-Charge-card',
        '_blank',
      );
      break;
    default:
      window.open('https://linkedin.com/in/jacreator', '_blank');
  }
}
