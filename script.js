const data = [
  { "CLASS NAME": "AGRICULTURE", "LOSS": 24841.83362, "GAIN": 32648.84214, "CHANGE INDEX": 0.50330358, "UNCHANGED": 15511.52986 },
  { "CLASS NAME": "FALLOW LAND", "LOSS": 11181.00657, "GAIN": 6027.561096, "CHANGE INDEX": -3.321451429, "UNCHANGED": 1551.564304 },
  { "CLASS NAME": "LOW DENSITY URBAN", "LOSS": 35493.02952, "GAIN": 41319.29557, "CHANGE INDEX": 0.319975014, "UNCHANGED": 18208.50316 },
  { "CLASS NAME": "HIGHLY DENCE URBAN", "LOSS": 29985.97271, "GAIN": 32583.96552, "CHANGE INDEX": 0.115269645, "UNCHANGED": 22538.39513 },
  { "CLASS NAME": "WATER BODY", "LOSS": 1057.981493, "GAIN": 2428.123564, "CHANGE INDEX": 2.025959705, "UNCHANGED": 676.292854 },
  { "CLASS NAME": "SHRAB", "LOSS": 6802.880756, "GAIN": 5195.546317, "CHANGE INDEX": -0.958432026, "UNCHANGED": 1677.045837 },
  { "CLASS NAME": "FOREST", "LOSS": 10583.58375, "GAIN": 8998.231447, "CHANGE INDEX": -0.367183085, "UNCHANGED": 4317.607117 },
  { "CLASS NAME": "VEGITATION", "LOSS": 16403.10092, "GAIN": 7147.82369, "CHANGE INDEX": -7.698977372, "UNCHANGED": 1202.143711 }
];

// Table
const tableHead = document.getElementById("table-head");
const tableBody = document.getElementById("data-table");

tableHead.innerHTML = `<tr>
  <th>Class Name</th>
  <th>Loss</th>
  <th>Gain</th>
  <th>Change Index</th>
  <th>Unchanged</th>
</tr>`;

tableBody.innerHTML = data.map(row => `
  <tr>
    <td>${row["CLASS NAME"]}</td>
    <td>${row.LOSS.toFixed(2)}</td>
    <td>${row.GAIN.toFixed(2)}</td>
    <td>${row["CHANGE INDEX"].toFixed(2)}</td>
    <td>${row.UNCHANGED.toFixed(2)}</td>
  </tr>
`).join("");

// Bar Chart
Plotly.newPlot('barChart', [
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.GAIN),
    name: 'Gain',
    type: 'bar',
    marker: { color: 'green' }
  },
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.LOSS),
    name: 'Loss',
    type: 'bar',
    marker: { color: 'red' }
  }
],);

// Pie Chart
function updatePieChart(valueType) {
  const values = data.map(d => valueType === "Changed"
    ? Math.abs(d.GAIN - d.LOSS)
    : d.UNCHANGED);
  const labels = data.map(d => d["CLASS NAME"]);

  Plotly.newPlot('pieChart', [{
    values: values,
    labels: labels,
    type: 'pie',
    hole: 0.4
  }],);
}

document.getElementById("valueTypeSelect").addEventListener("change", (e) => {
  updatePieChart(e.target.value);
});

// Initial render
updatePieChart("Changed");

// Dark mode toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});












  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  