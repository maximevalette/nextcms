import ReactGA from 'react-ga'

export const initGA = () => {
  if (process.env.GA_ID) {
    console.log('GA init')
    ReactGA.initialize(process.env.GA_ID)
  } else {
    console.log('No GA_ID found in current environment')
  }
}

export const logPageView = () => {
  if (!process.env.GA_ID) {
    return false;
  }
  console.log(`Logging pageview for ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '') => {
  if (!process.env.GA_ID) {
    return false;
  }
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}