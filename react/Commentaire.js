import React, { Component } from 'react';
import './html-css/css/bootstrap.min.css';
import './html-css/css/style.css';

class Commentaire extends Component{
	constructor(props){
		super(props);
		this.state={commentaire:this.props.commentaire,autor:this.props.autor,date:this.props.date};
	}

	render() {
		return (
			<div className="Commentaire example-collapse-text pt-1">
				<li className="media tw_back">
					<div className="media-body pl-2">
						<div className="media">
							<div className="media-body">
								<h4 className="media-heading fs-2">{this.state.autor} <small className="float-right pr-2 pt-1"><i>{this.state.date}</i></small></h4>
								<p className="fs-3">{this.state.commentaire}</p>
							</div>
						</div>
					</div>
				</li>	
			</div>
		);
	}
}

export default Commentaire;