import { Percent } from '@pancakeswap/swap-sdk-core'
import { ERC20Token } from './entities/token'

export enum ChainId {
  ETHEREUM = 1,
  GOERLI = 5,
  BBC = 23524,
  BSC = 23524,
  BSC_TESTNET = 97,
}

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

export const FACTORY_ADDRESS = '0x5e1100ea18F918a4e9AB70694c6c554e1E940D32'

const FACTORY_ADDRESS_ETH = '0x1097053Fd2ea711dad45caCcc45EfF7548fCB362'

export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  [ChainId.ETHEREUM]: FACTORY_ADDRESS_ETH,
  [ChainId.GOERLI]: FACTORY_ADDRESS_ETH,
  [ChainId.BSC]: FACTORY_ADDRESS,
  [ChainId.BBC]: FACTORY_ADDRESS,
  [ChainId.BSC_TESTNET]: '0x5d2eCA8d1c8e8c9b4fA4d15c406e2478e0C69C69',
}
export const INIT_CODE_HASH = '0xd98887021d75376dafdb646c25b876a78981a855513392f9e8e8fa51230c22d6'

const INIT_CODE_HASH_ETH = '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d'
export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.ETHEREUM]: INIT_CODE_HASH_ETH,
  [ChainId.GOERLI]: INIT_CODE_HASH_ETH,
  [ChainId.BBC]: INIT_CODE_HASH,
  [ChainId.BSC]: INIT_CODE_HASH,
  [ChainId.BSC_TESTNET]: '0xc11f39aa69195e7c9ac8628885e495421721f39d89133481f2036bf020300c95',
}

export const WETH9 = {
  [ChainId.ETHEREUM]: new ERC20Token(
    ChainId.ETHEREUM,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.GOERLI]: new ERC20Token(
    ChainId.GOERLI,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
}

export const WBNB = {
  [ChainId.ETHEREUM]: new ERC20Token(
    ChainId.ETHEREUM,
    '0x418D75f65a02b3D53B2418FB8E1fe493759c7605',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.BSC]: new ERC20Token(
    ChainId.BSC,
    '0x38AcAA98Db174cEE218A33635322C19cC1155d20',
    18,
    'WBBC',
    'Wrapped BBC',
    'https://butanex.cryptosnowprince.com'
  ),
  [ChainId.BBC]: new ERC20Token(
    ChainId.BBC,
    '0x38AcAA98Db174cEE218A33635322C19cC1155d20',
    18,
    'WBBC',
    'Wrapped BBC',
    'https://butanex.cryptosnowprince.com'
  ),
  [ChainId.BSC_TESTNET]: new ERC20Token(
    ChainId.BSC_TESTNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
}

export const WNATIVE: Record<number, ERC20Token> = {
  [ChainId.ETHEREUM]: WETH9[ChainId.ETHEREUM],
  [ChainId.GOERLI]: WETH9[ChainId.GOERLI],
  [ChainId.BSC]: WBNB[ChainId.BSC],
  [ChainId.BBC]: WBNB[ChainId.BBC],
  [ChainId.BSC_TESTNET]: WBNB[ChainId.BSC_TESTNET],
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.ETHEREUM]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  [ChainId.GOERLI]: { name: 'Goerli Ether', symbol: 'GOR', decimals: 18 },
  [ChainId.BSC]: {
    name: 'Butane Chain Native Token',
    symbol: 'BBC',
    decimals: 18,
  },
  [ChainId.BBC]: {
    name: 'Butane Chain Native Token',
    symbol: 'BBC',
    decimals: 18,
  },
  [ChainId.BSC_TESTNET]: {
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
    decimals: 18,
  },
}
