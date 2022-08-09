// @flow

/*
  Here you need to specify application provisioning information.
*/

// an ID given to you from Evernym's Support Team after the Sponsor onboarding process is complete.
export const SPONSOR_ID = ''

// the list of used environments.
export const SERVER_ENVIRONMENTS = {}

// environment to use by default
export const DEFAULT_SERVER_ENVIRONMENT = "DEMO"

export const GET_PROVISION_TOKEN_FUNC = null

/*
 * Function to be called to get provision token – EXAMPLE
 * 
  export const GET_PROVISION_TOKEN_FUNC = async () => {
   try {
      const response = fetch('your sponsor server backend address')
      /// process response
      return [null, response.token]
   } catch (error) {
      return [error.message, null]
   }
*/