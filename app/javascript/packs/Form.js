import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
    	<div className="container form__container">
    			<h2>You are creating a movement data sample</h2>
  			<form action="">

    			<div className="row form__row">
    				<div className="col form__text">
    					<p>Do you have a device whitelist? </p>
    				</div>

    				<div className="col">
    					<div className="form-check">
    						<label className="form-check-label">
    							<input className="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios1" value="option1" checked/>
    								YES
    						</label>
    					</div>
    					<div className="form-check">
    						<label className="form-check-label">
    							<input className="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios2" value="option2"/>
    								NO
    						</label>
    					</div>
    				</div>
    			</div>


					<div className="row form__row">
						<div className="col-md-4 form__text">
							<p>Date Range </p>
						</div>
				    <div className="col-md-4 mb-3">
				      <label for="validationDefault01">Start Date</label>
				      <input type="text" className="form-control" id="validationDefault01" placeholder="mm/dd/yyyy" value="mm/dd/yyyy" required />
				    </div>
				    <div className="col-md-4 mb-3">
				      <label for="validationDefault02">End Date</label>
				      <input type="text" className="form-control" id="validationDefault02" placeholder="mm/dd/yyyy" value="mm/dd/yyyy" required />
				    </div>
				  </div>

				  <div className="row form__row">
				  	<div className="col form__text">
				  		<p>Do you have a device whitelist? </p>
				  	</div>

				  	<div className="col">
				  		<div className="form-check">
				  			<label className="form-check-label">
				  				<input className="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios1" value="option1" checked/>
				  					YES
				  			</label>
				  		</div>
				  		<div className="form-check">
				  			<label className="form-check-label">
				  				<input className="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value="option2"/>
				  					NO
				  			</label>
				  		</div>
				  	</div>
				  </div>

			  	<div className="row form__row">
			  		<div className="col form__text">
			  			<p>Do you need to filter by custom geometries?  </p>
			  		</div>

			  		<div className="col">
			  			<div className="form-check">
			  				<label className="form-check-label">
			  					<input className="form-check-input" type="radio" name="exampleRadios3" id="exampleRadios1" value="option1" checked/>
			  						YES
			  				</label>
			  			</div>
			  			<div className="form-check">
			  				<label className="form-check-label">
			  					<input className="form-check-input" type="radio" name="exampleRadios3" id="exampleRadios2" value="option2"/>
			  						NO
			  				</label>
			  			</div>
			  		</div>
			  	</div>
			  	<div className="row">
			  		<div className="col-md-12"></div>
			  	</div>

			  	<div className="form__layer">
				  	<div className="row form__row form__color-3">
				  		<div className="col-md-12">
				  			<p className="form__label"> List as many you want; we will include data in all these locations</p>
				  		</div>
		  			</div>

		  			<div className="row form__row form__color-3 form__result">
			  			<div className="col-md-4 col-sm-3 col-2 form__block-title">Country</div>
			  			<div className="col-md-2 col-sm-2 col-2 form__block-title">Region</div>
			  			<div className="col-md-2 col-sm-2 col-2 form__block-title">Locale</div>
			  			<div className="col-md-3 col-sm-3 col-3 form__block-title">Zip code</div>
			  			<div className="col-md-1 col-sm-1 col-1 form__block-title">Delete</div>
		  			</div>

		  			<div className="row form__row form__color-2 form__result ">
			  			<div className="col-md-4 col-sm-3 col-2 ">United states of america</div>
			  			<div className="col-md-2 col-sm-2 col-2">California</div>
			  			<div className="col-md-2 col-sm-2 col-2">San diego</div>
			  			<div className="col-md-3 col-sm-3 col-2"> </div>
			  			<div className="col-md-1 col-sm-2 col-2"><button type="button" className="btn btn-danger form__small-button">X</button></div>
		  			</div>

		  			<div className="row form__row form__color-2 form__result ">
			  			<div className="col-md-4 col-sm-3 col-2">United states of america</div>
			  			<div className="col-md-2 col-sm-2 col-2">Oregon</div>
			  			<div className="col-md-2 col-sm-2 col-2">Portland</div>
			  			<div className="col-md-3 col-sm-3 col-2">Zip code</div>
			  			<div className="col-md-1 col-sm-2 col-2"><button type="button" className="btn btn-danger form__small-button">X</button></div>
		  			</div>

		  			<div className="row form__row form__color-3 form__footer align-items-end">
			  			<div className="col-md-3 col-sm-6 col-6 form__block-title"><span>Country:</span><input className="form-control" type="text"/></div>
			  			<div className="col-md-3 col-sm-6 col-6 form__block-title"><span>Region:</span><input  className="form-control" type="text" /> </div>
			  			<div className="col-md-3 col-sm-12 col-12 form__block-title"><span>Locale:</span> <input className="form-control" type="text" /> </div>
			  			<div className="col-md-2 col-sm-10 col-10 form__block-title"><span>Zip:</span> <input className="form-control" type="text" /> </div>
			  			<div className="col-md-1 col-sm-2 col-2 form__block-title"><button type="button" className="btn btn-light form__button-light float-right ">+</button></div>
		  			</div>

			  	</div>

			  	<div className="row">
		  			<div className="col-md-12 form__margin"></div>
		  		</div>

		  		<div className="form__layer ">
		  			<div className="row form__row form__color-3 form__result">
		  				<div className="col-md-12">
		  					A <a href="#">WKT</a> is the format we generally store geometries in. You can use <a href="">this website</a> to view or draw your own WKTs.
		  					For convenience, you can alternatively specifying a lat/long/radius we will convert to a WKT fot you.
		  				</div>
		  			</div>

		  			<div className="row form__row form__color-3 justify-content-between form__result">
		  				<div className="col-md-1 col-sm-3 col-3 form__block-title">WKT</div>
		  				<div className="col-md-1 col-sm-2 col-2 form__block-title text-right">Delete</div>
		  			</div>

		  			<div className="row form__row form__color-3 justify-content-between form__coordinats  ">
		  				<div className="col-md-10 col-sm-10 col-10">13131466464646434343543
		  				4343434343 434 304 40 34 304 034 034 30 430 403 043 043 403 403 403 043 3 0304 3540 3403403434343
		  				043 043 54 340 3504 3504 35 05 4 3 434 34 3435 434 3
		  				40306 46  4+4+564+89 +89 47+9 4+84 +94+9
		  				434300434</div>
		  				<div className="col-md-1 col-sm-2 col-2"><button type="button" className="btn btn-danger form__small-button">X</button></div>
		  			</div>

		  			<div className="row form__row form__color-3 justify-content-between form__result ">
		  				<div className="col-md-1 col-sm-1 col-1 form__block-title align-self-center"><span>WKT:</span> </div>
		  				<div className="col-md-9 col-sm-8 col-8 form__block-title"> <textarea className="form-control" rows="2"></textarea></div>
		  				<div className="col-md-2 col-sm-3 col-3 form__block-title"><button type="button" className="btn btn-light float-right form__size-button">+ Add WKT</button></div>
		  			</div>

		  			<div className="row form__row form__color-3 justify-content-between form__result align-items-end">
		  				<div className="col-md-3 col-sm-6 col-6 form__block-title"><span>Lat:</span> <input className="form-control" type="text"/></div>
		  				<div className="col-md-3 col-sm-6 col-6 form__block-title"><span>long:</span><input className="form-control" type="text"/></div>
		  				<div className="col-md-3 col-sm-9 col-8 form__block-title"><span>Radius (meters):</span><input className="form-control" type="text"/></div>
		  				<div className="col-md-2 col-sm-3 col-3 form__block-title"><button type="button" className="btn btn-light float-right form__size-button">+ Add Circle</button></div>
		  			</div>

		  			<div className="row form__row form__color-3 justify-content-between form__result align-items-end">
		  				<div className="col-md-3 col-sm-6 col-6 form__block-title"><span>Lat:</span> <input className="form-control" type="text"/></div>
		  				<div className="col-md-3 col-sm-6 col-6 form__block-title"><span>long:</span><input className="form-control" type="text"/></div>
		  				<div className="col-md-3 col-sm-7 col-7 form__block-title"><span>Radius (meters):</span><input className="form-control" type="text"/></div>
		  				<div className="col-md-2 col-sm-5 col-5 form__block-title"><button type="button" className="btn btn-light float-right form__size-button">+ Add Bounding Box</button></div>
		  			</div>
		  		</div>




			  	<div className="row form__row">
			  		<div className="col form__text">
			  			<p>What sort of device id should be in the output?  </p>
			  		</div>

			  		<div className="col">
			  			<div className="form-check">
			  				<label className="form-check-label">
			  					<input className="form-check-input" type="radio" name="exampleRadios4" id="exampleRadios1" value="option1" checked/>
			  						Ad_id
			  				</label>
			  			</div>
			  			<div className="form-check">
			  				<label className="form-check-label">
			  					<input className="form-check-input" type="radio" name="exampleRadios4" id="exampleRadios2" value="option2"/>
			  						Safegraph_id
			  				</label>
			  			</div>
			  		</div>
			  	</div>

			  	<div className="row form__row">
			  		<div className="col form__text">
			  			<p>Do you need custom columns?</p>
			  		</div>

			  		<div className="col">
			  			<div className="form-check">
			  				<label className="form-check-label">
			  					<input className="form-check-input" type="radio" name="exampleRadios5" id="exampleRadios1" value="option1" />
			  						YES
			  				</label>
			  			</div>
			  			<div className="form-check">
			  				<label className="form-check-label">
			  					<input className="form-check-input" type="radio" name="exampleRadios5" id="exampleRadios2" value="option2" checked/>
			  						NO
			  				</label>
			  			</div>
			  		</div>
			  	</div>

			  	<div className="row form__row">
			  		<div className="col">
			  			<div className="form-check">
			  			  <label className="form-check-label">
			  			    <input className="form-check-input" type="checkbox"  value=""  />
			  			    	Latitude
			  			  </label>
			  			</div>
			  			<div className="form-check">
			  			  <label className="form-check-label">
			  			    <input className="form-check-input" type="checkbox" value="" />
			  			    Longitube
			  			  </label>
			  			</div>
			  			<div className="form-check">
			  			  <label className="form-check-label">
			  			    <input className="form-check-input" type="checkbox"  value=""  />
			  			    	Id_type
			  			  </label>
			  			</div>
			  			<div className="form-check">
			  			  <label className="form-check-label">
			  			    <input className="form-check-input" type="checkbox" value="" />
			  			    Utc_timestamp
			  			  </label>
			  			</div>
			  			<div className="form-check">
			  			  <label className="form-check-label">
			  			    <input className="form-check-input" type="checkbox"  value=""  />
			  			    	Local_timestamp
			  			  </label>
			  			</div>
			  			<div className="form-check">
			  			  <label className="form-check-label">
			  			    <input className="form-check-input" type="checkbox" value="" />
			  			    	Utc_timestamp_formatted
			  			  </label>
			  			</div>
			  			<div className="form-check">
			  			  <label className="form-check-label">
			  			    <input className="form-check-input" type="checkbox"  value=""  />
			  			    	Local_timestamp_formatted
			  			  </label>
			  			</div>
			  			<div className="form-check">
			  			  <label className="form-check-label">
			  			    <input className="form-check-input" type="checkbox" value="" />
			  			    Geo_hash
			  			  </label>
			  			</div>
			  		</div>
			  	</div>

			  	<div className="row form__row">
			  		<div className="col form__text">
			  			<p>Who is sample for?</p>
			  		</div>
			  		<div className="col-md-9">
	  		      <input type="text" className="form-control" placeholder="Name" />
	  		    </div>
			  	</div>

			  	<div className="row form__row">
			  		<div className="col form__text">
			  			<p>Generate pdf summary? (expensive) </p>
			  		</div>

			  		<div className="col">
			  			<div className="form-check">
			  				<label className="form-check-label">
			  					<input className="form-check-input" type="radio" name="exampleRadios6" id="exampleRadios1" value="option1" />
			  						YES
			  				</label>
			  			</div>
			  			<div className="form-check">
			  				<label className="form-check-label">
			  					<input className="form-check-input" type="radio" name="exampleRadios6" id="exampleRadios2" value="option2" checked/>
			  						NO
			  				</label>
			  			</div>
			  		</div>
			  	</div>

			  	<div className="row form__row form__color">
			  		<div className="col">
			  			<div className="form-group">
			  				<div className="form__flex">
			  					<label for="inputState">Name of Location to Display in PDF:</label>
			  					<input type="text" className="form-control"/>
			  				</div>

	  			      <div className="form__flex">
	  			      	<span>PDF Map Size:</span>
	  			      	<div className="form__country">
	  			      		<select id="inputState" className="form-control">
	  			      		  <option selected>Country</option>
	  			      		  <option>...</option>
	  			      		</select>
	  			      		<span className="form__descriptions">Please use United States if your sample is of the US</span>
	  			      	</div>
	  			      </div>

	  			    </div>
			  		</div>
			  	</div>

			  	<div className="row form__row">
			  		<div className="col form__text">
			  			<p>What email should receive notifications about this sample?(only list one)</p>
			  		</div>
			  		<div className="col-md-8">
	  		      <label for="exampleFormControlTextarea1"></label>
  		          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Email"></textarea>
	  		    </div>
			  	</div>

			  	<div className="row form__row justify-content-center">
			  		<div className="col-md-4 col-sm-6 col-6">
			  			<button type="button" class="btn btn-primary btn-lg form__btn-secondary">View configuration</button>
			  		</div>
			  		<div className="col-md-4 col-sm-6 col-6">
			  			<button type="button" class="btn btn-secondary btn-lg btn-danger form__btn-secondary">Generate Sample</button>
			  		</div>
			  	</div>

			  	<div className="row form__row">
			  		<div className="col">
	  		      <label for="exampleFormControlTextarea1">Here is your configuration: </label>
  		          <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" ></textarea>
			  		</div>
			  	</div>

			  </form>
    	</div>

    );
  }
};

export default Form;
