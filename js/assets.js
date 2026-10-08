const assets = [
  {
    name: 'Dell Latitude 5420',
    category: 'Laptop',
    status: 'Active',
    owner: 'Rifky',
  },
  {
    name: 'Cisco Switch',
    category: 'Network',
    status: 'Active',
    owner: 'IT Team',
  },
  {
    name: 'HP ProDesk',
    category: 'PC',
    status: 'Maintenance',
    owner: 'IT Team',
  },
];
const form = document.querySelector('#asset-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.querySelector('#asset-name').value;
  const category = document.querySelector('#asset-category').value;
  const owner = document.querySelector('#asset-owner').value;
  const status = document.querySelector('#asset-status').value;

  console.log(name, category, owner, status);
});
const tableBody = document.querySelector('#asset-table-body');

assets.forEach(function (asset) {
  tableBody.innerHTML += `
    <tr>
      <td>${asset.name}</td>
      <td>${asset.category}</td>
      <td>${asset.status}</td>
      <td>${asset.owner}</td>
    </tr>
  `;
});
