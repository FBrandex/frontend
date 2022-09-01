import mock from './mock'

import './auth/jwt'
import './manage/userList'

mock.onAny().passThrough()
