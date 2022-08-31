// ** Mock
import mock from 'src/@fake-db/mock'

// ** Types
import { UsersType } from 'src/types/apps/userTypes'

// ** Tabela usuários
const data: { users: UsersType[] } = {
  users: [
    {
      id: 1,
      fullName: 'Galen Slixby',
      company: 'Yotz PVT LTD',
      role: 'support',
      username: 'gslixby0',
      country: 'El Salvador',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      taxid: '84305197503',
      currentPlan: 'enterprise',
      status: 'inactive',
      avatar: '',
      avatarColor: 'primary'
    },
    {
      id: 2,
      fullName: 'Halsey Redmore',
      company: 'Skinder PVT LTD',
      role: 'client',
      username: 'hredmore1',
      country: 'Albania',
      contact: '(472) 607-9137',
      email: 'hredmore1@imgur.com',
      taxid: '12345678910',
      currentPlan: 'team',
      status: 'active',
      avatar: '/images/avatars/3.png'
    },
    {
      id: 3,
      fullName: 'Marjory Sicely',
      company: 'Oozz PVT LTD',
      role: 'test account admin',
      username: 'msicely2',
      country: 'Russia',
      contact: '(321) 264-4599',
      email: 'msicely2@who.int',
      taxid: '05737945439',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: '/images/avatars/1.png'
    },
    {
      id: 4,
      fullName: 'Cyrill Risby',
      company: 'Oozz PVT LTD',
      role: 'test account admin',
      username: 'crisby3',
      country: 'China',
      contact: '(923) 690-6806',
      email: 'crisby3@wordpress.com',
      taxid: '04708907574',
      currentPlan: 'team',
      status: 'inactive',
      avatar: '/images/avatars/3.png'
    },
    {
      id: 5,
      fullName: 'Maggy Hurran',
      company: 'Aimbo PVT LTD',
      role: 'real account admin',
      username: 'mhurran4',
      country: 'Pakistan',
      contact: '(669) 914-1078',
      email: 'mhurran4@yahoo.co.jp',
      taxid: '50703150753',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: '/images/avatars/1.png'
    },
    {
      id: 6,
      fullName: 'Silvain Halstead',
      company: 'Jaxbean PVT LTD',
      role: 'client',
      username: 'shalstead5',
      country: 'China',
      contact: '(958) 973-3093',
      email: 'shalstead5@shinystat.com',
      taxid: '84305197503',
      currentPlan: 'company',
      status: 'active',
      avatar: '',
      avatarColor: 'error'
    },
    {
      id: 7,
      fullName: 'Breena Gallemore',
      company: 'Jazzy PVT LTD',
      role: 'real account admin',
      username: 'bgallemore6',
      country: 'Canada',
      contact: '(825) 977-8152',
      email: 'bgallemore6@boston.com',
      taxid: '17450730597',
      currentPlan: 'company',
      status: 'active',
      avatar: '',
      avatarColor: 'warning'
    },
    {
      id: 8,
      fullName: 'Kathryne Liger',
      company: 'Pixoboo PVT LTD',
      role: 'client',
      username: 'kliger7',
      country: 'France',
      contact: '(187) 440-0934',
      email: 'kliger7@vinaora.com',
      taxid: '05178930154',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: '/images/avatars/4.png'
    },
    {
      id: 9,
      fullName: 'Franz Scotfurth',
      company: 'Tekfly PVT LTD',
      role: 'real account admin',
      username: 'fscotfurth8',
      country: 'China',
      contact: '(978) 146-5443',
      email: 'fscotfurth8@dailymotion.com',
      taxid: '05514541541',
      currentPlan: 'team',
      status: 'active',
      avatar: '/images/avatars/2.png'
    },
    {
      id: 10,
      fullName: 'Jillene Bellany',
      company: 'Gigashots PVT LTD',
      role: 'test account admin',
      username: 'jbellany9',
      country: 'Jamaica',
      contact: '(589) 284-6732',
      email: 'jbellany9@kickstarter.com',
      taxid: '50703150753',
      currentPlan: 'company',
      status: 'inactive',
      avatar: '/images/avatars/5.png'
    },
    {
      id: 11,
      fullName: 'Jonah Wharlton',
      company: 'Eare PVT LTD',
      role: 'real account admin',
      username: 'jwharltona',
      country: 'United States',
      contact: '(176) 532-6824',
      email: 'jwharltona@oakley.com',
      taxid: '17450730597',
      currentPlan: 'team',
      status: 'inactive',
      avatar: '/images/avatars/4.png'
    },
    {
      id: 12,
      fullName: 'Seth Hallam',
      company: 'Yakitri PVT LTD',
      role: 'real account admin',
      username: 'shallamb',
      country: 'Peru',
      contact: '(234) 464-0600',
      email: 'shallamb@hugedomains.com',
      taxid: '123456789',
      currentPlan: 'team',
      status: 'active',
      avatar: '/images/avatars/5.png'
    },
    {
      id: 13,
      fullName: 'Yoko Pottie',
      company: 'Leenti PVT LTD',
      role: 'real account admin',
      username: 'ypottiec',
      country: 'Philippines',
      contact: '(907) 284-5083',
      email: 'ypottiec@privacy.gov.au',
      taxid: '123456789',
      currentPlan: 'basic',
      status: 'inactive',
      avatar: '/images/avatars/7.png'
    },
    {
      id: 14,
      fullName: 'Maximilianus Krause',
      company: 'Digitube PVT LTD',
      role: 'client',
      username: 'mkraused',
      country: 'Democratic Republic of the Congo',
      contact: '(167) 135-7392',
      email: 'mkraused@stanford.edu',
      taxid: '123456789',
      currentPlan: 'team',
      status: 'pending',
      avatar: '/images/avatars/6.png'
    },
    {
      id: 15,
      fullName: 'Zsazsa McCleverty',
      company: 'Kaymbo PVT LTD',
      role: 'test account admin',
      username: 'zmcclevertye',
      country: 'France',
      contact: '(317) 409-6565',
      email: 'zmcclevertye@soundcloud.com',
      taxid: '123456789',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: '/images/avatars/2.png'
    },
    {
      id: 16,
      fullName: 'Bentlee Emblin',
      company: 'Yambee PVT LTD',
      role: 'client',
      username: 'bemblinf',
      country: 'Spain',
      contact: '(590) 606-1056',
      email: 'bemblinf@wired.com',
      taxid: '123456789',
      currentPlan: 'company',
      status: 'active',
      avatar: '/images/avatars/6.png'
    },
    {
      id: 17,
      fullName: 'Brockie Myles',
      company: 'Wikivu PVT LTD',
      role: 'test account admin',
      username: 'bmylesg',
      country: 'Poland',
      contact: '(553) 225-9905',
      email: 'bmylesg@amazon.com',
      taxid: '123456789',
      currentPlan: 'basic',
      status: 'active',
      avatar: '',
      avatarColor: 'success'
    },
    {
      id: 18,
      fullName: 'Bertha Biner',
      company: 'Twinte PVT LTD',
      role: 'support',
      username: 'bbinerh',
      country: 'Yemen',
      contact: '(901) 916-9287',
      email: 'bbinerh@mozilla.com',
      taxid: '123456789',
      currentPlan: 'team',
      status: 'active',
      avatar: '/images/avatars/7.png'
    },
    {
      id: 19,
      fullName: 'Travus Bruntjen',
      company: 'Cogidoo PVT LTD',
      role: 'admin',
      username: 'tbruntjeni',
      country: 'France',
      contact: '(524) 586-6057',
      email: 'tbruntjeni@sitemeter.com',
      taxid: '123456789',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: '',
      avatarColor: 'primary'
    },
    {
      id: 20,
      fullName: 'Wesley Burland',
      company: 'Bubblemix PVT LTD',
      role: 'support',
      username: 'wburlandj',
      country: 'Honduras',
      contact: '(569) 683-1292',
      email: 'wburlandj@uiuc.edu',
      taxid: '123456789',
      currentPlan: 'team',
      status: 'inactive',
      avatar: '/images/avatars/6.png'
    },
    {
      id: 21,
      fullName: 'Selina Kyle',
      company: 'Wayne Enterprises',
      role: 'admin',
      username: 'catwomen1940',
      country: 'USA',
      contact: '(829) 537-0057',
      email: 'irena.dubrovna@wayne.com',
      taxid: '123456789',
      currentPlan: 'team',
      status: 'active',
      avatar: '/images/avatars/1.png'
    },
    {
      id: 22,
      fullName: 'Jameson Lyster',
      company: 'Quaxo PVT LTD',
      role: 'support',
      username: 'jlysterl',
      country: 'Ukraine',
      contact: '(593) 624-0222',
      email: 'jlysterl@guardian.co.uk',
      taxid: '123456789',
      currentPlan: 'company',
      status: 'inactive',
      avatar: '/images/avatars/8.png'
    },
    {
      id: 23,
      fullName: 'Kare Skitterel',
      company: 'Ainyx PVT LTD',
      role: 'test account admin',
      username: 'kskitterelm',
      country: 'Poland',
      contact: '(254) 845-4107',
      email: 'kskitterelm@ainyx.com',
      taxid: '123456789',
      currentPlan: 'basic',
      status: 'pending',
      avatar: '/images/avatars/3.png'
    },
    {
      id: 24,
      fullName: 'Cleavland Hatherleigh',
      company: 'Flipopia PVT LTD',
      role: 'admin',
      username: 'chatherleighn',
      country: 'Brazil',
      contact: '(700) 783-7498',
      email: 'chatherleighn@washington.edu',
      taxid: '123456789',
      currentPlan: 'team',
      status: 'active',
      avatar: '/images/avatars/2.png'
    },
    {
      id: 25,
      fullName: 'Adeline Micco',
      company: 'Topicware PVT LTD',
      role: 'admin',
      username: 'amiccoo',
      country: 'France',
      contact: '(227) 598-1841',
      email: 'amiccoo@whitehouse.gov',
      taxid: '123456789',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: '',
      avatarColor: 'error'
    },
    {
      id: 26,
      fullName: 'Hugh Hasson',
      company: 'Skinix PVT LTD',
      role: 'admin',
      username: 'hhassonp',
      country: 'China',
      contact: '(582) 516-1324',
      email: 'hhassonp@bizjournals.com',
      taxid: '123456789',
      currentPlan: 'basic',
      status: 'inactive',
      avatar: '/images/avatars/4.png'
    },
    {
      id: 27,
      fullName: 'Germain Jacombs',
      company: 'Youopia PVT LTD',
      role: 'support',
      username: 'gjacombsq',
      country: 'Zambia',
      contact: '(137) 467-5393',
      email: 'gjacombsq@jigsy.com',
      taxid: '123456789',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: '/images/avatars/5.png'
    },
    {
      id: 28,
      fullName: 'Bree Kilday',
      company: 'Jetpulse PVT LTD',
      role: 'test account admin',
      username: 'bkildayr',
      country: 'Portugal',
      contact: '(412) 476-0854',
      email: 'bkildayr@mashable.com',
      taxid: '123456789',
      currentPlan: 'team',
      status: 'active',
      avatar: '',
      avatarColor: 'warning'
    },
    {
      id: 29,
      fullName: 'Candice Pinyon',
      company: 'Kare PVT LTD',
      role: 'test account admin',
      username: 'cpinyons',
      country: 'Sweden',
      contact: '(170) 683-1520',
      email: 'cpinyons@behance.net',
      taxid: '123456789',
      currentPlan: 'team',
      status: 'active',
      avatar: '/images/avatars/7.png'
    },
    {
      id: 30,
      fullName: 'Isabel Mallindine',
      company: 'Voomm PVT LTD',
      role: 'real account admin',
      username: 'imallindinet',
      country: 'Slovenia',
      contact: '(332) 803-1983',
      email: 'imallindinet@shinystat.com',
      taxid: '123456789',
      currentPlan: 'team',
      status: 'active',
      avatar: '',
      avatarColor: 'info'
    },
    {
      id: 31,
      fullName: 'Gwendolyn Meineken',
      company: 'Oyondu PVT LTD',
      role: 'admin',
      username: 'gmeinekenu',
      country: 'Moldova',
      contact: '(551) 379-7460',
      email: 'gmeinekenu@hc360.com',
      taxid: '123456789',
      currentPlan: 'basic',
      status: 'active',
      avatar: '/images/avatars/1.png'
    },
    {
      id: 32,
      fullName: 'Rafaellle Snowball',
      company: 'Fivespan PVT LTD',
      role: 'support',
      username: 'rsnowballv',
      country: 'Philippines',
      contact: '(974) 829-0911',
      email: 'rsnowballv@indiegogo.com',
      taxid: '123456789',
      currentPlan: 'basic',
      status: 'active',
      avatar: '/images/avatars/5.png'
    },
    {
      id: 33,
      fullName: 'Rochette Emer',
      company: 'Thoughtworks PVT LTD',
      role: 'admin',
      username: 'remerw',
      country: 'North Korea',
      contact: '(841) 889-3339',
      email: 'remerw@blogtalkradio.com',
      taxid: '123456789',
      currentPlan: 'basic',
      status: 'active',
      avatar: '/images/avatars/8.png'
    },
    {
      id: 34,
      fullName: 'Ophelie Fibbens',
      company: 'Jaxbean PVT LTD',
      role: 'real account admin',
      username: 'ofibbensx',
      country: 'Indonesia',
      contact: '(764) 885-7351',
      email: 'ofibbensx@booking.com',
      taxid: '123456789',
      currentPlan: 'company',
      status: 'active',
      avatar: '/images/avatars/4.png'
    },
    {
      id: 35,
      fullName: 'Stephen MacGilfoyle',
      company: 'Browseblab PVT LTD',
      role: 'test account admin',
      username: 'smacgilfoyley',
      country: 'Japan',
      contact: '(350) 589-8520',
      email: 'smacgilfoyley@bigcartel.com',
      taxid: '123456789',
      currentPlan: 'company',
      status: 'active',
      avatar: '',
      avatarColor: 'error'
    },
    {
      id: 36,
      fullName: 'Bradan Rosebotham',
      company: 'Agivu PVT LTD',
      role: 'real account admin',
      username: 'brosebothamz',
      country: 'Belarus',
      contact: '(882) 933-2180',
      email: 'brosebothamz@tripadvisor.com',
      taxid: '123456789',
      currentPlan: 'team',
      status: 'inactive',
      avatar: '',
      avatarColor: 'success'
    },
    {
      id: 37,
      fullName: 'Skip Hebblethwaite',
      company: 'Katz PVT LTD',
      role: 'admin',
      username: 'shebblethwaite10',
      country: 'Canada',
      contact: '(610) 343-1024',
      email: 'shebblethwaite10@arizona.edu',
      taxid: '123456789',
      currentPlan: 'company',
      status: 'inactive',
      avatar: '/images/avatars/1.png'
    },
    {
      id: 38,
      fullName: 'Moritz Piccard',
      company: 'Twitternation PVT LTD',
      role: 'test account admin',
      username: 'mpiccard11',
      country: 'Croatia',
      contact: '(365) 277-2986',
      email: 'mpiccard11@vimeo.com',
      taxid: '123456789',
      currentPlan: 'enterprise',
      status: 'inactive',
      avatar: '/images/avatars/1.png'
    },
    {
      id: 39,
      fullName: 'Tyne Widmore',
      company: 'Yombu PVT LTD',
      role: 'real account admin',
      username: 'twidmore12',
      country: 'Finland',
      contact: '(531) 731-0928',
      email: 'twidmore12@bravesites.com',
      taxid: '123456789',
      currentPlan: 'team',
      status: 'active',
      avatar: '',
      avatarColor: 'primary'
    },
    {
      id: 40,
      fullName: 'Florenza Desporte',
      company: 'Kamba PVT LTD',
      role: 'client',
      username: 'fdesporte13',
      country: 'Ukraine',
      contact: '(312) 104-2638',
      email: 'fdesporte13@omniture.com',
      taxid: '123456789',
      currentPlan: 'company',
      status: 'active',
      avatar: '/images/avatars/6.png'
    },
    {
      id: 41,
      fullName: 'Edwina Baldetti',
      company: 'Dazzlesphere PVT LTD',
      role: 'test account admin',
      username: 'ebaldetti14',
      country: 'Haiti',
      contact: '(315) 329-3578',
      email: 'ebaldetti14@theguardian.com',
      taxid: '123456789',
      currentPlan: 'team',
      status: 'active',
      avatar: '',
      avatarColor: 'info'
    },
    {
      id: 42,
      fullName: 'Benedetto Rossiter',
      company: 'Mybuzz PVT LTD',
      role: 'support',
      username: 'brossiter15',
      country: 'Indonesia',
      contact: '(323) 175-6741',
      email: 'brossiter15@craigslist.org',
      taxid: '123456789',
      currentPlan: 'team',
      status: 'inactive',
      avatar: '',
      avatarColor: 'warning'
    },
    {
      id: 43,
      fullName: 'Micaela McNirlan',
      company: 'Tambee PVT LTD',
      role: 'admin',
      username: 'mmcnirlan16',
      country: 'Indonesia',
      contact: '(242) 952-0916',
      email: 'mmcnirlan16@hc360.com',
      taxid: '123456789',
      currentPlan: 'basic',
      status: 'inactive',
      avatar: '',
      avatarColor: 'error'
    },
    {
      id: 44,
      fullName: 'Vladamir Koschek',
      company: 'Centimia PVT LTD',
      role: 'client',
      username: 'vkoschek17',
      country: 'Guatemala',
      contact: '(531) 758-8335',
      email: 'vkoschek17@abc.net.au',
      taxid: '123456789',
      currentPlan: 'team',
      status: 'pending',
      avatar: '',
      avatarColor: 'success'
    },
    {
      id: 45,
      fullName: 'Corrie Perot',
      company: 'Flipopia PVT LTD',
      role: 'real account admin',
      username: 'cperot18',
      country: 'China',
      contact: '(659) 385-6808',
      email: 'cperot18@goo.ne.jp',
      taxid: '123456789',
      currentPlan: 'team',
      status: 'active',
      avatar: '/images/avatars/3.png'
    },
    {
      id: 46,
      fullName: 'Saunder Offner',
      company: 'Skalith PVT LTD',
      role: 'test account admin',
      username: 'soffner19',
      country: 'Poland',
      contact: '(200) 586-2264',
      email: 'soffner19@mac.com',
      taxid: '123456789',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: '',
      avatarColor: 'primary'
    },
    {
      id: 47,
      fullName: 'Karena Courtliff',
      company: 'Feedfire PVT LTD',
      role: 'admin',
      username: 'kcourtliff1a',
      country: 'China',
      contact: '(478) 199-0020',
      email: 'kcourtliff1a@bbc.co.uk',
      taxid: '123456789',
      currentPlan: 'basic',
      status: 'active',
      avatar: '/images/avatars/1.png'
    },
    {
      id: 48,
      fullName: 'Onfre Wind',
      company: 'Thoughtmix PVT LTD',
      role: 'admin',
      username: 'owind1b',
      country: 'Ukraine',
      contact: '(344) 262-7270',
      email: 'owind1b@yandex.ru',
      taxid: '123456789',
      currentPlan: 'basic',
      status: 'active',
      avatar: '',
      avatarColor: 'error'
    },
    {
      id: 49,
      fullName: 'Paulie Durber',
      company: 'Babbleblab PVT LTD',
      role: 'real account admin',
      username: 'pdurber1c',
      country: 'Sweden',
      contact: '(694) 676-1275',
      email: 'pdurber1c@gov.uk',
      taxid: '123456789',
      currentPlan: 'team',
      status: 'inactive',
      avatar: '',
      avatarColor: 'warning'
    },
    {
      id: 50,
      fullName: 'Beverlie Krabbe',
      company: 'Kaymbo PVT LTD',
      role: 'support',
      username: 'bkrabbe1d',
      country: 'China',
      contact: '(397) 294-5153',
      email: 'bkrabbe1d@home.pl',
      taxid: '123456789',
      currentPlan: 'company',
      status: 'active',
      avatar: '/images/avatars/2.png'
    }
  ]
}

