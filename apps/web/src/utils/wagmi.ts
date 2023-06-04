import { BinanceWalletConnector } from '@pancakeswap/wagmi/connectors/binanceWallet'
import { BloctoConnector } from '@pancakeswap/wagmi/connectors/blocto'
import { TrustWalletConnector } from '@pancakeswap/wagmi/connectors/trustWallet'
import { bsc, bscTestnet, goerli, mainnet } from 'wagmi/chains'
import { configureChains, createClient, Chain } from 'wagmi'
import memoize from 'lodash/memoize'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { LedgerConnector } from 'wagmi/connectors/ledger'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { SafeConnector } from './safeConnector'

export const bbcTestnet = {
  id: 23524,
  name: 'BBC Butane Testnet',
  network: 'bbc',
  nativeCurrency: {
    decimals: 18,
    name: 'BBC',
    symbol: 'BBC',
  },
  rpcUrls: {
    default: { http: ['https://butane.evm.jrpc.main.cryptosnowprince.com'] },
    public: { http: ['https://butane.evm.jrpc.main.cryptosnowprince.com'] },
  },
  blockExplorers: {
    etherscan: { name: 'ButaneScan', url: 'https://butane.evm.scan.cryptosnowprince.com' },
    default: { name: 'ButaneScan', url: 'https://butane.evm.scan.cryptosnowprince.com' },
  },
  contracts: {
    multicall3: {
      address: '0x3a8ea327ab5440701ebad94b566c790c8f96151f',
    },
  },
  // testnet: true
} as Chain

const CHAINS = [bbcTestnet]

const getNodeRealUrl = (networkName: string) => {
  let host = null

  switch (networkName) {
    case 'homestead':
      if (process.env.NEXT_PUBLIC_NODE_REAL_API_ETH) {
        host = `eth-mainnet.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_ETH}`
      }
      break
    case 'goerli':
      if (process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI) {
        host = `eth-goerli.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI}`
      }
      break
    default:
      host = null
  }

  if (!host) {
    return null
  }

  const url = `https://${host}`
  return {
    http: url,
    webSocket: url.replace(/^http/i, 'wss').replace('.nodereal.io/v1', '.nodereal.io/ws/v1'),
  }
}

export const { provider, chains } = configureChains(CHAINS, [
  jsonRpcProvider({
    rpc: (chain) => {
      if (!!process.env.NEXT_PUBLIC_NODE_PRODUCTION && chain.id === bbcTestnet.id) {
        return { http: process.env.NEXT_PUBLIC_NODE_PRODUCTION }
      }
      if (process.env.NODE_ENV === 'test' && chain.id === mainnet.id) {
        return { http: 'https://cloudflare-eth.com' }
      }

      return getNodeRealUrl(chain.network) || { http: chain.rpcUrls.default.http[0] }
    },
  }),
])

export const injectedConnector = new InjectedConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
})

export const coinbaseConnector = new CoinbaseWalletConnector({
  chains,
  options: {
    appName: 'PancakeSwap',
    appLogoUrl: 'https://pancakeswap.com/logo.png',
  },
})

export const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: {
    qrcode: true,
  },
})

export const walletConnectNoQrCodeConnector = new WalletConnectConnector({
  chains,
  options: {
    qrcode: false,
  },
})

export const metaMaskConnector = new MetaMaskConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
})

const bloctoConnector = new BloctoConnector({
  chains,
  options: {
    defaultChainId: 56,
    appId: 'e2f2f0cd-3ceb-4dec-b293-bb555f2ed5af',
  },
})

const ledgerConnector = new LedgerConnector({
  chains,
})

export const bscConnector = new BinanceWalletConnector({ chains })

export const trustWalletConnector = new TrustWalletConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
})

export const client = createClient({
  autoConnect: false,
  provider,
  connectors: [
    new SafeConnector({ chains }),
    metaMaskConnector,
    injectedConnector,
    coinbaseConnector,
    walletConnectConnector,
    bscConnector,
    bloctoConnector,
    ledgerConnector,
    trustWalletConnector,
  ],
})

export const CHAIN_IDS = chains.map((c) => c.id)

export const isChainSupported = memoize((chainId: number) => CHAIN_IDS.includes(chainId))
export const isChainTestnet = memoize((chainId: number) => chains.find((c) => c.id === chainId)?.testnet)
