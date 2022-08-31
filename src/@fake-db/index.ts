import mock from './mock'

import './cards'
import './auth/jwt'
import './pages/faq'
import './manage/invoice'
import './autocomplete'
import './manage/userList'
import './app-bar-search'
import './setting/permissions'
import './pages/knowledge-base'
import './server-side-menu/vertical'
import './server-side-menu/horizontal'

mock.onAny().passThrough()
