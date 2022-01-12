export function getSwapAppLink(): string {
  const cuurentDomain = window.location.host
  switch (cuurentDomain) {
    case 'info-swap.web.app':
      return 'https://swap-mumbai.w3w.app/'
    default:
      return 'https://swap-mumbai.w3w.app/'
  }
}

export function getScanLink(): string {
  const cuurentDomain = window.location.host
  switch (cuurentDomain) {
    case 'info-swap.web.app':
      return 'https://mumbai.polygonscan.com/'
    default:
      return 'https://mumbai.polygonscan.com/'
  }
}
