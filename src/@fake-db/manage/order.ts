// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Utils Import
import { getDateRange } from 'src/@core/utils/get-daterange'

// ** Types
import { OrderType } from 'src/types/manage/orderTypes'

const now = new Date()
const currentMonth = now.toLocaleString('default', { month: 'short' })

const data: { orders: OrderType[] } = {
  orders: [
    {
      id: 4987,
      issuedDate: `13 ${currentMonth} ${now.getFullYear()}`,
      address: '7777 Mendez Plains',
      company: 'Hall-Robbins PLC',
      companyEmail: 'don85@johnson.com',
      country: 'USA',
      contact: '(616) 865-4180',
      name: 'Jordan Stevenson',
      service: 'X PROP - X25 (ONE)',
      total: 3428,
      avatar: '/images/avatars/6.png',
      avatarColor: 'primary',
      orderStatus: 'Paid',
      balance: 0,
      dueDate: `23 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4988,
      issuedDate: `17 ${currentMonth} ${now.getFullYear()}`,
      address: '04033 Wesley Wall Apt. 961',
      company: 'Mccann LLC and Sons',
      companyEmail: 'brenda49@taylor.info',
      country: 'Haiti',
      contact: '(226) 204-8287',
      name: 'Stephanie Burns',
      service: 'X PROP - X100 (PLUS)',
      total: 5219,
      avatar: '/images/avatars/7.png',
      orderStatus: 'Paid',
      balance: 0,
      dueDate: `15 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4989,
      issuedDate: `19 ${currentMonth} ${now.getFullYear()}`,
      address: '5345 Robert Squares',
      company: 'Leonard-Garcia and Sons',
      companyEmail: 'smithtiffany@powers.com',
      country: 'Denmark',
      contact: '(955) 676-1076',
      name: 'Tony Herrera',
      service: 'PROP X - Forex250 USD (MT5)	',
      total: 3719,
      avatar: '/images/avatars/11.png',
      orderStatus: 'Past Due',
      balance: 0,
      dueDate: `03 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4990,
      issuedDate: `06 ${currentMonth} ${now.getFullYear()}`,
      address: '19022 Clark Parks Suite 149',
      company: 'Smith, Miller and Henry LLC',
      companyEmail: 'mejiageorge@lee-perez.com',
      country: 'Cambodia',
      contact: '(832) 323-6914',
      name: 'Kevin Patton',
      service: 'X PROP - X25 (ONE)',
      total: 4749,
      avatar: '/images/avatars/9.png',
      orderStatus: 'Paid',
      balance: 0,
      dueDate: `11 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4991,
      issuedDate: `08 ${currentMonth} ${now.getFullYear()}`,
      address: '8534 Saunders Hill Apt. 583',
      company: 'Garcia-Cameron and Sons',
      companyEmail: 'brandon07@pierce.com',
      country: 'Martinique',
      contact: '(970) 982-3353',
      name: 'Mrs. Julie Donovan MD',
      service: 'X PROP - X100 (PLUS)',
      total: 4056,
      avatar: '/images/avatars/10.png',
      orderStatus: 'Paid',
      balance: 0,
      dueDate: `30 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4992,
      issuedDate: `26 ${currentMonth} ${now.getFullYear()}`,
      address: '661 Perez Run Apt. 778',
      company: 'Burnett-Young PLC',
      companyEmail: 'guerrerobrandy@beasley-harper.com',
      country: 'Botswana',
      contact: '(511) 938-9617',
      name: 'Amanda Phillips',
      service: 'X PROP - X100 (PLUS)',
      total: 2771,
      avatar: '/images/avatars/8.png',
      avatarColor: 'secondary',
      orderStatus: 'Past Due',
      balance: 0,
      dueDate: `24 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4993,
      issuedDate: `17 ${currentMonth} ${now.getFullYear()}`,
      address: '074 Long Union',
      company: 'Wilson-Lee LLC',
      companyEmail: 'williamshenry@moon-smith.com',
      country: 'Montserrat',
      contact: '(504) 859-2893',
      name: 'Christina Collier',
      service: 'X PROP - X100 (PLUS)',
      total: 2713,
      avatar: '/images/avatars/12.png',
      avatarColor: 'success',
      orderStatus: 'Paid',
      balance: 0,
      dueDate: `22 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4994,
      issuedDate: `11 ${currentMonth} ${now.getFullYear()}`,
      address: '5225 Ford Cape Apt. 840',
      company: 'Schwartz, Henry and Rhodes Group',
      companyEmail: 'margaretharvey@russell-murray.com',
      country: 'Oman',
      contact: '(758) 403-7718',
      name: 'David Flores',
      service: 'Ações X 250K - Normal (ONE)',
      total: 4309,
      avatar: '/images/avatars/13.png',
      orderStatus: 'Paid',
      balance: 0,
      dueDate: `10 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4995,
      issuedDate: `26 ${currentMonth} ${now.getFullYear()}`,
      address: '23717 James Club Suite 277',
      company: 'Henderson-Holder PLC',
      companyEmail: 'dianarodriguez@villegas.com',
      country: 'Cambodia',
      contact: '(292) 873-8254',
      name: 'Valerie Perez',
      service: 'X PROP - X25 (ONE)',
      total: 3367,
      avatar: '/images/avatars/14.png',
      orderStatus: 'Paid',
      balance: 0,
      dueDate: `24 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4996,
      issuedDate: `15 ${currentMonth} ${now.getFullYear()}`,
      address: '4528 Myers Gateway',
      company: 'Page-Wise PLC',
      companyEmail: 'bwilson@norris-brock.com',
      country: 'Guam',
      contact: '(956) 803-2008',
      name: 'Susan Dickerson',
      service: 'X PROP - X25 (ONE)',
      total: 4776,
      avatar: '/images/avatars/24.png',
      orderStatus: 'Paid',
      balance: 0,
      dueDate: `02 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4997,
      issuedDate: `27 ${currentMonth} ${now.getFullYear()}`,
      address: '4234 Mills Club Suite 107',
      company: 'Turner PLC Inc',
      companyEmail: 'markcampbell@bell.info',
      country: 'United States Virgin Islands',
      contact: '(716) 962-8635',
      name: 'Kelly Smith',
      service: 'PROP X - Forex250 USD (MT5)	',
      total: 3789,
      avatar: '/images/avatars/16.png',
      orderStatus: 'Paid',
      balance: 0,
      dueDate: `18 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4998,
      issuedDate: `31 ${currentMonth} ${now.getFullYear()}`,
      address: '476 Keith Meadow',
      company: 'Levine-Dorsey PLC',
      companyEmail: 'mary61@rosario.com',
      country: 'Syrian Arab Republic',
      contact: '(523) 449-0782',
      name: 'Jamie Jones',
      service: 'PROP X - Forex250 USD (MT5)	',
      total: 5200,
      avatar: '/images/avatars/17.png',
      orderStatus: 'Paid',
      balance: 0,
      dueDate: `17 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4999,
      issuedDate: `14 ${currentMonth} ${now.getFullYear()}`,
      address: '56381 Ashley Village Apt. 332',
      company: 'Hall, Thompson and Ramirez LLC',
      companyEmail: 'sean22@cook.com',
      country: 'Ukraine',
      contact: '(583) 470-8356',
      name: 'Ruben Garcia',
      service: 'X PROP - X25 (ONE)',
      total: 4558,
      avatar: '/images/avatars/18.png',
      orderStatus: 'Paid',
      balance: 0,
      dueDate: `01 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5000,
      issuedDate: `21 ${currentMonth} ${now.getFullYear()}`,
      address: '6946 Gregory Plaza Apt. 310',
      company: 'Lambert-Thomas Group',
      companyEmail: 'mccoymatthew@lopez-jenkins.net',
      country: 'Vanuatu',
      contact: '(366) 906-6467',
      name: 'Ryan Meyer',
      service: 'Ações X 250K - Normal (ONE)',
      total: 3503,
      avatar: '/images/avatars/3.png',
      orderStatus: 'Paid',
      balance: 0,
      dueDate: `22 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5001,
      issuedDate: `30 ${currentMonth} ${now.getFullYear()}`,
      address: '64351 Andrew Lights',
      company: 'Gregory-Haynes PLC',
      companyEmail: 'novakshannon@mccarty-murillo.com',
      country: 'Romania',
      contact: '(320) 616-3915',
      name: 'Valerie Valdez',
      service: 'PROP X - Forex250 USD (MT5)	',
      total: 5285,
      avatar: '/images/avatars/19.png',
      orderStatus: 'Paid',
      balance: 0,
      dueDate: `02 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5002,
      issuedDate: `21 ${currentMonth} ${now.getFullYear()}`,
      address: '5702 Sarah Heights',
      company: 'Wright-Schmidt LLC',
      companyEmail: 'smithrachel@davis-rose.net',
      country: 'Costa Rica',
      contact: '(435) 899-1963',
      name: 'Melissa Wheeler',
      service: 'X PROP - X100 (PLUS)',
      total: 3668,
      avatar: '/images/avatars/20.png',
      orderStatus: 'Paid',
      balance: 0,
      dueDate: `15 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5003,
      issuedDate: `30 ${currentMonth} ${now.getFullYear()}`,
      address: '668 Robert Flats',
      company: 'Russell-Abbott Ltd',
      companyEmail: 'scott96@mejia.net',
      country: 'Congo',
      contact: '(254) 399-4728',
      name: 'Alan Jimenez',
      service: 'PROP X - Forex250 USD (MT5)	',
      total: 4372,
      avatar: '/images/avatars/21.png',
      avatarColor: 'warning',
      orderStatus: 'Paid',
      balance: 0,
      dueDate: `17 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5004,
      issuedDate: `27 ${currentMonth} ${now.getFullYear()}`,
      address: '55642 Chang Extensions Suite 373',
      company: 'Williams LLC Inc',
      companyEmail: 'cramirez@ross-bass.biz',
      country: 'Saint Pierre and Miquelon',
      contact: '(648) 500-4338',
      name: 'Jennifer Morris',
      service: 'Ações X 250K - Normal (ONE)',
      total: 3198,
      avatar: '/images/avatars/22.png',
      orderStatus: 'Paid',
      balance: 0,
      dueDate: `16 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5005,
      issuedDate: `30 ${currentMonth} ${now.getFullYear()}`,
      address: '56694 Eric Orchard',
      company: 'Hudson, Bell and Phillips PLC',
      companyEmail: 'arielberg@wolfe-smith.com',
      country: 'Uruguay',
      contact: '(896) 544-3796',
      name: 'Timothy Stevenson',
      service: 'PROP X - Forex250 USD (MT5)	',
      total: 5293,
      avatar: '/images/avatars/23.png',
      avatarColor: 'error',
      orderStatus: 'Past Due',
      balance: 0,
      dueDate: `01 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5006,
      issuedDate: `10 ${currentMonth} ${now.getFullYear()}`,
      address: '3727 Emma Island Suite 879',
      company: 'Berry, Gonzalez and Heath Inc',
      companyEmail: 'yrobinson@nichols.com',
      country: 'Israel',
      contact: '(236) 784-5142',
      name: 'Erik Hayden',
      service: 'Ações X 250K - Normal (ONE)',
      total: 5612,
      avatar: '/images/avatars/15.png',
      orderStatus: 'Paid',
      balance: 0,
      dueDate: `12 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5007,
      issuedDate: `01 ${currentMonth} ${now.getFullYear()}`,
      address: '953 Miller Common Suite 580',
      company: 'Martinez, Fuller and Chavez and Sons',
      companyEmail: 'tatejennifer@allen.net',
      country: 'Cook Islands',
      contact: '(436) 717-2419',
      name: 'Katherine Kennedy',
      service: 'X PROP - X25 (ONE)',
      total: 2230,
      avatar: '/images/avatars/25.png',
      orderStatus: 'Paid',
      balance: 0,
      dueDate: `19 ${currentMonth} ${now.getFullYear()}`
    }
  ]
}

