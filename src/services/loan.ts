import loanData from './loan.json'

export function getLoadApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(loanData)
    }, 3000)
  })
}