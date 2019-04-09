import React, { Component } from 'react';
import Message from './Message.js';

class Liste_msg extends Component{
	constructor(props){
		super(props);
		this.state={message:0,autor:0,date:0,listeCom:0,listeLike:0,id:0}
	}

	render() {
		var temp;
		//console.log(this.props.liste_msg);
		if(this.props.liste_msg === 'empty' || this.props.liste_msg === undefined ){
			temp=<label>Pas de Messages</label>;
		}
		else { 
			temp=this.props.liste_msg.map(messages => {
					return <Message message={messages.message} autor={messages.login} date={messages.date} listeCom={messages.listeCom} listeLike={messages.listeLike} profil={this.props.profil} owner={this.props.owner} Ukey={this.props.Ukey} user={this.props.user} id={messages.id} refreshMsg={this.props.refreshMsg} page={this.props.page} delete={this.props.delete} deleteCom={this.props.deleteCom}/>;
			});
		}
		return (
			<div className="container"> 
				<div className="row">
					<ul className="list-unstyled w-50 mx-auto">	  
						{temp}
						<p></p>
					</ul>
				</div>
			</div>
		);
	}
}


export default Liste_msg; 