import React, { Component } from 'react';
import SignIn from './SignIn';
import Principale from './Principale';
import Login from './Login';
import Profil from './Profil';
import Query from './Query';

class NavigationPannel extends Component{

	render(){
		var temp;
		if (this.props.page === "Register"){//Page d'enregistrement
			temp=<SignIn logout={this.props.logout} login={this.props.login}/>;
		}else if (this.props.page === "Profil"){//Page profil
			temp=<Profil user={this.props.user} Ukey={this.props.Ukey} owner={this.props.owner} liste_co={this.props.liste_co} delete={this.props.delete} deleteCom={this.props.deleteCom} login={this.props.login} logout={this.props.logout} 
									page={this.props.page} profil={this.props.profil} principale={this.props.principale} liste_msg={this.props.liste_msg} 
									liste_ami={this.props.liste_ami} refreshMsg={this.props.refreshMsg} refreshQuery={this.props.refreshQuery} getListAmi={this.props.getListAmi}/>
		}else if( this.props.page === "Query"){
			temp=<Query user={this.props.user} Ukey={this.props.Ukey}	owner={this.props.owner} liste_co={this.props.liste_co} delete={this.props.delete} deleteCom={this.props.deleteCom} login={this.props.login} logout={this.props.logout} 
									page={this.props.page} profil={this.props.profil} principale={this.props.principale} liste_msg={this.props.liste_msg} 
									liste_ami={this.props.liste_ami} refreshQuery={this.props.refreshQuery} liste_query={this.props.liste_query} query={this.props.query} />;
		}else if (this.props.connected){//Page principale
			temp=<Principale user={this.props.user} Ukey={this.props.Ukey} owner={this.props.owner} liste_co={this.props.liste_co} delete={this.props.delete} deleteCom={this.props.deleteCom} login={this.props.login} logout={this.props.logout} 
											page={this.props.page} profil={this.props.profil} principale={this.props.principale} liste_msg={this.props.liste_msg} 
											liste_ami={this.props.liste_ami}  refreshMsg={this.props.refreshMsg} refreshQuery={this.props.refreshQuery}/>;
		}else {//Page de connexion
			temp=<Login login={this.props.login} logout={this.props.logout} register={this.props.register} getListAmi={this.props.getListAmi} refreshMsg={this.props.refreshMsg} getListCo={this.props.getListCo}/>;
		}
		
		return (
			<div className="NaviagtionPannel">
				<nav>
					{temp}
				</nav>
			</div>
		);
	}
}

export default NavigationPannel;