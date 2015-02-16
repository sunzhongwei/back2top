var BackToTop = React.createClass({
    getInitialState: function() {
        return {hidden: true, hover: false};
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

	handleHover: function() {
		this.setState({hover: true});
	},

	handleUnhover: function() {
		this.setState({hover: false});
	},

	render: function() {
		var btnStyle = {
			display: this.state.hidden ? "none": "",
			position: "fixed",
			bottom: "30px",
			marginLeft: "90%",
			color: this.state.hover ? "#000000": "#EF95E7",
			backgroundColor: this.state.hover ? "#DDDDDD": "#B10DC9",
			padding: "10px"
		};
		return (
  			<span onClick={this.handleClick}
			      onMouseEnter={this.handleHover}
				  onMouseLeave={this.handleUnhover}
				  style={btnStyle}>返回页首</span>
		);
	}
});

var back2topDiv = document.createElement('div');
back2topDiv.setAttribute("id", "back-to-top");
document.body.appendChild(back2topDiv);

React.render(
  <BackToTop />,
  document.getElementById('back-to-top')
);
