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
const tableBody = document.querySelector('#asset-table-body');

function renderAssets() {
  tableBody.replaceChildren();

  assets.forEach(function (asset) {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = asset.name;

    const categoryCell = document.createElement('td');
    categoryCell.textContent = asset.category;

    const statusCell = document.createElement('td');
    statusCell.textContent = asset.status;

    const ownerCell = document.createElement('td');
    ownerCell.textContent = asset.owner;

    row.append(nameCell, categoryCell, statusCell, ownerCell);
    tableBody.append(row);
  });
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.querySelector('#asset-name').value.trim();
  const category = document.querySelector('#asset-category').value.trim();
  const owner = document.querySelector('#asset-owner').value.trim();
  const status = document.querySelector('#asset-status').value;

  if (!name || !category || !owner) {
    alert('Nama asset, kategori, dan owner wajib diisi.');
    return;
  }

  const newAsset = {
    name: name,
    category: category,
    status: status,
    owner: owner,
  };

  assets.push(newAsset);

  renderAssets();
  form.reset();
});

renderAssets();
