import localConfig from './local'
import productionConfig from './production'

const configs = {
  local: localConfig,
  production: productionConfig,
}

const env = process.env.NODE_ENV || 'local'

export default () => configs[env]
