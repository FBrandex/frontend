import mock from './mock'

import './auth/jwt'
import './manage/userList'
import './manage/order'
import './setting/permissions'

mock.onAny().passThrough()
