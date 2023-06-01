export interface NullstackEnvironment {
  client: boolean

  server: boolean

  development: boolean

  production: boolean

  static: boolean

  /**
   * md5 hash of the current environment folder outputs.
   *
   * @see https://nullstack.app/context-environment
   */
  key: string

  /**
   * Event raised when a module is hot replaced.
   *
   * @scope client
   * @see https://nullstack.app/context-environment
   */
  event: string

  disk?: boolean
}