// POST: Add new user
mock.onPost('/apps/users/add-user').reply(config => {
  // Get event from post data
  const user = JSON.parse(config.data).data

  const { length } = data.users
  let lastIndex = 0
  if (length) {
    lastIndex = data.users[length - 1].id
  }
  user.id = lastIndex + 1

  data.users.unshift({ ...user, avatar: '', avatarColor: 'primary', status: 'active' })

  return [201, { user }]
})

// GET: Updated DATA
mock.onGet('/apps/users/list').reply(config => {
  const { q = '', role = null, status = null, currentPlan = null } = config.params ?? ''

  const queryLowered = q.toLowerCase()

  const filteredData = data.users.filter(
    user =>
      (user.username.toLowerCase().includes(queryLowered) ||
        user.fullName.toLowerCase().includes(queryLowered) ||
        user.role.toLowerCase().includes(queryLowered) ||
        (user.email.toLowerCase().includes(queryLowered) &&
          user.currentPlan.toLowerCase().includes(queryLowered) &&
          user.status.toLowerCase().includes(queryLowered))) &&
      user.role === (role || user.role) &&
      user.currentPlan === (currentPlan || user.currentPlan) &&
      user.status === (status || user.status)
  )

  return [
    200,
    {
      allData: data.users,
      users: filteredData,
      params: config.params,
      total: filteredData.length
    }
  ]
})

// GET: particular user data
mock.onGet('/apps/user').reply(config => {
  const { id } = config.params

  const userData = data.users.filter(user => user.id === parseInt(id, 10))

  if (userData.length) {
    return [200, userData[0]]
  } else {
    return [404, { message: 'Unable to find the requested user!' }]
  }
})

// DELETE: Deletes User
mock.onDelete('/apps/users/delete').reply(config => {
  // Get user id from URL
  const userId = config.data

  const userIndex = data.users.findIndex(t => t.id === userId)
  data.users.splice(userIndex, 1)

  return [200]
})
