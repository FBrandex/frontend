// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Types
import { PermissionRowType } from 'src/types/setting/permissionTypes'

const data: { permissions: PermissionRowType[] } = {
  permissions: [
    {
      id: 1,
      name: 'Add, Update and Remove User',
      assignedTo: ['admin'],
      createdDate: '14 Apr 2022, 8:43 PM'
    },
    {
      id: 2,
      name: 'Add, Update and Remove Order',
      createdDate: '16 Sep 2022, 5:20 PM',
      assignedTo: ['admin']
    },
    {
      id: 3,
      name: 'Upload Files',
      createdDate: '14 Oct 2022, 10:20 AM',
      assignedTo: ['admin', 'realAccountAdmin', 'testAccountAdmin']
    },
    {
      id: 4,
      name: 'Enable/Disable Test',
      createdDate: '14 Oct 2022, 10:20 AM',
      assignedTo: ['admin', 'testAccountAdmin']
    },
    {
      id: 5,
      name: 'Enable/Disable Real Account',
      createdDate: '23 Aug 2022, 2:00 PM',
      assignedTo: ['admin', 'realAccountAdmin']
    },
    {
      id: 6,
      name: 'Site Management',
      createdDate: '15 Apr 2022, 11:30 AM',
      assignedTo: ['admin', 'support']
    },
    {
      id: 7,
      name: 'Only View',
      createdDate: '04 Dec 2022, 8:15 PM',
      assignedTo: ['admin', 'restricted']
    },
    {
      id: 8,
      name: 'Financial Management',
      createdDate: '25 Feb 2022, 10:30 AM',
      assignedTo: ['admin', 'financial']
    },
    {
      id: 9,
      name: 'Manage Others’ Tasks',
      createdDate: '04 Nov 2022, 11:45 AM',
      assignedTo: ['admin', 'support']
    }
  ]
}

// ------------------------------------------------
// GET: Return Permissions List
// ------------------------------------------------
mock.onGet('/apps/permissions/data').reply(config => {
  const { q = '' } = config.params
  const queryLowered = q.toLowerCase()
  const filteredData = data.permissions.filter(
    permissions =>
      permissions.name.toLowerCase().includes(queryLowered) ||
      permissions.createdDate.toLowerCase().includes(queryLowered) ||
      permissions.assignedTo.some(i => i.toLowerCase().startsWith(queryLowered))
  )

  return [
    200,
    {
      params: config.params,
      allData: data.permissions,
      permissions: filteredData,
      total: filteredData.length
    }
  ]
})
