export {}
declare global {
  interface Window {
    ga: (...props: any) => void
  }
}
