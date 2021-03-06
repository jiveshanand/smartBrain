import React from 'react';

const Register = ({onRouteChange}) => {
	return (
		<article className="br3 shadow-2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
			<main className="pa4 black-80 center-display">
				<div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				        <legend className="f2 center fw6 ph0 mh0">Register</legend>
				        <div className="mv3">
					        <label className="db fw6 lh-copy center f6" for="password">Name</label>
					        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="Name"  id="name" />
					    </div>
				        <div className="mt3">
				            <label className="db fw6 lh-copy center f6" for="email-address">Email</label>
				            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
				        </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy center f6" for="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
				      </div>
				    </fieldset>
				    <div className="center-display">
				      <input 
				      	className="b ph3 pv2 input-reset ba center b--black bg-transparent grow pointer f6 dib" 
				      	type="submit" 
				      	value="Register"
				      	onClick={() => onRouteChange('signIn')}/>
				    </div>
				  </div>
			</main>
		</article>
	);
}

export default Register;