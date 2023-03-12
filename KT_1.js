const numbers = []
for (let i = 0; i < 30; i++) {
	numbers.push(Math.round(Math.random() * 99))
}
const render = () => {
	const cells = numbers.map(num => `<td class=${num >= 50 ? 'red' : ''}>${num}</td>`)
	const rows = []
	cells.forEach((cell, i) => {
		if (i === 0) {
			rows.push([cell])
			console.log(i);
		} else if ((i % 5) === 0) {
			rows.push([])
			rows[rows.length - 1].push(cell)
			console.log('5', i);
		} else {
			rows[rows.length - 1].push(cell)
		}
	})
	const table = `
		<table>
			${rows.map(row => `<tr>${row.join('')}</tr>`).join('')}
		</table >
	`
	const root = document.querySelector('#root')
	root.innerHTML = table
}
const addCell = () => {
	numbers.push(Math.round(Math.random() * 99))
	render()
	console.log('handler');
}

const btn = document.querySelector('#addButton')
btn.addEventListener('click', addCell)
render()