// ------------------------------------------------
// GET: Return Order List
// ------------------------------------------------
mock.onGet('/manage/order/orders').reply(config => {
  const { q = '', status = '', dates = [] } = config.params ?? ''
  const queryLowered = q.toLowerCase()
  const filteredData = data.orders.filter(order => {
    if (dates.length) {
      const [start, end] = dates
      const filtered: number[] = []
      const range = getDateRange(start, end)
      const orderDate = new Date(order.issuedDate)

      range.filter(date => {
        const rangeDate = new Date(date)
        if (
          orderDate.getFullYear() === rangeDate.getFullYear() &&
          orderDate.getDate() === rangeDate.getDate() &&
          orderDate.getMonth() === rangeDate.getMonth()
        ) {
          filtered.push(order.id)
        }
      })

      if (filtered.length && filtered.includes(order.id)) {
        return (
          (order.companyEmail.toLowerCase().includes(queryLowered) ||
            order.name.toLowerCase().includes(queryLowered) ||
            String(order.id).toLowerCase().includes(queryLowered) ||
            String(order.total).toLowerCase().includes(queryLowered) ||
            String(order.balance).toLowerCase().includes(queryLowered) ||
            order.dueDate.toLowerCase().includes(queryLowered)) &&
          order.orderStatus.toLowerCase() === (status.toLowerCase() || order.orderStatus.toLowerCase())
        )
      }
    } else {
      return (
        (order.companyEmail.toLowerCase().includes(queryLowered) ||
          order.name.toLowerCase().includes(queryLowered) ||
          String(order.id).toLowerCase().includes(queryLowered) ||
          String(order.total).toLowerCase().includes(queryLowered) ||
          String(order.balance).toLowerCase().includes(queryLowered) ||
          order.dueDate.toLowerCase().includes(queryLowered)) &&
        order.orderStatus.toLowerCase() === (status.toLowerCase() || order.orderStatus.toLowerCase())
      )
    }
  })

  return [
    200,
    {
      params: config.params,
      allData: data.orders,
      orders: filteredData,
      total: filteredData.length
    }
  ]
})

