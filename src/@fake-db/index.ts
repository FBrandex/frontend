import mock from './mock'

import './auth/jwt'
import './manage/userList'
import './manage/order'

mock.onAny().passThrough()
