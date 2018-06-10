import '../asserts/styles/footer.scss';

export default {
	data() {
		return {
			author: 'gurifyuanin'
		}
	},
	render() {
		return (
			<div id="footer">
				<span>copyright : {this.author}</span>
			</div>
		)
	}
}