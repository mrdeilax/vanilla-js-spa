const register = `
<form onsubmit="event.preventDefault();onFormSubmit();">
    <div>
        <label>First name</label>
        <input type="text" name="fname" id="fname" pattern="[a-zA-Z]+" required>
    </div>
    <div>
        <label>Last name</label>
        <input type="text" name="lname" id="lname" pattern="[a-zA-Z]+" required>
    </div>
    <div>
        <label>Date of birth</label>
        <input type="date" name="date" id="date" required>
    </div>
    <div>
        <label>Phone number:</label>
        <label>+370</label>
        <input type="text" 
                name="phone" 
                id="phone"
                placeholder="94358413"
                required 
                pattern="[0-9]{8}">
        <label class="hide" id="phoneValidation">phone number already exists</label>
    </div>
    <div>
        
        <label>E-mail</label>
        <input type="email" 
                name="email" 
                id="email" 
                required>
        <label class="hide" id="emailValidation">email already exists</label>
    </div>
    <div>
        <label>Adress</label>
        <input type="text" name="adress" id="adress">
    </div>
    <div  class="form-action-buttons">
        <input type="submit" value="Submit">
    </div>
</form>

`;
