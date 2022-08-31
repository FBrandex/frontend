// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Utils Import
import { getDateRange } from 'src/@core/utils/get-daterange'

// ** Types
import { InvoiceType } from 'src/types/apps/invoiceTypes'

const now = new Date()
const currentMonth = now.toLocaleString('default', { month: 'short' })

const data: { invoices: InvoiceType[] } = {
  invoices: [
    {
      id: 1,
      invoice: '45163919',
      issuedDate: '29/08/2022',
      client: 'Renato Meneses de Souza',
      email: 'renatoms.invt@gmail.com',
      product: 'X PROP - X25 (MAX)',
      total: 218.68,
      avatar: '/images/avatars/1.png',
      avatarColor: 'primary',
      invoiceStatus: 'Paid',
      dueDate: `12/10/2022`
    },
    {
      id: 2,
      invoice: '45155655',
      issuedDate: '30/08/2022',
      client: 'Sergio Naguel',
      email: 'naguelsn@gmail.com',
      product: 'X PROP - X100 (MAX)',
      total: 407.25,
      avatar: '/images/avatars/3.png',
      avatarColor: 'primary',
      invoiceStatus: 'Aguardando Pagamento',
      dueDate: `12/10/2022`
    }
  ]
}

// ------------------------------------------------
// GET: Return Invoice List
// ------------------------------------------------
mock.onGet('/manage/orders/invoices').reply(config => {
  const { q = '', status = '', dates = [] } = config.params ?? ''
  const queryLowered = q.toLowerCase()
  const filteredData = data.invoices.filter(invoice => {
    if (dates.length) {
      const [start, end] = dates
      const filtered: number[] = []
      const range = getDateRange(start, end)
      const invoiceDate = new Date(invoice.issuedDate)

      range.filter(date => {
        const rangeDate = new Date(date)
        if (
          invoiceDate.getFullYear() === rangeDate.getFullYear() &&
          invoiceDate.getDate() === rangeDate.getDate() &&
          invoiceDate.getMonth() === rangeDate.getMonth()
        ) {
          filtered.push(invoice.id)
        }
      })

      if (filtered.length && filtered.includes(invoice.id)) {
        return (
          (invoice.email.toLowerCase().includes(queryLowered) ||
            invoice.client.toLowerCase().includes(queryLowered) ||
            String(invoice.id).toLowerCase().includes(queryLowered) ||
            String(invoice.total).toLowerCase().includes(queryLowered) ||
            invoice.dueDate.toLowerCase().includes(queryLowered)) &&
          invoice.invoiceStatus.toLowerCase() === (status.toLowerCase() || invoice.invoiceStatus.toLowerCase())
        )
      }
    } else {
      return (
        (invoice.email.toLowerCase().includes(queryLowered) ||
          invoice.client.toLowerCase().includes(queryLowered) ||
          String(invoice.id).toLowerCase().includes(queryLowered) ||
          String(invoice.total).toLowerCase().includes(queryLowered) ||
          invoice.dueDate.toLowerCase().includes(queryLowered)) &&
        invoice.invoiceStatus.toLowerCase() === (status.toLowerCase() || invoice.invoiceStatus.toLowerCase())
      )
    }
  })

  return [
    200,
    {
      params: config.params,
      allData: data.invoices,
      invoices: filteredData,
      total: filteredData.length
    }
  ]
})

// ------------------------------------------------
// GET: Return Single Invoice
// ------------------------------------------------
mock.onGet('apps/invoice/single-invoice').reply(config => {
  const { id } = config.params

  const invoiceData = data.invoices.filter(invoice => invoice.id === parseInt(id, 10))
  if (invoiceData.length) {
    const responseData = {
      invoice: invoiceData[0],
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
    return [404, { message: 'Unable to find the requested invoice!' }]
  }
})

// ------------------------------------------------
// GET: Return Clients
// ------------------------------------------------
mock.onGet('/manage/orders/clients').reply(() => {
  const clients = data.invoices.map(invoice => {
    const { client } = invoice

    return {
      client
    }
  })

  return [200, clients.slice(0, 5)]
})

// ------------------------------------------------
// DELETE: Deletes Invoice
// ------------------------------------------------
mock.onDelete('/manage/orders/delete').reply(config => {
  // Get invoice id from URL
  const invoiceId = Number(config.data)
  const invoiceIndex = data.invoices.findIndex(t => t.id === invoiceId)
  data.invoices.splice(invoiceIndex, 1)

  return [200]
})
