import { ChainId, ERC20Token } from '@pancakeswap/sdk'

export const CAKE_MAINNET = new ERC20Token(
  ChainId.BSC,
  '0xF79f289F3d5Ab752D57666B96Cb3BD57b0E3C6F3',
  18,
  'BEX',
  'BUTANEX',
  'https://dapp-frontend-prince.web.app/',
)

export const CAKE_BBC_MAINNET = new ERC20Token(
  ChainId.BBC,
  '0xF79f289F3d5Ab752D57666B96Cb3BD57b0E3C6F3',
  18,
  'BEX',
  'BUTANEX',
  'https://dapp-frontend-prince.web.app/',
)

export const CAKE_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0x70360225dF3dC665c547b25Fc92916f7fAc642AD',
  18,
  'BEX',
  'BUTANEX',
  'https://dapp-frontend-prince.web.app/',
)

export const USDC_BSC = new ERC20Token(
  ChainId.BSC,
  '0x92764be298C0549389bb0b274E4563C4c6f4311c',
  18,
  'GUSD',
  'GUSD',
  'https://butanex.cryptosnowprince.com',
)

export const USDC_BBC_BSC = new ERC20Token(
  ChainId.BBC,
  '0x92764be298C0549389bb0b274E4563C4c6f4311c',
  18,
  'GUSD',
  'GUSD',
  'https://butanex.cryptosnowprince.com',
)

export const USDC_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0x64544969ed7EBf5f083679233325356EbE738930',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  6,
  'USDC',
  'USD Coin',
)

export const USDC_GOERLI = new ERC20Token(
  ChainId.GOERLI,
  '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
  6,
  'tUSDC',
  'test USD Coin',
)

export const USDT_BSC = new ERC20Token(
  ChainId.BSC,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

// export const BUSD_BSC = new ERC20Token(
//   ChainId.BSC,
//   '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
//   18,
//   'BUSD',
//   'Binance USD',
//   'https://www.paxos.com/busd/',
// )

export const BUSD_BSC = new ERC20Token(
  ChainId.BSC,
  '0x92764be298C0549389bb0b274E4563C4c6f4311c',
  18,
  'GUSD',
  'GUSD',
  'https://butanex.cryptosnowprince.com',
)

export const BUSD_BBC_BSC = new ERC20Token(
  ChainId.BBC,
  '0x92764be298C0549389bb0b274E4563C4c6f4311c',
  18,
  'GUSD',
  'GUSD',
  'https://butanex.cryptosnowprince.com',
)

export const BUSD_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_GOERLI = new ERC20Token(
  ChainId.GOERLI,
  '0xb809b9B2dc5e93CB863176Ea2D565425B03c0540',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD: Record<ChainId, ERC20Token> = {
  [ChainId.ETHEREUM]: BUSD_ETH,
  [ChainId.GOERLI]: BUSD_GOERLI,
  [ChainId.BSC]: BUSD_BSC,
  [ChainId.BBC]: BUSD_BBC_BSC,
  [ChainId.BSC_TESTNET]: BUSD_TESTNET,
}

export const CAKE = {
  [ChainId.BSC]: CAKE_MAINNET,
  [ChainId.BBC]: CAKE_BBC_MAINNET,
  [ChainId.BSC_TESTNET]: CAKE_TESTNET,
}

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.BBC]: USDC_BBC_BSC,
  [ChainId.BSC_TESTNET]: USDC_TESTNET,
  [ChainId.ETHEREUM]: USDC_ETH,
  [ChainId.GOERLI]: USDC_GOERLI,
}

export const USDT = {
  [ChainId.BSC]: USDT_BSC,
  [ChainId.ETHEREUM]: USDT_ETH,
}

export const WBTC_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC',
)
