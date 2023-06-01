export interface NullstackRouter {
  /**
   * The router path including query params.
   * Does not contain the domain and port.
   *
   * @see https://nullstack.app/routes-and-params#router
   */
  url: string

  /**
   * The router path without query params.
   *
   * @see https://nullstack.app/routes-and-params#router
   */
  path: string

  /**
   * Only the base url
   *
   * @example: `https://nullstack.app`
   * @see https://nullstack.app/routes-and-params#router
   */
  base: string

  /**
   * Event raised when `router.url` (including changes on params) or `router.path` changes.
   *
   * @see https://nullstack.app/routes-and-params#custom-events
   */
  event: string

  /**
   * The previous route including params
   *
   * @example `/?origin=social_media`
   * @default null
   */
  previous: string
}
