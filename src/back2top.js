var BackToTop = React.createClass({
    getInitialState: function() {
        return {hidden: true};
    },

    componentDidMount: function() {
		window.addEventListener("scroll", this.handleScroll);
    },

	handleClick: function(e) {
		e.preventDefault();
		window.scrollTo(0, 0);
	},

	handleScroll: function() {
		var scrollTop = document.getElementsByTagName("body")[0].scrollTop;
		if (scrollTop > 100) {
			this.setState({hidden: false});
		} else {
			this.setState({hidden: true});
		}
    },

	render: function() {
		var btnStyle = {
			display: this.state.hidden ? "none": "",
			position: "fixed",
			bottom: "30px",
			marginLeft: "90%"
		};
		return (
  			<span onClick={this.handleClick} style={btnStyle}>返回页首</span>
		);
	}
});

React.render(
  <BackToTop />,
  document.getElementById('back-to-top')
);