// ------------------------------------------------
// GET: Return Single Order
// ------------------------------------------------
mock.onGet('manage/order/single-order').reply(config => {
  const { id } = config.params

  const orderData = data.orders.filter(order => order.id === parseInt(id, 10))
  if (orderData.length) {
    const responseData = {
      order: orderData[0],
      paymentDetails: {
        totalDue: '$12,110.55',
        bankName: 'American Bank',
        country: 'United States',
        iban: 'ETD95476213874685',
        swiftCode: 'BR91905'
      }
    }

    return [200, responseData]
  } else {
    return [404, { message: 'Unable to find the requested order!' }]
  }
})

// ------------------------------------------------
// GET: Return Clients
// ------------------------------------------------
mock.onGet('/manage/order/clients').reply(() => {
  const clients = data.orders.map(order => {
    const { address, company, companyEmail, country, contact, name } = order

    return {
      name,
      address,
      company,
      country,
      contact,
      companyEmail
    }
  })

  return [200, clients.slice(0, 5)]
})

// ------------------------------------------------
// DELETE: Deletes Order
// ------------------------------------------------
mock.onDelete('/manage/order/delete').reply(config => {
  // Get order id from URL
  const orderId = Number(config.data)
  const orderIndex = data.orders.findIndex(t => t.id === orderId)
  data.orders.splice(orderIndex, 1)

  return [200]
})
